angular.module('sos-redacao').factory('EssayFactory', function ($window, $http, $state, consts, authentication) {

    return {

        getEssays: function () {
            return $http.get(consts.api_url + '/essay');
        },

        getEssay: function (id) {
            return $http.get(consts.api_url + '/essay/' + id);
        },

        editEssay: function (essay) {
            return $http.put(consts.api_url + '/essay', essay);
        },

        addEssay: function (essay) {
            return $http.post(consts.api_url + '/essay', Object.assign(essay, {user: authentication.currentUser().id}));
        },

        deleteEssay: function (id) {
            return $http.delete(consts.api_url + '/essay' + id);
        },

        downloadEssayModel: function() {
           //window.open(consts.api_url + '/util');
           return $http.get(consts.api_url + '/util');
        }

    }
});
