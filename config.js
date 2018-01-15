app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    // $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');

    $routeProvider
    .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'homeCtrl'
    })
    .when('/viziya', {
        templateUrl: 'partials/work.html',
        controller: 'viziyaCtrl'
    })
    .when('/rogue-arrow', {
        templateUrl: 'partials/work.html',
        controller: 'rogueCtrl'
    })
    .when('/dueality', {
        templateUrl: 'partials/work.html',
        controller: 'duealityCtrl'
    })
    .when('/pong', {
        templateUrl: 'partials/work.html',
        controller: 'pongCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);