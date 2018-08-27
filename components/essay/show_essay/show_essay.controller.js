angular.module('sos-redacao').controller('ShowEssayController', function($state, $scope, EssayFactory, $stateParams, $mdSidenav, $mdDialog, authentication, toastService, UserService, NotificationService){
	var self = this;

	console.log('aqui');

	$scope.toggleRight = buildToggler('right');

	$scope.essay = {};

	$scope.newMessage = '';
	$scope.themes = [];
	$scope.editEssayMode = false;

	$scope.customFullscreen = false;

	$scope.$parent.title = "Visualizar Redação";

	getEssay = function(id){
		EssayFactory.getEssay(id).then(function(result){
            $scope.essay = result.data.data;
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
      templateUrl: '/components/essay/abilitys/abilitys_' + $scope.essay.type + '.html',
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
			var notification = {
				text: "Você recebeu uma nova mensagem!",
				title: "Mensagem",
				type: "Mensagem",
				date: new Date(),
				emitter: $scope.currentUser._id,
				receiver: $scope.essay.user
			};

			NotificationService.createNotification(notification);

        }).catch(function(result){
			toastService.showMessage(result.data.message);
    });

	}


	$scope.setToEditMode = function(){
		$scope.editEssayMode = true;
	}

	$scope.updateEssay = function(){
		$scope.essay.status = 'Aguardando recorreção';

		function success(response){
            $scope.editEssayMode = false;
		}

		function error(err){
			console.log(err);
		}

		EssayFactory.editEssay($scope.essay).then(success, error);
	}

	$scope.saveComment = function(){

		$scope.essay.corrector = $scope.currentUser._id;
		$scope.essay.status = "Corrigida";

		EssayFactory.editEssay($scope.essay).then(function(result){
						$scope.essay.comment = {};
						$state.go('list_essays');
			var notification = {
				text: "Sua redação foi corrigida",
				title: "Correção",
				type: "Correção",
				date: new Date(),
				emitter: $scope.currentUser._id,
				receiver: $scope.essay.user
			};

			NotificationService.createNotification(notification);
			toastService.showMessage("Correção enviada!");
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
				console.log($scope.currentUser);
			});
		}else{
			$scope.enable = false;
		}

	}

	init();
    angular.element(document).ready(function () {
        var id = $state.current.name;
        document.getElementById(id).style.backgroundColor = "#6ab04c";
        document.getElementById(id).style.fontWeight = "bold";
    });

});
