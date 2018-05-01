angular.module('sos-redacao').controller('RegisterController', function ($scope, $location, authentication, $state) {

    var myScope = $scope;

    myScope.credentials = {
        name: "",
        email: "",
        password: ""
    };

    myScope.onSubmit = function () {
        authentication
            .register(myScope.credentials)
            .then(function (data) {
                authentication.saveToken(data.data.token);
                $state.go('listing-things');
            }, function (error) {
                alert(error.data.message);
            });
    };

    myScope.goLogin = function () {
        $state.go('login');
    }

});