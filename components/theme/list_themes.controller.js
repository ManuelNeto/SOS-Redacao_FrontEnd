angular.module('sos-redacao').controller('ListThemesController', function($state, $scope, EssayFactory, toastService, ThemeService){

    $scope.themes = [];

    var getThemes = function(){
        console.log("aquii");
        ThemeService.getThemes().then(function(result){
                $scope.themes = result.data.data;
            }).catch(function(result){
            toastService.showMessage(result.data.message);
        });
    }

      var init = function(){
        getThemes();
      };


      init();

});