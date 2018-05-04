angular.module('sos-redacao').factory('EssayFactory', function ($window, $http, $state, consts) {

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
            return $http.post(consts.api_url + '/essay', Object.assign(essay, {user: '5ae0eb4289bc014d66bd83ad'}));
        },

        deleteEssay: function (id) {
            return $http.delete(consts.api_url + '/essay' + id);
        }

    }
});
