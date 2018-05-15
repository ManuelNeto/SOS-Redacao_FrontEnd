angular.module('sos-redacao').factory('AuthInterceptor', AuthInterceptor)
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
  });

function AuthInterceptor ($location, $q) {
  return {
    request: function(config) {
      console.log(config);
      config.headers = config.headers || {};

      config.headers.Authorization = "ggJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhZTY0YTY1MDQ1YWM5MTY1NDExMDcxOSIsImlhdCI6MTUyNTMxMzkwMywiZXhwIjoxNTI1NDAwMzAzfQ.KWAyY8Iij28W20VdmiQW4H77-ZfeOi9PlF4E_KFG-Ys";


      return config;
    },

    responseError: function(response) {
      if (response.status === 401 || response.status === 403) {
        //$location.path('/signin');
      }

      return $q.reject(response);
    }
  }
};
