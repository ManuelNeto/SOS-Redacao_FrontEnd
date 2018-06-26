angular.module('sos-redacao').factory('EssayFactory', function ($window, $http, $state, consts) {

    return {

        getEssays: function () {
            return $http.get(consts.api_url + '/essay');
        },

        getMyEssays: function (id) {
            return $http.get(consts.api_url + '/essay/' + 'myEssays/' + id);
        },

        getEssay: function (id) {
            return $http.get(consts.api_url + '/essay/' + id);
        },

        editEssay: function (essay) {
            return $http.put(consts.api_url + '/essay', essay);
        },

        essaysToCorect: function () {
            return $http.get(consts.api_url + '/essay/' + 'toCorect');
        },

        getMyCorrectedEssays: function (id) {
            return $http.get(consts.api_url + '/essay/' + 'correctedEssays/' + id);
        },

        addEssay: function (essay) {
            return $http.post(consts.api_url + '/essay', essay);
        },

        deleteEssay: function (id) {
            return $http.delete(consts.api_url + '/essay' + id);
        },

        downloadEssayModel: function() {
           window.open(consts.api_url + '/downloads');
        }

    }
});
