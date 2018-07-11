angular.module('sos-redacao').controller('ThemeController', function($scope, $state, ThemeService, authentication, toastService, $stateParams, UserService, $window, NotificationService){
    $scope.$parent.title = "Temas";

    $scope.defaultImg = "../../public/img/noimage.png";

    $scope.theme =  $stateParams.theme !== null ? $stateParams.theme : JSON.parse($window.sessionStorage.theme);

    $scope.theme = $scope.theme !== null ? $scope.theme : {};
    $scope.supporting_texts = $scope.theme !== undefined ? $scope.theme.supporting_texts : [{text: '', image: ''}, {text: '', image: ''}, {text: '', image: ''}];

    $scope.current_st = 1;


    $scope.move_st_forward = function () {
        if($scope.current_st < 3){
            $scope.current_st += 1;
        }
    };

    $scope.move_st_back = function () {
        if($scope.current_st > 1){
            $scope.current_st -= 1;
        }
    };

    function filterMotivationalTexts(mt) {
        return mt.image !== '' && mt.text != '';
    }


    $scope.propose_theme = function () {
        function success(response) {
            var notification = {
              text: "Um novo tema está disponível!",
              title: "Tema",
              type: "Mensagem",
              date: new Date(),
              emitter: $scope.currentUser._id,
              toAll: true
            };
            NotificationService.createNotification(notification);

            $state.go('home');
            toastService.showMessage('O tema foi proposto!');
        }

        function error(response) {
            console.log(response);
            toastService.showMessage(response.data.message);
        }

        $scope.supporting_texts = $scope.supporting_texts.filter(filterMotivationalTexts);
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


    function init() {

        UserService.getUser(authentication.currentUser().userId).then(function(response){
            $scope.currentUser = response.data.data;
        });
    }

    init();


});
