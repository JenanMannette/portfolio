app.controller("Pages", function ($scope, $routeParams) {
    //do shit in here.
});

app.controller("Projects", function ($scope, $routeParams) {
    //repeat through project info.
});

app.controller("Resume", function ($scope, $http) {
    var pdf = 'images/Mannette, Jenan_Resume.pdf'
    //$window.open(pdf);

    $http
        .get(pdf)
        .success(function(data){
            //data is link to pdf
            $window.open(data);
        });
})

//app.controller("404", function ($scope) {
//    alert("You accessed a page that doesn't exist. Redirecting!")
//});