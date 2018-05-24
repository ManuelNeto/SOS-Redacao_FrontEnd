angular.module('sos-redacao').factory('AuthInterceptor', AuthInterceptor)
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('AuthInterceptor');
    });

function AuthInterceptor($location, $q, $injector, $timeout) {
    return {
        request: function (config) {
            config.headers = config.headers || {};
            authentication = $injector.get('authentication');
            config.headers['Authorization'] = authentication.getToken();


            if ($location.path() !== '/login') {
                if (!authentication.isLoggedIn()) {
                    $timeout(function () {
                        $injector.get('$state').go('login');
                    });
                }
            }

            if ($location.path() === '/login') {
                if (authentication.isLoggedIn()) {
                    $timeout(function () {
                        $injector.get('$state').go('home');
                    });
                }
            }

            return config;
        }
    }
};
