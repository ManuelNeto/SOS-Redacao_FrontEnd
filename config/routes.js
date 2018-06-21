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
            templateUrl: '../components/essay/show_essay/show_essay.html',
            controller: 'ShowEssayController'
        })

        .state('list_essays', {
            url: '/list_essays',
            templateUrl: '../components/essay/list_essays/list_essays.html',
            controller: 'ListEssaysController'
        })

        .state('list_my_essays', {
            url: '/list_my_essays',
            templateUrl: '../components/essay/list_essays/list_my_essays.html',
            controller: 'ListMyEssaysController'
        })

        .state('my_data', {
           url: '/my_data',
           templateUrl: '../components/user/profile.html',
           controller: 'UserController'
       })

       .state('study_material', {
          url: '/study_material',
          templateUrl: '../components/study_material/study_material.html',
          controller: 'StudyMaterialController'
      })

      .state('propose_theme', {
            url: '/propose_theme',
            templateUrl: '../components/theme/propose_theme.html',
            controller: 'ThemeController'
        })

      .state('list_themes', {
           url: '/list_themes',
           templateUrl: '../components/theme/list_themes.html',
           controller: 'ListThemesController'
      })

        .state('upload_study_material', {
            url: '/upload_study_material',
            templateUrl: '../components/study_material/upload_study_material.html',
            controller: 'UploadStudyMaterialController'
        })

        .state('view_theme', {
            url: '/view_theme',
            templateUrl: '../components/theme/propose_theme.html',
            controller: 'ThemeController',
            params: {
                theme: null
            }
        })

      .state('list_my_themes', {
           url: '/list_my_themes',
           templateUrl: '../components/theme/list_themes.html',
           controller: 'ListThemesController'
      });

}]);
