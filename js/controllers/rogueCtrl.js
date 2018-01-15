app.controller('rogueCtrl', function($scope) {
  
  $scope.title_background = 'assets/images/rogue-arrow1.png',
  $scope.title_pic = 'assets/images/rogue-arrow.png',

  $scope.sections = [
    { 
      title: 'Overview',
      description: 'This grade 11 project was a great experience working with a group of people on a game. I worked mainly on level design and enemy AI. <Jeffrey Langballe> worked on the main player mechanics, and <Ron Gawosky> on the art design of the final game. Everybody worked together and some of our roles overlapped, helping to create a great dynamic for the game. I requested to continue work on this game, and my teammates agreed. It has been fun to keep this game evolving.'
    },
    {
      title: 'Timeframe',
      description: 'We had one month to complete this game for marking. There was plenty of time spent experimenting with new ideas and new ways of solving problems. For example, we were using a basic movement system for the player, but it was causing some problems with how we were designing the levels. So, we researched how to make a better movement system to solve some of these issues, which we did and created a much better way of doing this. Every day we met and talked about how each of us were doing on our roles, which was an amazing way to discuss ideas and see how each of the parts of the puzzle was coming along.'
    },
    {
      title: 'Bow & Arrow',
      description: 'One tougher challenge with this game was having the bow and arrow mechanics working. The main goal was to have the arrow gravity work, allowing the head of the arrow to point along the arch of the travel:\nI had many challenges along the way but persisted and solved this piece. That feeling of solving and accomplishing a challenge is what still keeps me engaged and motivated today.'
    }
  ]
});