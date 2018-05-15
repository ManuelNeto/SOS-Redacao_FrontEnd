angular.module('sos-redacao').controller('CreateEssayController', function($state, $scope, EssayFactory, $stateParams, $mdSidenav, $mdDialog){
	var self = this;

	$scope.themes = ['Tema 1', 'Tema 2', 'Tema 3', 'Tema 4', 'Tema 5', 'Tema 6'];

	$scope.toggleSidenav = buildToggler('closeEventsDisabled');

	$scope.enable;

	$scope.essay = {};

	$scope.customFullscreen = false;

	$scope.messages = [
		{email: 'manuel.neto@ccc.ufcg.edu.br', timestamp: '25/12/1996', text: 'mensagem 1'},
		{email: 'manuel.neto@ccc.ufcg.edu.br', timestamp: '25/12/1996', text: 'mensagem 2'},
		{email: 'ze@ccc.ufcg.edu.br', timestamp: '25/12/1996', text: 'mensagem 3'},
		{email: 'caio@ccc.ufcg.edu.br', timestamp: '25/12/1996', text: 'mensagem 4'},
		{email: 'manuel.neto@ccc.ufcg.edu.br', timestamp: '25/12/1996', text: 'mensagem 5ukgggggggggggggggggggggggj rlgjrwheotiuoerwiutoeriut oeritoireuotuie erwouitoerwiutoerwiut oiuertouieouti'},
		{email: 'fabio@ccc.ufcg.edu.br', timestamp: '25/12/1996', text: 'mensagem 6'},
		{email: 'manuel.neto@ccc.ufcg.edu.br', timestamp: '25/12/1996', text: 'mensagem 7'},
		{email: 'manuel.neto@ccc.ufcg.edu.br', timestamp: '25/12/1996', text: 'mensagem 8'},
		{email: 'manuel.neto@ccc.ufcg.edu.br', timestamp: '25/12/1996', text: 'mensagem 9'},
	];

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
      templateUrl: './abilitys.html',
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
