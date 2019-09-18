app.controller('duealityCtrl', function($scope) {
  
  $scope.title_background = 'assets/images/duealitystanding.png',
  $scope.title_pic = 'assets/images/dueality.png',

  $scope.sections = [
    { 
      title: 'Overview',
      description: 'This was my first Global Game Jam, and I had a lot of fun making it. This was an event where many different enthusiastic people who want to make games got together and made their own games in the span of 48 hours. This time the theme was “waves” and it was hard to think of a game idea that revolves around waves. We ended up going with a 2D platformer that had a mechanic where you could turn into a wave to get through different gateways. Our group split the responsibilities so that we could work more efficiently together, myself touching up the menu screen and the overall build of the game, with <Divit Sharma> working on the wave mechanic, <Daniel Molka> developing the player movement, and <Anirudh Iyer> working on art design.'
    },
    {
      title: 'The Challenge',
      description: 'Aligning everyone on our team to the same goals, ideas, and complete a new game. It was an excellent two day event and really expanded my experience in team dynamics.'
    }
  ]
});