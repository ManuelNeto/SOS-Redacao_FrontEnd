angular.module('sos-redacao').controller('sidenavController', function($scope, $mdSidenav, $location, authentication, $state){

	var myScope = $scope;

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
                        link: 'my-essays'
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
            }


});
