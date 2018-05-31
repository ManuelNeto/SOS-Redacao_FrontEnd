angular.module('sos-redacao').controller('UserController', function ($state, $scope, UserService, authentication, $mdDialog, toastService) {
    var self = this;

    self.title = "Perfil";

    $scope.profile = {};

    $scope.enableForm = true;
    $scope.editPass = false;

    $scope.setEnable = function(){
      console.log(!($scope.enableForm));
      $scope.enableForm = !($scope.enableForm);
      $scope.editPass = false;
    }

    $scope.getNewPass = function() {
      $scope.editPass = !($scope.editPass);
    }

    $scope.editarUsuario = function(profile){

        var success = function (response) {
            console.log(response);
            if(response.status === 201) {
                $state.go('user');
            }
            if(response.status === 200) {
                toastService.showMessage('Perfil atualizado!');
                $scope.setEnable();
                $state.go('user');
            }
        };

        var error = function (err) {
            if (err.status === 401) {
                toastService.showMessage('Senha inválida.');
            }
            console.log(err);
        };

        UserService.updateUser(profile).then(success, error);
    };

    $scope.getUsuario = function(){
       UserService.getUser(authentication.currentUser().userId).then(function(response){
          $scope.profile = response.data.data;
          $scope.profile.birthdate = new Date(response.data.data.birthdate);
       });
    };

    function validUpdate(profile) {
      if (profile.pass != profile.cpass) return 'Senhas não conferem.';
      if ($scope.editPass && profile.npass != profile.cnpass) return 'Nova senha não confere.'
      if ($scope.editPass && !profile.npass) return 'Nova senha não pode ser vazia.'
      return 'Sucesso';
    }

    $scope.showConfirm = function(ev) {
      var confirm = $mdDialog.confirm()
            .title('Você deseja confirmar a alteração nos dados?')
            .ariaLabel('Lucky day')
            .targetEvent(ev)
            .ok('Confirmar')
            .cancel('cancelar');

      $mdDialog.show(confirm).then(function() {
        var ret = validUpdate($scope.profile);

        if (ret == 'Sucesso') {
          $scope.editarUsuario($scope.profile);
        }
        else {
          toastService.showMessage(ret);
        }
      }, function() {
         $state.go('user');
      });
    };

    init = function(){
      $scope.getUsuario();
    }

    init();
});
