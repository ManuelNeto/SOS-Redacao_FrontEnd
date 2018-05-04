angular.module('sos-redacao').controller('CreateEssayController', function($state, $scope, EssayFactory, $stateParams, $mdSidenav){
	var self = this;

	$scope.themes = ['Tema 1', 'Tema 2', 'Tema 3', 'Tema 4', 'Tema 5', 'Tema 6'];

	$scope.toggleSidenav = buildToggler('closeEventsDisabled');

	$scope.essay = {};

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

	init = function(){
		if($stateParams.id){
			getEssay($stateParams.id);
		}

	}

	init();

});
