app.controller('homeCtrl', function($scope, sharedVals) {
    $scope.setWork = function(val) {
        sharedVals.setWork(val);
    },

    $scope.projects = [
        {   image: 'assets/images/viziya3.png',
            name: 'Viziya',
            date: 'May 1 2017 - present',
            what: 'Work Experience',
            where: '#/viziya'
        },
        {   image: 'assets/images/rogue-arrow1.png',
            name: 'Rogue Arrow',
            by: 'Me, Ron Gayowsky, Jeffrey Langballe',
            description: 'Run, jump, and shoot arrows to defeat enemies in my highschool group\'s 2D C# project.',
            where: 'https://github.com/nrobinson12/Rogue-Arrow',
            what: 'Game'
            // where: '#/rogue-arrow'
        },
        {   image: 'assets/images/duealitystanding.png',
            name: 'Dueality',
            by: 'Me, Daniel Molka, Anirudh Iyer, Divit Sharma',
            description: 'During the 2017 Winter Game Jam, our team won the \'Most Wanted to See Finished\' award for our 2D platformer.',
            where: 'https://github.com/nrobinson12/Deuality',
            what: 'Game'
            // where: '#/dueality'
        },
        {   image: 'assets/images/cpong.png',
            name: 'Classic Pong',
            by: 'Me',
            description: 'My take on the classic game, using C# in Visual Studio.',
            where: 'https://github.com/nrobinson12/Classic-Pong',
            what: 'Game'
            // where: '#/pong'
        }
    ];
});
