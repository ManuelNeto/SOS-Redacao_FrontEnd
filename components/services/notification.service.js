angular.module('sos-redacao').factory('NotificationFactory', function ($window, $http, $state, consts) {

    return {

        getNotifications: function () {
            return $http.get(consts.api_url + '/notification/' + id);
        },


        createNotification: function (notification) {
            return $http.post(consts.api_url + '/notification', essay);
        },

        deleteNotification: function (id) {
            return $http.delete(consts.api_url + '/notification/' + id);
        }
    }
});
