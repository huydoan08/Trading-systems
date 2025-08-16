Feature: Authentication API Tests

Background:
  * url apiUrl
  * configure headers = headers

Scenario: User Registration
  Given path '/auth/register'
  And request 
    """
    {
      "email": "newuser@example.com",
      "password": "NewPassword123!",
      "name": "New User",
      "confirmPassword": "NewPassword123!"
    }
    """
  When method POST
  Then status 201
  And match response == 
    """
    {
      "success": true,
      "message": "User registered successfully",
      "data": {
        "id": "#number",
        "email": "newuser@example.com",
        "name": "New User",
        "createdAt": "#string"
      }
    }
    """

Scenario: User Login - Valid Credentials
  Given path '/auth/login'
  And request 
    """
    {
      "email": "#(testUser.username)",
      "password": "#(testUser.password)"
    }
    """
  When method POST
  Then status 200
  And match response == 
    """
    {
      "success": true,
      "message": "Login successful",
      "data": {
        "token": "#string",
        "refreshToken": "#string",
        "user": {
          "id": "#number",
          "email": "#(testUser.username)",
          "name": "#string"
        }
      }
    }
    """
  * def authToken = response.data.token
  * def refreshToken = response.data.refreshToken

Scenario: User Login - Invalid Credentials
  Given path '/auth/login'
  And request 
    """
    {
      "email": "invalid@example.com",
      "password": "WrongPassword123!"
    }
    """
  When method POST
  Then status 401
  And match response == 
    """
    {
      "success": false,
      "message": "Invalid credentials",
      "error": "UNAUTHORIZED"
    }
    """

Scenario: Get User Profile - With Valid Token
  # First login to get token
  Given path '/auth/login'
  And request 
    """
    {
      "email": "#(testUser.username)",
      "password": "#(testUser.password)"
    }
    """
  When method POST
  Then status 200
  * def authToken = response.data.token
  
  # Get profile with token
  Given path '/auth/profile'
  And header Authorization = 'Bearer ' + authToken
  When method GET
  Then status 200
  And match response == 
    """
    {
      "success": true,
      "data": {
        "id": "#number",
        "email": "#(testUser.username)",
        "name": "#string",
        "createdAt": "#string",
        "updatedAt": "#string"
      }
    }
    """

Scenario: Get User Profile - Without Token
  Given path '/auth/profile'
  When method GET
  Then status 401
  And match response.success == false

Scenario: Refresh Token
  # First login to get tokens
  Given path '/auth/login'
  And request 
    """
    {
      "email": "#(testUser.username)",
      "password": "#(testUser.password)"
    }
    """
  When method POST
  Then status 200
  * def refreshToken = response.data.refreshToken
  
  # Use refresh token
  Given path '/auth/refresh'
  And request 
    """
    {
      "refreshToken": "#(refreshToken)"
    }
    """
  When method POST
  Then status 200
  And match response == 
    """
    {
      "success": true,
      "data": {
        "token": "#string",
        "refreshToken": "#string"
      }
    }
    """

Scenario: Logout
  # First login to get token
  Given path '/auth/login'
  And request 
    """
    {
      "email": "#(testUser.username)",
      "password": "#(testUser.password)"
    }
    """
  When method POST
  Then status 200
  * def authToken = response.data.token
  
  # Logout
  Given path '/auth/logout'
  And header Authorization = 'Bearer ' + authToken
  When method POST
  Then status 200
  And match response == 
    """
    {
      "success": true,
      "message": "Logout successful"
    }
    """
