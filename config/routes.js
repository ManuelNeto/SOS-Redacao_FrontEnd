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

        .state('create_essay', {
            url: '/create_essay',
            templateUrl: '../components/essay/create_essay/create_essay.html',
            controller: 'CreateEssayController as ctrl'
        })
}])
