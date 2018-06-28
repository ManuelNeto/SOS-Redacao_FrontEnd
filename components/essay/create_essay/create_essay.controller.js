angular.module('sos-redacao').controller('CreateEssayController', function($state, $scope, EssayFactory, $stateParams, $mdSidenav, $mdDialog, authentication, toastService, ThemeService){

	$scope.themes = [];
	$scope.essay = {};

	$scope.$parent.title = "Enviar Redação";

	$scope.addEssay = function(essay){
		essay.essayImage = $scope.essayImageUrl;

		if (essay.type === 'Enem') {
			essay.scores = new Array(5).fill(0);
		}
		else if (essay.type === 'Vestibular') {
			essay.scores = new Array(4).fill(0);
		}
		else {
			essay.scores = new Array(18).fill(0);
		}

		var concatEssay = Object.assign(essay, {user: authentication.currentUser().id});
		EssayFactory.addEssay(concatEssay).then(function(result){
				$state.go('list_my_essays');
        }).catch(function(result){
			toastService.showMessage(result.data.message);
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

	var init = function () {
		ThemeService.getThemes().then(function (response) {
			$scope.themes = response.data.data;
			console.log(response);
		}, function (response) {
			toastService.showMessage(response.data.message);
		})
	};

	init();
});
