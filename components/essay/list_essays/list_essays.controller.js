angular.module('sos-redacao').controller('ListEssaysController', function($state, $scope, EssayFactory){


  $scope.essays = [];

  getEssays = function(){
    EssayFactory.getEssays().then(function(result){
            $scope.essays = result.data.data;
        }).catch(function(result){
            console.log("Error");
    });
	}

  getEssays();


});
