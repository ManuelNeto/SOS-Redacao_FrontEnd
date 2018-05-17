angular.module('sos-redacao').controller('ListEssaysController', function($state, $scope, EssayFactory){


  $scope.essays = [];

    $scope.$parent.title = "Minhas Redações";


  getEssays = function(){
    EssayFactory.getEssays().then(function(result){
            $scope.essays = result.data.data;
        }).catch(function(result){
            console.log("Error");
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
