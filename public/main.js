angular.module('callTimeApp', ['ui.router'])
    .config(Config);


//******Router Setup*******
    function Config($stateProvider, $urlRouterProvider) {
        // $urlRouterProvider.otherwise('/Login');
        $stateProvider
        
        //add .states for each html page
            .state('Login', {
                url: '/Login',
                templateUrl: './Login/login.html'
                // controller: 'loginController as logCtrl'
                // authenticate: false
            })

            .state('Landing', {
                url: '/Landing',
                templateUrl: './Landing/filmlanding.html'
                // controller: '',
                // authenticate: true
            })
            .state('MusicLanding', {
                url: '/MusicLanding',
                templateUrl: './Music/musiclanding.html'
                // controller: '',
                // authenticate: true
            })
            .state('Search', {
                url: '/Search',
                templateUrl: '/Search/filmsearch.html'
                // controller: 'searchController as searchCtrl',
                // authenticate: true
            });
            $urlRouterProvider.otherwise('/Landing');
    }