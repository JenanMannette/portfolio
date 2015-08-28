app.controller("PortfolioInfo", function ($scope) {
    $scope.formClick = 0;

    $scope.divider = '../images/img-divider.png';
    $scope.about = 'My name is Jenan, and I am junior software developer.';

    $scope.projects = [
        {
            title: 'Tic Tac Toe',
            thumbnail: '../images/projects/thumbnails/tictactoe-thumbnail.png',
            preview: '../images/projects/previews/tictactoe-preview.png',
            description: 'Simple game of Tic-Tac-Toe',
            technologies: 'Javascript, HTML/CSS, Node.js'
        }
    ];

    $scope.newTab = function () {
        window.open('../images/Resume.pdf','_blank');
    };

    $scope.show = function(){
        if ($scope.formClick === 0) {
            $scope.formClick = 1;
        } else {
            $scope.formClick = 0;
        }
    };
});
