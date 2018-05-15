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

        .state('show_essay', {
            url: '/show_essay/:id',
            templateUrl: '../components/essay/create_essay/create_essay.html',
            controller: 'CreateEssayController'
        })

        .state('list_essays', {
            url: '/list_essays',
            templateUrl: '../components/essay/list_essays/list_essays.html',
            controller: 'ListEssaysController'
        })

        .state('my_data', {
           url: '/my_data',
           templateUrl: '../components/user/profile.html',
           controller: 'UserController'
       });

}]);
