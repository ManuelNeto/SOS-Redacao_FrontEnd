angular.module('sos-redacao').controller('CreateEssayController', function($state, $scope, EssayFactory, $stateParams, $mdSidenav, $mdDialog, authentication){

	$scope.themes = ['Tema 1', 'Tema 2', 'Tema 3', 'Tema 4', 'Tema 5', 'Tema 6'];
	$scope.essay = {};

	$scope.addEssay = function(essay){
		var concatEssay = Object.assign(essay, {user: authentication.currentUser().id});
		EssayFactory.addEssay(concatEssay).then(function(result){
				$state.go('list_essays');
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
