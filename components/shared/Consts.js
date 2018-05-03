angular.module('sos-redacao').service('Const', function () {
    var service = this;

    /*Possivelmente você vai ter que trocar essa url. Não tem problema =D */
    service.api_url = "http://localhost:8081/";

    return service;
});