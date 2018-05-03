angular.module('sos-redacao').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/home");
    $urlRouterProvider.when("/", "/home");

    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '../components/home/home.html',
            controller: 'HomeController as ctrl'
        })
        .state('user', {
            url: '/user',
            templateUrl: '../components/user/profile.html',
            controller: 'UserController as ctrl'
        })
}])
    