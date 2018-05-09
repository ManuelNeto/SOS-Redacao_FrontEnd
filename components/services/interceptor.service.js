angular.module('sos-redacao').factory('AuthInterceptor', AuthInterceptor)
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
  });

function AuthInterceptor ($location, $q, $injector) {
  return {
    request: function(config) {
      config.headers = config.headers || {};
      authentication = $injector.get('authentication');
      config.headers['Authorization'] = authentication.getToken();
      return config;
    }
  }
};
