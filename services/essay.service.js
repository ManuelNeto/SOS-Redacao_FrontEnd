angular.module('sos-redacao').factory('EssayFactory', function ($window, $http, $state) {

    var myIp = 'http://localhost:8081';

    return {

        /**
         * Get essays
         * @returns {array} essays
         */

        getEssays: function () {
            var req = {
                method: 'GET',
                url: myIp + '/essays',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }

            };


            return $http(req).then(function (response) {
                return response.data;
            }, function errorCallback(response) {
                console.log("Erro na request de essays!", response);
            });
        },

        getEssay: function (id) {
            var req = {
                method: 'GET',
                url: myIp + '/essay/' + id,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }

            };

            return $http(req).then(function (response) {
                return response.data;
            }, function errorCallback(response) {
                console.log("Erro na request de essay!", response);
            });
        },

        editEssay: function (essay) {

            var req = {
                method: 'PUT',
                url: myIp + '/essay',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': undefined
                }
            }

            return $http(req).then(function (response) {
                return response.data;
            }, function errorCallback(response) {

            });
        },

        addEssay: function (essay) {

            var req = {
                method: 'POST',
                url: myIp + '/essay',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': undefined
                }
            }

            return $http(req).then(function (response) {
                return response.data;
            }, function errorCallback(response) {

            });
        },

        deleteEssay: function (id) {

            var req = {
                method: 'DELETE',
                url: myIp + '/essay' + id,
                data: formData,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': undefined
                }
            }

            return $http(req).then(function (response) {
                return response.data;
            }, function errorCallback(response) {

            });
        }

    }
});
