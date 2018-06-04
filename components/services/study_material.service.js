angular.module('sos-redacao').factory('StudyMaterialFactory', function ($window, $http, $state, consts) {

    return {
        downloadStudyMaterial: function(fileName) {
           window.open(consts.api_url + '/downloads/' +  fileName);
        }

    }
});
