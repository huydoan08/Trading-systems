function fn() {
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  
  if (!env) {
    env = 'dev';
  }
  
  var config = {
    env: env,
    baseUrl: 'http://localhost:3000',
    apiUrl: 'http://localhost:8080/api',
    timeout: 30000
  }
  
  // Environment-specific configurations
  if (env == 'dev') {
    config.baseUrl = 'http://localhost:3000';
    config.apiUrl = 'http://localhost:8080/api';
  } else if (env == 'staging') {
    config.baseUrl = 'https://staging.tradingsystem.com';
    config.apiUrl = 'https://api-staging.tradingsystem.com/api';
  } else if (env == 'prod') {
    config.baseUrl = 'https://tradingsystem.com';
    config.apiUrl = 'https://api.tradingsystem.com/api';
  }
  
  // Common configuration
  config.headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };
  
  // Test data
  config.testUser = {
    username: 'testuser@example.com',
    password: 'TestPassword123!',
    name: 'Test User'
  };
  
  config.adminUser = {
    username: 'admin@example.com',
    password: 'AdminPassword123!',
    name: 'Admin User'
  };
  
  // Trading test data
  config.testTrade = {
    symbol: 'BTCUSDT',
    side: 'BUY',
    quantity: 0.001,
    price: 50000
  };
  
  karate.log('config:', config);
  return config;
}
