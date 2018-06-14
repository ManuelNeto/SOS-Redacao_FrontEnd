angular.module('sos-redacao').controller('ShowEssayController', function($state, $scope, EssayFactory, $stateParams, $mdSidenav, $mdDialog, authentication, toastService, UserService){
	var self = this;


	$scope.toggleRight = buildToggler('right');

	$scope.essay = {};

	$scope.newMessage = '';
	$scope.themes = ['Tema 1', 'Tema 2', 'Tema 3', 'Tema 4', 'Tema 5', 'Tema 6'];


	$scope.customFullscreen = false;

	$scope.$parent.title = "Visualizar Redação";

	getEssay = function(id){
		EssayFactory.getEssay(id).then(function(result){
            $scope.essay = result.data.data;
			console.log($scope.essay);
        }).catch(function(result){
			toastService.showMessage(result.data.message);
    	});
	}

	// $scope.showComments = function(){
	// 	$scope.toggleSidenav('right');
	// }

	function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
  }

	$scope.showAbilitys = function(ev) {
    $mdDialog.show({
      controller: ['$scope', '$mdDialog', function($scope, $mdDialog) {
                $scope.hide = function() {
                    $mdDialog.hide();
                }
      }],
      templateUrl: '/components/essay/abilitys/abilitys.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };

	$scope.sendMessage = function(text){
		var newMessage = {email: $scope.currentUser.email, timestamp: dateFormat() , text: text, photo: $scope.currentUser.photo};
		$scope.essay.messages.push(newMessage);
		EssayFactory.editEssay($scope.essay).then(function(result){
						$scope.essayMessage = "";
        }).catch(function(result){
			toastService.showMessage(result.data.message);
    });

	}

	$scope.saveComment = function(){
		$scope.essay.corrector = $scope.currentUser._id;
		$scope.essay.status = "Corrigida";
		EssayFactory.editEssay($scope.essay).then(function(result){
						$scope.essay.comment = {};
						$state.go('list_essays');
            console.log(result);
        }).catch(function(result){
			toastService.showMessage(result.data.message);
    });
	}

	dateFormat = function(){

		var monName = ["janeiro", "fevereiro", "março", "abril", "Maio", "junho", 'julho', "agosto", 'setembro', "outubro", "novembro", "dezembro"];

		var newDate = new Date();
		var dia = newDate.getDate();
		var mes = newDate.getMonth();
		var ano = newDate.getFullYear();

		return dia + ' ' + monName[mes] + ', ' + ano;
	}

	$scope.sumScores = function(){
		$scope.essay.finalScore = 0;
		for (var i in $scope.essay.scores) {
			$scope.essay.finalScore = $scope.essay.finalScore + $scope.essay.scores[i];
		}
	}

	init = function(){
		if($stateParams.id){
			$scope.enable = true;
			getEssay($stateParams.id);
			UserService.getUser(authentication.currentUser().userId).then(function(response){
				$scope.currentUser = response.data.data;
			});
		}else{
			$scope.enable = false;
		}

	}

	init();

});
