angular.module('sos-redacao').controller('registerController', function($scope, $location, $state) {

    $scope.genero = ['Masculino', 'Feminino'];
    $scope.escolaridade = ['Fundamental Incompleto', 'Fundamental Completo', 'Médio Incompleto', 'Médio Completo', 'Superior', 'Mestrado', 'Doutorado'];
    $scope.usuario = ['Aluno', 'Corretor'];
    $scope.corretor = ['Enem','Concurso'];


});