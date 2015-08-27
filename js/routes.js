app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when("/", {
            templateUrl: "views/home.html",
            controller: "Pages"
        })
        .when("/about", {
            templateUrl: "views/about.html",
            controller: "Pages"
        })
        .when("/projects", {
            templateUrl: "views/projects.html",
            controller: "Pages"
        })
        .when("/contact", {
            templateUrl: "views/contact.html",
            controller: "Pages"
        })
        .otherwise ({
            //templateUrl: "views/404.html",
            redirectTo: "/",
            controller: "404"
    });

});