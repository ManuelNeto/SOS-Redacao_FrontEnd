angular.module('sos-redacao').service('RegisterService', function ($http, consts) {
    var service = this;

    service.createUser = createUser;

    function createUser(data) {
        return $http.post(consts.api_url + '/user', data);
    };

    return service;
});
