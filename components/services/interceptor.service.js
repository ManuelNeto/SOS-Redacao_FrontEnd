angular.module('sos-redacao').factory('AuthInterceptor', AuthInterceptor)
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
  });

function AuthInterceptor ($location, $q) {
  return {
    request: function(config) {
      console.log(config);
      config.headers = config.headers || {};

      config.headers['Authorization'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhZTBlYjQyODliYzAxNGQ2NmJkODNhZCIsImlhdCI6MTUyNTQ1NTMxMCwiZXhwIjoxNTI1NTQxNzEwfQ.tK_Y12tpsc_r2jOfHlJGn_V49jOOtX-kGkbz10hYbaM";

      return config;
    }
  }
};
