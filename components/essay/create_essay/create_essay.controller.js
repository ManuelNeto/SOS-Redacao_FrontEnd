angular.module('sos-redacao').controller('CreateEssayController', function($state, $scope, EssayFactory, $stateParams, $mdSidenav, $mdDialog){
	var self = this;

	$scope.themes = ['Tema 1', 'Tema 2', 'Tema 3', 'Tema 4', 'Tema 5', 'Tema 6'];

	$scope.toggleSidenav = buildToggler('closeEventsDisabled');

	$scope.enable;

	$scope.essay = {};

	$scope.customFullscreen = false;

	self.title = 'CreateEssayController';

	$scope.addEssay = function(essay){
		EssayFactory.addEssay(essay).then(function(result){
            console.log(result);
        }).catch(function(result){
            console.log("Error");
    	});
	}

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
      templateUrl: './../abilitys/abilitys.html',
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
