
angular.module('sos-redacao').controller('LoginController', function($scope, $location, authentication, $state, toastService) {

    var myScope = $scope;

    $scope.$parent.disableToolbar = true;

    myScope.credentials = {
        email : "",
        password : ""
    };

    myScope.onSubmit = function () {
        authentication
            .login(myScope.credentials)
            .then(function(data){
                authentication.saveToken(data.data.data.token);
                $state.go('home');
                console.log(authentication.getToken());
            }, function(error){
                toastService.showMessage('Email e/ou senha incorretos!');
            });
    };

    myScope.goRegister = function(){
        $state.go('register');
    }

});