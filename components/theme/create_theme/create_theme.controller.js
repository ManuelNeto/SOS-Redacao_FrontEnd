angular.module('sos-redacao').controller('CreateThemeController', function($state, $scope, ThemeFactory, $stateParams, $mdSidenav, $mdDialog, authentication, toastService) {

    $scope.theme = {};
    $scope.supporting_texts = [];
    $scope.supporting_text = {};



    $scope.$parent.title = "Propor Tema";

    $scope.addTheme = function (theme) {
        theme.supporting_texts = $scope.supporting_texts;
        var concatTheme = Object.assign(theme, {user: authentication.currentUser().id});
        ThemeFactory.addTheme(concatTheme).then(function(result){
            $state.go('list_my_themes');
        }).catch(function(result){
            toastService.showMessage(result.data.message);
        });

    };

    $scope.confirmText1 = function () {
        $scope.supporting_text.image = $scope.imagemMotivador1Url;
        $scope.supporting_texts.push($scope.supporting_text);
    };

    $scope.$watch('supporting_text1.image', function () {
        $scope.imageUpload($scope.supporting_text.image);
    });

    $scope.imageUpload = function (imagemMotivador1) {
       if(!imagemMotivador1) return;

       var reader = new FileReader();
       reader.onload = $scope.imageIsLoaded;
       reader.readAsDataURL(imagemMotivador1);

    };

    $scope.imageIsLoaded = function(e){
        $scope.imagemMotivador1Url = e.target.result;
    };
});