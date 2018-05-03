angular.module('sos-redacao').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/login");
    $urlRouterProvider.when("/", "/login");

    $urlRouterProvider.otherwise("/login");

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: '../components/home/home.html',
            controller: 'HomeController as ctrl'
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

        .state('user', {
            url: '/user',
            templateUrl: '../components/user/profile.html',
            controller: 'UserController as ctrl'
        });
}]);
    