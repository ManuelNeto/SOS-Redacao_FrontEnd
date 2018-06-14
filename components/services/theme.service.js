angular.module('sos-redacao').factory('ThemeService', function ($window, $http, $state, consts) {

    return {

        propose_theme: function (data) {
            return $http.post(consts.api_url + '/theme', data);
        },

        getThemes: function () {
            return $http.get(consts.api_url + '/theme')
        },

        getThemesProposedBy: function (id) {
            return $http.get(consts.api_url + '/theme/proposedBy/' + id)
        }

    }
});
