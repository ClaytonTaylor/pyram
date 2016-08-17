angular.module('callTimeApp', ['ui.router'])
    .config(Config);


//******Router Setup*******
    function Config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
        
        //add .states for each html page
            .state('login', {
                url: '/login',
                templateUrl: '/Login/login.html'
                // controller: 'loginController as logCtrl'
                // authenticate: false
            })
            
            .state('Landing', {
                url: '/',
                templateUrl: '/Landing/filmlanding.html'
                // controller: '',
                // authenticate: true
            })

            .state('Cover', {
                url: '/cover',
                templateUrl: '/Cover/cover.html'
                // controller: '',
                // authenticate: true
            })
            .state('Search', {
                url: '/Search',
                templateUrl: '/Search/filmsearch.html'
                // controller: 'searchController as searchCtrl',
                // authenticate: true
            });
    }