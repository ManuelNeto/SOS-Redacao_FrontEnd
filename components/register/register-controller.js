angular.module('sos-redacao').controller('RegisterController', function ($scope, $location, authentication, $state, RegisterService, toastService) {

    var myScope = $scope;

    myScope.confirm_password;

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
            if(response.status === 201){
                $state.go('login');
            }
        };

        var error = function (err) {
            toastService.showMessage(err.data.message);
        };

        RegisterService.createUser(credentials).then(success, error);
    };

    myScope.goLogin = function () {
        $state.go('login');
    }

});
