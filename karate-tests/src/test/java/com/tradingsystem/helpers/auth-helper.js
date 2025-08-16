function(args) {
  var user = args.user;
  
  var loginRequest = {
    email: user.username,
    password: user.password
  };
  
  var config = karate.call('classpath:karate-config.js');
  
  var response = karate.call('classpath:com/tradingsystem/helpers/http-helper.js', {
    method: 'POST',
    url: config.apiUrl + '/auth/login',
    body: loginRequest,
    headers: config.headers
  });
  
  if (response.status !== 200) {
    karate.fail('Login failed with status: ' + response.status + ', response: ' + JSON.stringify(response.body));
  }
  
  return {
    token: response.body.data.token,
    refreshToken: response.body.data.refreshToken,
    user: response.body.data.user
  };
}
