angular.module('sos-redacao').service('UserService', function ($http, consts, authentication) {
    var service = this;

    return {

      getUser: function (id) {
          return $http.get(consts.api_url + '/user/' + authentication.currentUser().id);
      },

       updateUser: function(data) {
          return $http.put(consts.api_url + '/user', data);
      }
    }

});
