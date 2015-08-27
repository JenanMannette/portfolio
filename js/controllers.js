app.controller("Pages", function ($scope, $routeParams) {
    //do shit in here.
});

app.controller("Projects", function ($scope, $routeParams) {
    //repeat through project info.
});

app.controller("Resume", function ($scope, $http) {
    $scope.newTab = function () {
        window.open('../images/Resume.pdf','_blank');
    }
});

//app.controller("404", function ($scope) {
//    alert("You accessed a page that doesn't exist. Redirecting!")
//});