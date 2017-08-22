app.config(function($routeProvider) {
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
        controller: "experienceCtrl as ctrl"
    })
});