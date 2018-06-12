angular.module('sos-redacao').controller('ListThemesController', function($state, $scope, EssayFactory, toastService){

    $scope.themes = [];

    getThemes = function(){
        ThemeFactory.getThemes().then(function(result){
                $scope.themes = result.data.data;
            }).catch(function(result){
            toastService.showMessage(result.data.message);
        });
    	}

      init = function(){
        getThemes();
      }

});