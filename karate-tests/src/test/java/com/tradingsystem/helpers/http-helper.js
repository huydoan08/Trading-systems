function(args) {
  var method = args.method || 'GET';
  var url = args.url;
  var body = args.body;
  var headers = args.headers || {};
  
  var options = {
    method: method,
    url: url,
    headers: headers
  };
  
  if (body && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
    options.body = body;
  }
  
  var response = karate.http(options);
  
  return {
    status: response.status,
    body: response.body,
    headers: response.headers
  };
}
