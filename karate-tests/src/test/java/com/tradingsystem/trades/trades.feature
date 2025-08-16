Feature: Trading API Tests

Background:
  * url apiUrl
  * configure headers = headers
  # Login and get auth token
  * def loginResult = call read('classpath:com/tradingsystem/helpers/auth-helper.js') { user: testUser }
  * def authToken = loginResult.token
  * header Authorization = 'Bearer ' + authToken

Scenario: Create New Trade
  Given path '/trades'
  And request 
    """
    {
      "symbol": "#(testTrade.symbol)",
      "side": "#(testTrade.side)",
      "quantity": #(testTrade.quantity),
      "price": #(testTrade.price),
      "type": "LIMIT",
      "timeInForce": "GTC"
    }
    """
  When method POST
  Then status 201
  And match response == 
    """
    {
      "success": true,
      "message": "Trade created successfully",
      "data": {
        "id": "#number",
        "symbol": "#(testTrade.symbol)",
        "side": "#(testTrade.side)",
        "quantity": #(testTrade.quantity),
        "price": #(testTrade.price),
        "type": "LIMIT",
        "status": "PENDING",
        "createdAt": "#string",
        "userId": "#number"
      }
    }
    """
  * def tradeId = response.data.id

Scenario: Get All Trades for User
  Given path '/trades'
  When method GET
  Then status 200
  And match response == 
    """
    {
      "success": true,
      "data": {
        "trades": "#array",
        "pagination": {
          "page": "#number",
          "limit": "#number",
          "total": "#number",
          "totalPages": "#number"
        }
      }
    }
    """

Scenario: Get Trade by ID
  # First create a trade
  Given path '/trades'
  And request 
    """
    {
      "symbol": "ETHUSDT",
      "side": "SELL",
      "quantity": 0.1,
      "price": 3000,
      "type": "LIMIT"
    }
    """
  When method POST
  Then status 201
  * def tradeId = response.data.id
  
  # Get the trade by ID
  Given path '/trades/' + tradeId
  When method GET
  Then status 200
  And match response == 
    """
    {
      "success": true,
      "data": {
        "id": #(tradeId),
        "symbol": "ETHUSDT",
        "side": "SELL",
        "quantity": 0.1,
        "price": 3000,
        "type": "LIMIT",
        "status": "#string",
        "createdAt": "#string",
        "userId": "#number"
      }
    }
    """

Scenario: Update Trade Status
  # First create a trade
  Given path '/trades'
  And request 
    """
    {
      "symbol": "ADAUSDT",
      "side": "BUY",
      "quantity": 100,
      "price": 0.5,
      "type": "LIMIT"
    }
    """
  When method POST
  Then status 201
  * def tradeId = response.data.id
  
  # Update trade status
  Given path '/trades/' + tradeId + '/status'
  And request 
    """
    {
      "status": "EXECUTED",
      "executedPrice": 0.52,
      "executedQuantity": 100,
      "executedAt": "#(new Date().toISOString())"
    }
    """
  When method PUT
  Then status 200
  And match response == 
    """
    {
      "success": true,
      "message": "Trade status updated successfully",
      "data": {
        "id": #(tradeId),
        "status": "EXECUTED",
        "executedPrice": 0.52,
        "executedQuantity": 100,
        "executedAt": "#string"
      }
    }
    """

Scenario: Cancel Trade
  # First create a trade
  Given path '/trades'
  And request 
    """
    {
      "symbol": "DOGEUSDT",
      "side": "BUY",
      "quantity": 1000,
      "price": 0.1,
      "type": "LIMIT"
    }
    """
  When method POST
  Then status 201
  * def tradeId = response.data.id
  
  # Cancel the trade
  Given path '/trades/' + tradeId + '/cancel'
  When method POST
  Then status 200
  And match response == 
    """
    {
      "success": true,
      "message": "Trade cancelled successfully",
      "data": {
        "id": #(tradeId),
        "status": "CANCELLED",
        "cancelledAt": "#string"
      }
    }
    """

Scenario: Get Trade History with Filters
  Given path '/trades/history'
  And param symbol = 'BTCUSDT'
  And param side = 'BUY'
  And param status = 'EXECUTED'
  And param from = '2024-01-01'
  And param to = '2024-12-31'
  And param page = 1
  And param limit = 10
  When method GET
  Then status 200
  And match response == 
    """
    {
      "success": true,
      "data": {
        "trades": "#array",
        "pagination": {
          "page": 1,
          "limit": 10,
          "total": "#number",
          "totalPages": "#number"
        },
        "filters": {
          "symbol": "BTCUSDT",
          "side": "BUY",
          "status": "EXECUTED",
          "from": "2024-01-01",
          "to": "2024-12-31"
        }
      }
    }
    """

Scenario: Get Trade Statistics
  Given path '/trades/statistics'
  And param period = '30d'
  When method GET
  Then status 200
  And match response == 
    """
    {
      "success": true,
      "data": {
        "totalTrades": "#number",
        "executedTrades": "#number",
        "cancelledTrades": "#number",
        "totalVolume": "#number",
        "totalPnL": "#number",
        "winRate": "#number",
        "averageTradeSize": "#number",
        "mostTradedSymbol": "#string",
        "period": "30d"
      }
    }
    """
