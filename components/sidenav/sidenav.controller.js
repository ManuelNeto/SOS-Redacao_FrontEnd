angular.module('sos-redacao').controller('sidenavController', function($scope, $mdSidenav, UserService, $location, authentication, $state){

	var myScope = $scope;

	$scope.defaultImg = "../../public/img/noimage.png";

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
               redator_actions: [

                    {
                        name: 'Escrever Redação',
                        icon: 'create',
                        link: 'create_essay'
                    },

                    {
                        name: 'Minhas Redações',
                        icon: 'description',
                        link: 'list_my_essays'
                    },
										{
                        name: 'Meu progresso',
                        icon: 'description',
                        link: 'my_progress'
                    },
                    {
                        name: 'Temas',
                        icon: 'list',
                        link: 'list_themes'
                    },

                    {
                        name: 'Material de Estudo',
                        icon: 'folder',
                        link: 'study_material'
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
                ],

                corretor_actions: [
                    {
                        name: 'Corrigir Redação',
                        icon: 'create',
                        link: 'list_essays'
                    },

                    {
                        name: 'Redações Corrigidas',
                        icon: 'done',
                        link: 'list_my_essays'
                    },

                    {
                        name: 'Propor Tema',
                        icon: 'chat',
                        link: 'propose_theme'
                    },

                    {
                        name: 'Meus Temas',
                        icon: 'notes',
                        link: 'list_my_themes'
                    },

                    {
                        name: 'Temas',
                        icon: 'list',
                        link: 'list_themes'
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
                        name: 'Submeter Material',
                        icon: 'backup',
                        link: 'upload_study_material'
                    },

                    {
                        name: 'Ver materias de apoio',
                        icon: 'description',
                        link: 'study_material'
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
