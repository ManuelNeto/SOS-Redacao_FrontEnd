angular.module('sos-redacao').controller('ListMyEssaysController', function($state, $scope, EssayFactory){


  $scope.essays = [];
  $scope.$parent.title = "Minhas Redações";


  getEssays = function(){
    EssayFactory.getMyEssays(authentication.currentUser().id).then(function(result){
            $scope.essays = result.data.data;
        }).catch(function(result){
        toastService(result.data.message);
    });
	}

  init = function(){
    getEssays();
  }

  $scope.showEssay = function(id){
		$state.go('show_essay',  { "id": id});
	}


  init();

});
