angular.module('sos-redacao').service('UploadStudyMaterialService', function ($http, consts) {

    var service = this;

    service.createStudyMaterial = createStudyMaterial;

    service.get = get;

    service.getAll = getAll;

    function createStudyMaterial(data) {
        return $http.post(consts.api_url + '/study-material', data);
    };


    function get(id) {
        return $http.get(consts.api_url + '/study-material/' + id);
    };

    function getAll() {
        return $http.get(consts.api_url + '/study-material/');
    };

    return service;
});
