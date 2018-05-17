angular.module('sos-redacao').controller('ShowEssayController', function($state, $scope, EssayFactory, $stateParams, $mdSidenav, $mdDialog){
	var self = this;


	$scope.toggleSidenav = buildToggler('closeEventsDisabled');

	$scope.essay = {};

	$scope.customFullscreen = false;


	getEssay = function(id){
		EssayFactory.getEssay(id).then(function(result){
            $scope.essay = result.data.data;
        }).catch(function(result){
            console.log("Error");
    	});
	}

	$scope.showComments = function(){
		$scope.toggleSidenav('right');
	}

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
      templateUrl: '/abilitys/abilitys.html',
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
		var newMessage = {email: "manuel@ccc.cg", timestamp: dateFormat() , text: text};
		$scope.essay.messages.push(newMessage);
		$scope.newMessage = {};
		EssayFactory.editEssay($scope.essay).then(function(result){
            console.log(result);
        }).catch(function(result){
            console.log("Error");
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

	init = function(){
		if($stateParams.id){
			$scope.enable = true;
			getEssay($stateParams.id);
		}else{
			$scope.enable = false;
		}

	}

	init();

});
