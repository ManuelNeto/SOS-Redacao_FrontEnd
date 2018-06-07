angular.module('sos-redacao').controller('RegisterController', function ($scope, $location, authentication, $state, RegisterService, toastService) {

    var myScope = $scope;

    myScope.confirm_password;

    myScope.credentials = {
        name: "",
        userName:"",
        gender:"",
        birthdate:"",
        school:"",
        degreeOfSchooling:"",
        userKind:"",
        correctorKind:"",
        email: "",
        password: "",
        photo: ""

    };

    myScope.cadastrarUsuario = function(credentials){
        myScope.credentials.photo = $scope.profilePhotoUrl;
        var success = function (response) {
            if(response.status === 201){
                $state.go('login');
            }
        };

        var error = function (err) {
            toastService.showMessage(err.data.message);
        };

        RegisterService.createUser(credentials).then(success, error);
    };

    myScope.goLogin = function () {
        $state.go('login');
    };

    $scope.$watch('profilePhoto', function () {
    		$scope.imageUpload($scope.profilePhoto);
    	});

    	$scope.imageUpload = function (fotoPerfil) {
    		if(!fotoPerfil) return;

    		var reader = new FileReader();
    		reader.onload = $scope.imageIsLoaded;
    		reader.readAsDataURL(fotoPerfil);

    	};

    	$scope.imageIsLoaded = function(e){
    		$scope.profilePhotoUrl = e.target.result;
    	};

});
