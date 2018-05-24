angular.module('sos-redacao').controller('CreateEssayController', function($state, $scope, EssayFactory, $stateParams, $mdSidenav, $mdDialog, authentication){

	$scope.themes = ['Tema 1', 'Tema 2', 'Tema 3', 'Tema 4', 'Tema 5', 'Tema 6'];
	$scope.essay = {};

	$scope.$parent.title = "Enviar Redação";

	$scope.addEssay = function(essay){
		essay.essayImage = $scope.essayImageUrl;
		var concatEssay = Object.assign(essay, {user: authentication.currentUser().id});
		EssayFactory.addEssay(concatEssay).then(function(result){
				$state.go('list_my_essays');
        }).catch(function(result){
            console.log("Error");
    	});
	}

	$scope.$watch('essayImage', function () {
		$scope.imageUpload($scope.essayImage);
	});

	$scope.imageUpload = function (redacaoImage) {
		if(!redacaoImage) return;

		var reader = new FileReader();
		reader.onload = $scope.imageIsLoaded;
		reader.readAsDataURL(redacaoImage);

	};

	$scope.imageIsLoaded = function(e){
		$scope.essayImageUrl = e.target.result;
	};

	$scope.downloadEssayModel = function(){
		EssayFactory.downloadEssayModel();
	};
});
