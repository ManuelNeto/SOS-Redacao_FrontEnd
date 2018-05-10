angular.module('sos-redacao').controller('RegisterController', function ($scope, $location, authentication, $state, RegisterService) {

    var myScope = $scope;

    myScope.credentials = {
        name: "",
        userName:"",
        gender:"",
        birthdate:"",
        school:"",
        degreeOfSchooling:"",
        userKind:"",
        correctorKind:"",
        email: "",
        password: ""

    };

    myScope.cadastrarUsuario = function(credentials){

        var success = function (response) {
            console.log(response);
            if(response.status === 201){
                $state.go('login');
            }
        };

        var error = function (err) {
            console.log(err);
        };

        RegisterService.createUser(credentials).then(success, error);
    };

    myScope.goLogin = function () {
        $state.go('login');
    }

});
