angular.module('sos-redacao').controller('UploadStudyMaterialController', function($state, $scope, UploadStudyMaterialService, toastService, authentication){

    $scope.$parent.title = "Materiais de Estudo";

    $scope.input = {
        user: authentication.currentUser().id,
        type: "PDF",
        title: "",
        data: ""
    }

    $scope.enviar = function(){

        if ($scope.input.title === ""){
            toastService.showMessage("Entre com um título!");
            return;
        }

        if ($scope.input.data === ""){
            toastService.showMessage("Entre com um pdf!");
            return;
        }

        var success = function (response) {
            toastService.showMessage("arquivo submetido");
            $state.go('study_material');
        };

        var error = function (err) {
            toastService.showMessage(err.data.message);
        };

        UploadStudyMaterialService.createStudyMaterial($scope.input).then(success, error);

    };

    $scope.$watch('input.pdf', function () {
        $scope.fileRead($scope.input.pdf);
    });

    $scope.fileRead = function (file) {
        if(!file) return;

        var reader = new FileReader();
        reader.onload = $scope.imageIsLoaded;
        reader.readAsDataURL(file);
    };

    $scope.imageIsLoaded = function(e){
        $scope.input.data = e.target.result;
    };

});
