function() {
  // Helper function to set up test data
  var config = karate.call('classpath:karate-config.js');
  
  function createTestUser(userDetails) {
    var registerRequest = {
      email: userDetails.email,
      password: userDetails.password,
      name: userDetails.name,
      confirmPassword: userDetails.password
    };
    
    var response = karate.call('classpath:com/tradingsystem/helpers/http-helper.js', {
      method: 'POST',
      url: config.apiUrl + '/auth/register',
      body: registerRequest,
      headers: config.headers
    });
    
    return response;
  }
  
  function createTestTrade(tradeDetails, authToken) {
    var headers = Object.assign({}, config.headers);
    headers['Authorization'] = 'Bearer ' + authToken;
    
    var response = karate.call('classpath:com/tradingsystem/helpers/http-helper.js', {
      method: 'POST',
      url: config.apiUrl + '/trades',
      body: tradeDetails,
      headers: headers
    });
    
    return response;
  }
  
  function cleanupTestData(userId, authToken) {
    var headers = Object.assign({}, config.headers);
    headers['Authorization'] = 'Bearer ' + authToken;
    
    // Delete user trades first
    karate.call('classpath:com/tradingsystem/helpers/http-helper.js', {
      method: 'DELETE',
      url: config.apiUrl + '/trades/user/' + userId,
      headers: headers
    });
    
    // Then delete user
    karate.call('classpath:com/tradingsystem/helpers/http-helper.js', {
      method: 'DELETE',
      url: config.apiUrl + '/users/' + userId,
      headers: headers
    });
  }
  
  function generateRandomEmail() {
    var timestamp = new Date().getTime();
    var random = Math.floor(Math.random() * 1000);
    return 'test_' + timestamp + '_' + random + '@example.com';
  }
  
  function generateRandomTrade() {
    var symbols = ['BTCUSDT', 'ETHUSDT', 'ADAUSDT', 'DOGEUSDT', 'BNBUSDT'];
    var sides = ['BUY', 'SELL'];
    var types = ['MARKET', 'LIMIT', 'STOP'];
    
    return {
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      side: sides[Math.floor(Math.random() * sides.length)],
      type: types[Math.floor(Math.random() * types.length)],
      quantity: Math.random() * 10,
      price: Math.random() * 50000 + 1000
    };
  }
  
  function waitForTradeExecution(tradeId, authToken, maxWaitTime) {
    var headers = Object.assign({}, config.headers);
    headers['Authorization'] = 'Bearer ' + authToken;
    
    var startTime = new Date().getTime();
    var maxWait = maxWaitTime || 30000; // 30 seconds default
    
    while (new Date().getTime() - startTime < maxWait) {
      var response = karate.call('classpath:com/tradingsystem/helpers/http-helper.js', {
        method: 'GET',
        url: config.apiUrl + '/trades/' + tradeId,
        headers: headers
      });
      
      if (response.status === 200 && response.body.data.status === 'EXECUTED') {
        return response.body.data;
      }
      
      // Wait 1 second before checking again
      java.lang.Thread.sleep(1000);
    }
    
    throw new Error('Trade execution timeout after ' + maxWait + 'ms');
  }
  
  return {
    createTestUser: createTestUser,
    createTestTrade: createTestTrade,
    cleanupTestData: cleanupTestData,
    generateRandomEmail: generateRandomEmail,
    generateRandomTrade: generateRandomTrade,
    waitForTradeExecution: waitForTradeExecution
  };
}
