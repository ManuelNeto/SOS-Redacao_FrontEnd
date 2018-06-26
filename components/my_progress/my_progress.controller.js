angular.module('sos-redacao').controller('MyProgressController', function($state, $scope, EssayFactory, toastService, authentication){


  $scope.correctedEssays = [];
  $scope.$parent.title = "Meu Progresso";


  getMyCorrectedEssays = function(){

    EssayFactory.getMyCorrectedEssays(authentication.currentUser().id).then(function(result){
            $scope.correctedEssays = result.data.data;
            console.log(result.data.data);
        }).catch(function(result){
        toastService.showMessage(result.data.message);
    });
	}

  init = function(){
    getMyCorrectedEssays();
  }

  init();

});
