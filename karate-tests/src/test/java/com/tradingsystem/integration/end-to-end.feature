Feature: End-to-End Trading System Tests

Background:
  * url apiUrl
  * configure headers = headers
  * def dataSetup = call read('classpath:com/tradingsystem/helpers/data-setup.js')

@integration
Scenario: Complete Trading Workflow - User Registration to Trade Execution
  # Step 1: Register a new user
  * def randomEmail = dataSetup.generateRandomEmail()
  * def newUser = { email: '#(randomEmail)', password: 'TestPassword123!', name: 'E2E Test User' }
  
  Given path '/auth/register'
  And request 
    """
    {
      "email": "#(newUser.email)",
      "password": "#(newUser.password)",
      "name": "#(newUser.name)",
      "confirmPassword": "#(newUser.password)"
    }
    """
  When method POST
  Then status 201
  * def userId = response.data.id
  
  # Step 2: Login with the new user
  Given path '/auth/login'
  And request 
    """
    {
      "email": "#(newUser.email)",
      "password": "#(newUser.password)"
    }
    """
  When method POST
  Then status 200
  * def authToken = response.data.token
  * header Authorization = 'Bearer ' + authToken
  
  # Step 3: Update user profile
  Given path '/users/profile'
  And request 
    """
    {
      "profile": {
        "tradingExperience": "BEGINNER",
        "riskTolerance": "LOW",
        "preferredAssets": ["BTC", "ETH"]
      }
    }
    """
  When method PUT
  Then status 200
  
  # Step 4: Create a trade
  * def tradeRequest = dataSetup.generateRandomTrade()
  Given path '/trades'
  And request tradeRequest
  When method POST
  Then status 201
  * def tradeId = response.data.id
  
  # Step 5: Check trade status
  Given path '/trades/' + tradeId
  When method GET
  Then status 200
  And match response.data.status == 'PENDING'
  
  # Step 6: Update trade to executed status
  Given path '/trades/' + tradeId + '/status'
  And request 
    """
    {
      "status": "EXECUTED",
      "executedPrice": #(tradeRequest.price * 1.01),
      "executedQuantity": #(tradeRequest.quantity),
      "executedAt": "#(new Date().toISOString())"
    }
    """
  When method PUT
  Then status 200
  
  # Step 7: Verify trade in history
  Given path '/trades/history'
  When method GET
  Then status 200
  And match response.data.trades[*].id contains tradeId
  
  # Step 8: Check user statistics
  Given path '/users/trading-stats'
  And param period = '1d'
  When method GET
  Then status 200
  And match response.data.totalTrades >= 1
  
  # Step 9: Get portfolio analysis
  Given path '/statistics/portfolio'
  When method GET
  Then status 200
  And match response.data.positions != null
  
  # Cleanup: Delete the test user and related data
  * call dataSetup.cleanupTestData(userId, authToken)

@integration
Scenario: Multi-User Trading Competition Simulation
  * def user1Email = dataSetup.generateRandomEmail()
  * def user2Email = dataSetup.generateRandomEmail()
  
  # Create two users
  * def user1Response = dataSetup.createTestUser({ email: '#(user1Email)', password: 'Test123!', name: 'Trader 1' })
  * def user2Response = dataSetup.createTestUser({ email: '#(user2Email)', password: 'Test123!', name: 'Trader 2' })
  * match user1Response.status == 201
  * match user2Response.status == 201
  
  # Login both users
  * def user1Login = call read('classpath:com/tradingsystem/helpers/auth-helper.js') { user: { username: '#(user1Email)', password: 'Test123!' } }
  * def user2Login = call read('classpath:com/tradingsystem/helpers/auth-helper.js') { user: { username: '#(user2Email)', password: 'Test123!' } }
  
  # User 1 creates winning trades
  * header Authorization = 'Bearer ' + user1Login.token
  * def trade1Response = dataSetup.createTestTrade({ symbol: 'BTCUSDT', side: 'BUY', quantity: 0.1, price: 45000, type: 'LIMIT' }, user1Login.token)
  * def trade2Response = dataSetup.createTestTrade({ symbol: 'ETHUSDT', side: 'BUY', quantity: 1, price: 3000, type: 'LIMIT' }, user1Login.token)
  
  # User 2 creates different trades
  * header Authorization = 'Bearer ' + user2Login.token
  * def trade3Response = dataSetup.createTestTrade({ symbol: 'ADAUSDT', side: 'SELL', quantity: 100, price: 0.5, type: 'LIMIT' }, user2Login.token)
  * def trade4Response = dataSetup.createTestTrade({ symbol: 'DOGEUSDT', side: 'BUY', quantity: 1000, price: 0.1, type: 'LIMIT' }, user2Login.token)
  
  # Execute all trades with different outcomes
  * header Authorization = 'Bearer ' + user1Login.token
  Given path '/trades/' + trade1Response.body.data.id + '/status'
  And request { status: 'EXECUTED', executedPrice: 46000, executedQuantity: 0.1, executedAt: '#(new Date().toISOString())' }
  When method PUT
  Then status 200
  
  Given path '/trades/' + trade2Response.body.data.id + '/status'
  And request { status: 'EXECUTED', executedPrice: 3100, executedQuantity: 1, executedAt: '#(new Date().toISOString())' }
  When method PUT
  Then status 200
  
  * header Authorization = 'Bearer ' + user2Login.token
  Given path '/trades/' + trade3Response.body.data.id + '/status'
  And request { status: 'EXECUTED', executedPrice: 0.48, executedQuantity: 100, executedAt: '#(new Date().toISOString())' }
  When method PUT
  Then status 200
  
  Given path '/trades/' + trade4Response.body.data.id + '/status'
  And request { status: 'CANCELLED', cancelledAt: '#(new Date().toISOString())' }
  When method PUT
  Then status 200
  
  # Compare performance
  * header Authorization = 'Bearer ' + user1Login.token
  Given path '/users/trading-stats'
  And param period = '1d'
  When method GET
  Then status 200
  * def user1Stats = response.data
  
  * header Authorization = 'Bearer ' + user2Login.token
  Given path '/users/trading-stats'
  And param period = '1d'
  When method GET
  Then status 200
  * def user2Stats = response.data
  
  # Verify different performance metrics
  * match user1Stats.totalTrades == 2
  * match user2Stats.totalTrades == 2
  * match user1Stats.winningTrades == 2
  * match user2Stats.winningTrades == 1
  
  # Cleanup
  * call dataSetup.cleanupTestData(user1Response.body.data.id, user1Login.token)
  * call dataSetup.cleanupTestData(user2Response.body.data.id, user2Login.token)

@integration @performance
Scenario: Load Test - Multiple Concurrent Trades
  # Login as test user
  * def loginResult = call read('classpath:com/tradingsystem/helpers/auth-helper.js') { user: testUser }
  * def authToken = loginResult.token
  * header Authorization = 'Bearer ' + authToken
  
  # Create 10 trades simultaneously
  * def tradeIds = []
  * def createTrade = function(i) { return dataSetup.generateRandomTrade() }
  
  # Create trades in parallel (simulated)
  * def trade1 = createTrade(1)
  * def trade2 = createTrade(2)
  * def trade3 = createTrade(3)
  * def trade4 = createTrade(4)
  * def trade5 = createTrade(5)
  
  # Execute trades
  Given path '/trades'
  And request trade1
  When method POST
  Then status 201
  * def tradeId1 = response.data.id
  
  Given path '/trades'
  And request trade2
  When method POST
  Then status 201
  * def tradeId2 = response.data.id
  
  Given path '/trades'
  And request trade3
  When method POST
  Then status 201
  * def tradeId3 = response.data.id
  
  Given path '/trades'
  And request trade4
  When method POST
  Then status 201
  * def tradeId4 = response.data.id
  
  Given path '/trades'
  And request trade5
  When method POST
  Then status 201
  * def tradeId5 = response.data.id
  
  # Verify all trades were created
  Given path '/trades'
  When method GET
  Then status 200
  And match response.data.trades[*].id contains tradeId1
  And match response.data.trades[*].id contains tradeId2
  And match response.data.trades[*].id contains tradeId3
  And match response.data.trades[*].id contains tradeId4
  And match response.data.trades[*].id contains tradeId5
  
  # Check system performance metrics
  Given path '/statistics/overview'
  And param period = '1h'
  When method GET
  Then status 200
  And match response.data.totalTrades >= 5
