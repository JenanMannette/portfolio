app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when("/", {
            templateUrl: "views/home.html",
            controller: "PortfolioInfo"
        })
        .when("/about", {
            templateUrl: "views/about.html",
            controller: "PortfolioInfo"
        })
        .when("/projects", {
            templateUrl: "views/projects.html",
            controller: "PortfolioInfo"
        })
        .when("/contact", {
            templateUrl: "views/contact.html",
            controller: "PortfolioInfo"
        })
        .otherwise ({
            //templateUrl: "views/404.html",
            redirectTo: "/",
            controller: "404"
    });

});