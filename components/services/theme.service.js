angular.module('sos-redacao').factory('ThemeFactory', function ($window, $http, $state, consts) {

    return {

        addTheme: function (theme) {
            return $http.post(consts.api_url + '/theme', theme);
        },

        getThemes: function (id) {
            return $http.get(consts.api_url + '/theme')
        }
    }
});