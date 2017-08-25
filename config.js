app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "partials/home.html"
    })
    .when("/projects", {
        templateUrl: "partials/projects.html",
        controller: "projectsCtrl as ctrl"
    })
    .when("/experience", {
        templateUrl: "partials/experience.html",
        controller: experienceCtrl
    })
    .otherwise({
        redirectTo: "/"
    });

    // HTML5 History API
    // $locationProvider.html5Mode(true);
});