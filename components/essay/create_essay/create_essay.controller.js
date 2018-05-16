angular.module('sos-redacao').controller('CreateEssayController', function($state, $scope, EssayFactory, $stateParams, $mdSidenav, $mdDialog){

	$scope.themes = ['Tema 1', 'Tema 2', 'Tema 3', 'Tema 4', 'Tema 5', 'Tema 6'];
	$scope.essay = {};

	$scope.addEssay = function(essay){
		EssayFactory.addEssay(essay).then(function(result){

        }).catch(function(result){
            console.log("Error");
    	});
	}

	$scope.downloadEssayModel = function(){
		EssayFactory.downloadEssayModel().then(function(result){
						
				}).catch(function(result){
						console.log("Error");
			});
	}
});
