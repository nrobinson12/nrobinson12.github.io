app.controller('projectsCtrl', ['$scope', function($scope) {
    $scope.projects = [
        {   image: "assets/images/rogue-arrow.png",
            name: "Rogue Arrow",
            description: "Run, jump, and shoot arrows to defeat enemies in my highschool group's 2D C# project.",
            github: "https://github.com/nrobinson12/Rogue-Arrow"
        },
        {   image: "assets/images/dueality.png",
            name: "Dueality",
            description: "During the 2017 Winter Game Jam, our team won the \"Most Wanted to See Finished\" award for our 2'D platformer.",
            github: "https://github.com/nrobinson12/Deuality"
        },
        {   image: "assets/images/pong.png",
            name: "Classic Pong",
            description: "My take on the classic game, using C# in Visual Studio.",
            github: "https://github.com/nrobinson12/Classic-Pong"
        }
    ];
}]);