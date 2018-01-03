app.controller('viziyaCtrl', function($scope) {
  
  $scope.work_type = 'viziya',
  $scope.title_background = 'assets/images/viziyabackground.jpg',
  $scope.title_pic = 'assets/images/viziya1.png',
  $scope.theme = 'rgb(248, 152, 29)',

  $scope.sections = [
    {   title: 'Role',
        description: 'Junior Software Developer'
    },
    {   title: 'Location',
        description: 'Waterdown, Ontario'
    },
    {   title: 'Description',
        description: 'Viziya is a software company, with their products focusing on the managing and maintaining of huge company\'s assets. They keep track of so many different variables of a company\'s assets that maximize the efficiency of keeping them working. This saves companies enormous amounts of money each year, which in turn improves and stabilizes their process.'
    },
    {   title: 'Responsibilities',
        description: 'My responsibilities consist of updating documents, testing products, and will continue to grow in how significant they are. I will be working on developing a section of one of their products, which is a great learning experience.'
    },
    {   title: 'Notable Accomplishments',
        description: 'Researched and prepared a presentation on a critical decision for the company about whether to move forward on purchasing testing software to test their iOS application.'
    },
    {   title: 'My Review',
        description: 'This is an amazing company to work with. I feel right at home with the open and very friendly employees, providing a unique and lasting co-op experience. They are always willing to talk and help each other whenever is needed, making sure everyone was working as efficiently as possible. I am absolutely enjoying my time here, and I recommend this company to anyone looking for a great co-op placement.'
    }
  ]
});