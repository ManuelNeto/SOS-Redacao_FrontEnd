angular.module('sos-redacao').factory('NotificationService', function ($window, $http, $state, consts) {

    return {

        getNotifications: function (id) {
            return $http.get(consts.api_url + '/notification/' + id);
        },


        createNotification: function (notification) {
            return $http.post(consts.api_url + '/notification', notification);
        },

        deleteNotification: function (id) {
            return $http.delete(consts.api_url + '/notification/' + id);
        }
    }
});
