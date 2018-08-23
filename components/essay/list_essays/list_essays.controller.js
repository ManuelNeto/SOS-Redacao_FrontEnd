angular.module('sos-redacao').controller('ListEssaysController', function($state, $scope, EssayFactory, toastService){


  $scope.essays = [];
  $scope.$parent.title = "Redações disponíveis";


  getEssays = function(){
    EssayFactory.getEssays().then(function(result){
            $scope.essays = result.data.data;
            $scope.essays = $scope.essays.filter(toCorrectEssaysFilter);
        }).catch(function(result){
        toastService.showMessage(result.data.message);
    });
	}

  init = function(){
    getEssays();
  }

  function toCorrectEssaysFilter(essay) {
      return essay.status === 'Aguardando correção';
  }

  $scope.showEssay = function(id){
		$state.go('show_essay',  { "id": id});
	}

  $scope.viewEssay = function(id){
    console.log(id);
    //$state.go('show_essay',  { "id": id});
  }


  init();

    angular.element(document).ready(function () {
        var id = $state.current.name;
        document.getElementById(id).style.backgroundColor = "#6ab04c";
        document.getElementById(id).style.fontWeight = "bold";
    });

});
