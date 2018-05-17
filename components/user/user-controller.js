angular.module('sos-redacao').controller('UserController', function ($scope, UserService, authentication, $mdDialog) {
    var self = this;

    self.title = "Perfil";

    $scope.profile = {};

    $scope.enableForm = true;

    $scope.setEnable = function(){
      console.log(!($scope.enableForm));
      $scope.enableForm = !($scope.enableForm);
    }

    $scope.editarUsuario = function(profile){

        var success = function (response) {
            console.log(response);
            if(response.status === 201){
                $state.go('user');
            }
        };

        var error = function (err) {
            console.log(err);
        };

        UserService.updateUser(profile).then(success, error);
    };

    $scope.getUsuario = function(){
       UserService.getUser(authentication.currentUser().userId).then(function(response){
          $scope.profile = response.data.data;
       });
    };

    $scope.showConfirm = function(ev) {
    var confirm = $mdDialog.confirm()
          .title('Você deseja confirmar a alteração nos dados?')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('Confirmar')
          .cancel('cancelar');

    $mdDialog.show(confirm).then(function() {
      $scope.editarUsuario($scope.profile);
      $scope.setEnable();
    }, function() {
       $state.go('user');
    });
  };

    init = function(){
      $scope.getUsuario();
    }

    init();
});
