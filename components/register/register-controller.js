angular.module('sos-redacao').controller('RegisterController', function ($scope, $location, authentication, $state) {

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
      console.log(credentials);
    };

    myScope.goLogin = function () {
        $state.go('login');
    }

});
