Feature: User Management API Tests

Background:
  * url apiUrl
  * configure headers = headers
  # Login as admin user
  * def loginResult = call read('classpath:com/tradingsystem/helpers/auth-helper.js') { user: adminUser }
  * def authToken = loginResult.token
  * header Authorization = 'Bearer ' + authToken

Scenario: Get All Users (Admin Only)
  Given path '/users'
  When method GET
  Then status 200
  And match response == 
    """
    {
      "success": true,
      "data": {
        "users": "#array",
        "pagination": {
          "page": "#number",
          "limit": "#number",
          "total": "#number",
          "totalPages": "#number"
        }
      }
    }
    """

Scenario: Get User by ID
  # First get all users to pick one
  Given path '/users'
  When method GET
  Then status 200
  * def users = response.data.users
  * def userId = users[0].id
  
  # Get specific user
  Given path '/users/' + userId
  When method GET
  Then status 200
  And match response == 
    """
    {
      "success": true,
      "data": {
        "id": #(userId),
        "email": "#string",
        "name": "#string",
        "role": "#string",
        "status": "#string",
        "createdAt": "#string",
        "updatedAt": "#string",
        "profile": {
          "tradingExperience": "#string",
          "riskTolerance": "#string",
          "preferredAssets": "#array"
        }
      }
    }
    """

Scenario: Update User Profile
  # Login as regular user
  * def userLoginResult = call read('classpath:com/tradingsystem/helpers/auth-helper.js') { user: testUser }
  * def userToken = userLoginResult.token
  * header Authorization = 'Bearer ' + userToken
  
  Given path '/users/profile'
  And request 
    """
    {
      "name": "Updated Test User",
      "profile": {
        "tradingExperience": "INTERMEDIATE",
        "riskTolerance": "MODERATE",
        "preferredAssets": ["BTC", "ETH", "ADA"],
        "bio": "Updated bio for testing"
      }
    }
    """
  When method PUT
  Then status 200
  And match response == 
    """
    {
      "success": true,
      "message": "Profile updated successfully",
      "data": {
        "id": "#number",
        "name": "Updated Test User",
        "profile": {
          "tradingExperience": "INTERMEDIATE",
          "riskTolerance": "MODERATE",
          "preferredAssets": ["BTC", "ETH", "ADA"],
          "bio": "Updated bio for testing"
        },
        "updatedAt": "#string"
      }
    }
    """

Scenario: Change User Password
  # Login as regular user
  * def userLoginResult = call read('classpath:com/tradingsystem/helpers/auth-helper.js') { user: testUser }
  * def userToken = userLoginResult.token
  * header Authorization = 'Bearer ' + userToken
  
  Given path '/users/change-password'
  And request 
    """
    {
      "currentPassword": "#(testUser.password)",
      "newPassword": "NewTestPassword123!",
      "confirmPassword": "NewTestPassword123!"
    }
    """
  When method POST
  Then status 200
  And match response == 
    """
    {
      "success": true,
      "message": "Password changed successfully"
    }
    """

Scenario: Update User Status (Admin Only)
  # First get all users to pick one
  Given path '/users'
  When method GET
  Then status 200
  * def users = response.data.users
  * def userId = users[0].id
  
  # Update user status
  Given path '/users/' + userId + '/status'
  And request 
    """
    {
      "status": "SUSPENDED",
      "reason": "Testing user suspension"
    }
    """
  When method PUT
  Then status 200
  And match response == 
    """
    {
      "success": true,
      "message": "User status updated successfully",
      "data": {
        "id": #(userId),
        "status": "SUSPENDED",
        "statusReason": "Testing user suspension",
        "updatedAt": "#string"
      }
    }
    """

Scenario: Delete User (Admin Only)
  # First create a user to delete
  Given path '/auth/register'
  And request 
    """
    {
      "email": "todelete@example.com",
      "password": "DeleteMe123!",
      "name": "To Delete User",
      "confirmPassword": "DeleteMe123!"
    }
    """
  When method POST
  Then status 201
  * def userToDeleteId = response.data.id
  
  # Delete the user
  Given path '/users/' + userToDeleteId
  When method DELETE
  Then status 200
  And match response == 
    """
    {
      "success": true,
      "message": "User deleted successfully"
    }
    """

Scenario: Search Users
  Given path '/users/search'
  And param query = 'test'
  And param role = 'USER'
  And param status = 'ACTIVE'
  And param page = 1
  And param limit = 10
  When method GET
  Then status 200
  And match response == 
    """
    {
      "success": true,
      "data": {
        "users": "#array",
        "pagination": {
          "page": 1,
          "limit": 10,
          "total": "#number",
          "totalPages": "#number"
        },
        "searchCriteria": {
          "query": "test",
          "role": "USER",
          "status": "ACTIVE"
        }
      }
    }
    """

Scenario: Get User Trading Statistics
  # Login as regular user
  * def userLoginResult = call read('classpath:com/tradingsystem/helpers/auth-helper.js') { user: testUser }
  * def userToken = userLoginResult.token
  * header Authorization = 'Bearer ' + userToken
  
  Given path '/users/trading-stats'
  And param period = '30d'
  When method GET
  Then status 200
  And match response == 
    """
    {
      "success": true,
      "data": {
        "userId": "#number",
        "period": "30d",
        "totalTrades": "#number",
        "winningTrades": "#number",
        "losingTrades": "#number",
        "winRate": "#number",
        "totalPnL": "#number",
        "totalVolume": "#number",
        "averageTradeSize": "#number",
        "bestTrade": "#object",
        "worstTrade": "#object",
        "favoriteSymbols": "#array"
      }
    }
    """
