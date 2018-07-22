angular.module('sos-redacao').controller('ListMyEssaysController', function($state, $scope, EssayFactory, toastService){


  $scope.essays = [];
  $scope.$parent.title = "Minhas Redações";


  getEssays = function(){
    EssayFactory.getMyEssays(authentication.currentUser().id).then(function(result){
            $scope.essays = result.data.data;
        }).catch(function(result){
        toastService.showMessage(result.data.message);
    });
	}

  $scope.sortByScore = function(){
    $scope.essays.sort(function(a, b) {
        return parseFloat(a.finalScore) - parseFloat(b.finalScore);
    });
  }

  $scope.sortByStatus = function(){
    $scope.essays.sort(compareStatus);
  }

  $scope.sortByTheme = function(){
      $scope.essays.sort(compareTheme);
  }

  $scope.sortByTitle = function(){
      $scope.essays.sort(compareTitle);
  }

  $scope.sortByType = function(){
      $scope.essays.sort(compareType);
  }

  function compareStatus(a,b) {
    if (a.status < b.status)
      return -1;
    if (a.status > b.status)
      return 1;
    return 0;
  }

  function compareTheme(a,b) {
    if (a.theme < b.theme)
      return -1;
    if (a.theme > b.theme)
      return 1;
    return 0;
  }

  function compareTitle(a,b) {
    if (a.title < b.title)
      return -1;
    if (a.title > b.title)
      return 1;
    return 0;
  }

  function compareType(a,b) {
    if (a.type < b.type)
      return -1;
    if (a.type > b.type)
      return 1;
    return 0;
  }

  init = function(){
    getEssays();
  }

  $scope.showEssay = function(id){
		$state.go('show_essay',  { "id": id});
	}


  init();

    angular.element(document).ready(function () {
        var id = $state.current.name;
        document.getElementById(id).style.backgroundColor = "#6ab04c";
        document.getElementById(id).style.fontWeight = "bold";
    });

});
