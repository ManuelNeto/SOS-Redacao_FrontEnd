angular.module('sos-redacao').factory('AuthInterceptor', AuthInterceptor)
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
  });

function AuthInterceptor ($location, $q) {
  return {
    request: function(config) {
      console.log(config);
      config.headers = config.headers || {};

      config.headers['Authorization'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhZTBlYjQyODliYzAxNGQ2NmJkODNhZCIsImlhdCI6MTUyNTM2ODc3MSwiZXhwIjoxNTI1NDU1MTcxfQ.fCoLz9_HrSOCXWteTVFPgKrdNjsZOGJ9v5RZlFm7NXc";

      return config;
    }
  }
};
