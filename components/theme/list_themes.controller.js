angular.module('sos-redacao').controller('ListThemesController', function($state, $scope, EssayFactory, toastService, ThemeService, $window){

    $scope.themes = [];

    var getThemes = function(){
        ThemeService.getThemes().then(function(result){
                $scope.themes = result.data.data;
            }, function(result){
              console.log(result);
            });
    };

    $scope.showTheme = function (theme) {
        $window.sessionStorage.theme = JSON.stringify(theme);
        $state.go('view_theme', {theme: theme});
    };


    var getThemesProposedBy = function(){
        ThemeService.getThemesProposedBy(authentication.currentUser().id).then(function(result){
                $scope.themes = result.data.data;
            }).catch(function(result){
            toastService.showMessage(result.data.message);
        });
    }

    var init = function(){
      if($state.current.name == "list_themes"){
        getThemes();
      }else {
        getThemesProposedBy();
      }

    }

    init();
});