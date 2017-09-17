app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    // $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');

    $routeProvider
    .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'homeCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);