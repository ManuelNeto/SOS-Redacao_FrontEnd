angular.module('sos-redacao').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/login");
    $urlRouterProvider.when("/", "/login");

    $urlRouterProvider.otherwise("/login");

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: '../components/home/home.html',
            controller: 'HomeController'
        })

        .state('register', {
            url: '/register',
            templateUrl: 'components/register/register.html',
            controller: 'RegisterController'
        })

        .state('login', {
            url: '/login',
            templateUrl: 'components/login/login.html',
            controller: 'LoginController'
        })

        .state('create_essay', {
            url: '/create_essay',
            templateUrl: '../components/essay/create_essay/create_essay.html',
            controller: 'CreateEssayController'
        })

        .state('user', {
           url: '/user',
           templateUrl: '../components/user/profile.html',
           controller: 'UserController as ctrl'
       });

}]);


// angular.module('sos-redacao').run(function($rootScope, $location, authentication, $http, $state, $timeout) {
//
//     $rootScope.$on('$stateChangeStart', function (event, nextRoute, currentRoute) {
//
//         console.log(authentication.getToken());
//
//         $http.defaults.headers.common.Authorization =  authentication.getToken();
//
//
//         if ($location.path() !== '/login') {
//             if (!authentication.isLoggedIn()){
//                 $timeout(function(){$state.go('login');});
//             }
//         }
//
//         // if ($location.path() === '/login') {
//         //     if (authentication.isLoggedIn()){
//         //         $timeout(function(){$state.go('listing-things');});
//         //     }
//         // }
//
//
//     });
// });
