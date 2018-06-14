angular.module('sos-redacao').controller('ThemeController', function($scope, $state, ThemeService, authentication, toastService){
    $scope.$parent.title = "Temas";


    $scope.defaultImg = "../../public/img/noimage.png";

    $scope.theme = {};
    $scope.supporting_texts = [{text: '', image: ''}, {text: '', image: ''}, {text: '', image: ''}];

    $scope.current_st = 1;


    $scope.move_st_forward = function () {
        $scope.current_st += 1;
    };

    $scope.move_st_back = function () {
        $scope.current_st -= 1;
    };


    $scope.propose_theme = function () {
        function success(response) {
            $state.go('home');
            toastService.showMessage('O tema foi proposto!');
        }

        function error(response) {
            console.log(response);
        }

        $scope.theme.supporting_texts = $scope.supporting_texts;
        $scope.theme.proposedBy = authentication.currentUser().id;

        ThemeService.propose_theme($scope.theme).then(success, error);
    };

    $scope.$watch('stImage1', function () {
        function imageIsLoaded(e) {
            $scope.supporting_texts[0].image = e.target.result;
        }

        if(!$scope.stImage1) return;

        var reader = new FileReader();
        reader.onload = imageIsLoaded;
        reader.readAsDataURL($scope.stImage1);
    });

    $scope.$watch('stImage2', function () {
        function imageIsLoaded(e) {
            $scope.supporting_texts[1].image = e.target.result;
        }

        if(!$scope.stImage2) return;

        var reader = new FileReader();
        reader.onload = imageIsLoaded;
        reader.readAsDataURL($scope.stImage2);
    });

    $scope.$watch('stImage3', function () {
        function imageIsLoaded(e) {
            $scope.supporting_texts[2].image = e.target.result;
        }

        if(!$scope.stImage3) return;

        var reader = new FileReader();
        reader.onload = imageIsLoaded;
        reader.readAsDataURL($scope.stImage3);
    });


    $scope.teste = function () {
        console.log($scope.supporting_texts);
    };
});