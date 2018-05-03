angular.module('sos-redacao').controller('RegisterController', function ($scope, $location, authentication, $state) {

    var myScope = $scope;
    myScope.generos = ['Masculino', 'Feminino'];
    myScope.escolaridades = ['Fundamental','Médio', 'Superior', 'Mestrado', 'Doutorado'];
    myScope.usuario = ['Aluno', 'Corretor'];
    myScope.corretor = ['Enem','Concurso'];


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

    myScope.onSubmit = function () {
        authentication
            .register(myScope.credentials)
            .then(function (data) {
                authentication.saveToken(data.data.token);
                $state.go('login');
            }, function (error) {
                alert(error.data.message);
            });
    };

    myScope.goLogin = function () {
        $state.go('login');
    }

});