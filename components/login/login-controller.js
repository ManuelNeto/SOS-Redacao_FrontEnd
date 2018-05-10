
angular.module('sos-redacao').controller('LoginController', function($scope, $location, authentication, $state) {

    var self = this;
    self.title = 'Home';
    var myScope = $scope;

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
                alert(error.data.message);
            });
    };

    myScope.goRegister = function(){
        $state.go('register');
    }

});