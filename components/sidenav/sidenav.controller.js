angular.module('sos-redacao').controller('sidenavController', function($scope, $mdSidenav, UserService, $location, authentication, $state){

	var myScope = $scope;

	myScope.profile = {};

	myScope.setRoute = function (route) {
	    if (route == 'sair') {
	        authentication.logout();
	        $state.go('login');
	    } else {
	        $state.go(route);
	    }
	};

	myScope.toggleSidenav = function(menu) {
            $mdSidenav(menu).toggle();
        };

    myScope.toggle = function(item, list) {
            var idx = list.indexOf(item);
            if (idx > -1) list.splice(idx, 1);
            else list.push(item);
        };

	myScope.data = {

            sidenav: {
                actions: [

                    {
                        name: 'Escrever Redação',
                        icon: 'create',
                        link: 'create_essay'
                    },

                    {
                        name: 'Minhas Redações',
                        icon: 'description',
                        link: 'show_essay'
                    },

                    {
                        name: 'Temas',
                        icon: 'list',
                        link: 'themes'
                    },

                    {
                        name: 'Material de Apoio',
                        icon: 'folder',
                        link: 'support-material'
                    },

                    {
                        name: 'Notificações',
                        icon: 'notifications',
                        link: 'notifications'
                    },

                    {
                        name: 'Meus Dados',
                        icon: 'person',
                        link: 'my_data'
                    },

                    {
                         name: 'Sair',
                         icon: 'exit_to_app',
                         link: 'sair'
                                        }
                ]

            }
        };

        myScope.getClass = function (path) {
                return ($location.path().substr(1, path.length) === path) ? 'blue' : 'grey-A100';
            };

        myScope.getUsuario = function(){
                   UserService.getUser(authentication.currentUser().userId).then(function(response){
                      $scope.profile = response.data.data;
                   });
            };

        init = function () {
            myScope.getUsuario();
        }

        init();



});
