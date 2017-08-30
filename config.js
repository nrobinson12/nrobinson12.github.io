app.config(function($routeProvider, $locationProvider) {

    // HTML5 History API
    $locationProvider.html5Mode(true);

    $routeProvider
    .when("/", {
        templateUrl: "partials/home.html"
    })
    .when("/projects", {
        templateUrl: "partials/projects.html",
        controller: 'projectsCtrl'
    })
    .when("/experience", {
        templateUrl: "partials/experience.html",
        controller: "experienceCtrl as ctrl"
    })
    .otherwise({
        redirectTo: "/"
    });

    
});