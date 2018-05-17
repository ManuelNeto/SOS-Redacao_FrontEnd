(function () {

    angular
        .module('sos-redacao')
        .service('authentication', authentication);

    authentication.$inject = ['$http', '$window', 'consts'];

    function authentication ($http, $window, consts) {

        var saveToken = function (token) {
            $window.localStorage['mean-token'] = token;
        };

        var getToken = function () {
            return $window.localStorage['mean-token'];
        };

        logout = function() {
            $window.localStorage.removeItem('mean-token');
            sessionStorage.clear();
        };

        register = function(user) {
            return $http.post(consts.api_url + '/register', user);
        };

        login = function(user) {
            return $http.post(consts.api_url + '/login', user);
        };

        var isLoggedIn = function() {
            var token = getToken();
            var payload;

            if(token && (token !== 'undefined')){
                payload = token.split('.')[1];
                payload = $window.atob(payload);
                payload = JSON.parse(payload);
                return payload.exp > Date.now() / 1000;
            } else {
                return false;
            }
        };

        var currentUser = function() {
            if(isLoggedIn()){
                var token = getToken();
                var payload = token.split('.')[1];
                payload = $window.atob(payload);
                payload = JSON.parse(payload);
                return {
                    id: payload.id,
                    name: payload.name,
                    userName: payload.userName,
                    gender: payload.gender,
                    birthdate: payload.birthdate,
                    school: payload.school,
                    degreeOfSchooling: payload.degreeOfSchooling,
                    userKind: payload.userKind,
                    correctorKind: payload.correctorKind,
                    email: payload.email
                };
            }
        };

        return {
            saveToken : saveToken,
            getToken : getToken,
            logout : logout,
            login : login,
            register : register,
            isLoggedIn : isLoggedIn,
            currentUser : currentUser
        };
    }

})();
