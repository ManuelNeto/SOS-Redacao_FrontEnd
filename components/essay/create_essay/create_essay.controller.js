angular.module('sos-redacao').controller('CreateEssayController', function($state, $scope, EssayFactory){
	var self = this;

	$scope.themes = ['Tema 1', 'Tema 2', 'Tema 3', 'Tema 4', 'Tema 5', 'Tema 6'];

	self.title = 'CreateEssayController';

	$scope.addEssay = function(essay){
		EssayFactory.addEssay(essay).then(function(result){
            console.log(result);
        }).catch(function(result){
            console.log("Error");
    	});
	}


});
