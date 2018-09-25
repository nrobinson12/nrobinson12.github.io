app.controller('ctrlvCtrl', function($scope, sharedVals) {
  
  $scope.work_type = sharedVals.getWork(),
  $scope.title_background = 'assets/images/ctrl-v-background2.jpg',
  $scope.title_pic = 'assets/images/ctrl-v.png',
  $scope.title_link = 'https://www.ctrlv.ca',
  $scope.theme = 'rgb(248, 152, 29)',

  $scope.sections = [
    {   
        title: 'Overview',
        description: 'Ctrl V is North America\'s first Virtual Reality Arcade, and is by far the most competitive. Customers book online in hour-timeslots, and come infor their session and play VR. They provide unmatched support for first-timers and flexibility for returning customers.'
    },
    {   
        title: 'Online Booking Software',
        description: 'My main task for this co-op term was to refactor their online booking software called "Crowd Ctrl" into a more readable and understandable code base. Since they are hiring interns every term, they would much rather have a lower learning curve for new hires. This means that instead of typescript with react + redux, I was tasked with replacing that with javascript alongside react + redux. Unfortunately, I no prior experience or knowledge working with any of those languages/frameworks when I got assigned this task. So, with my limited time available, I had to learn all of: javascript, typescript, react, redux, postgreSQL, nodejs, expressjs, on top of actually developing quality products to keep their business afloat. You can see my creation and go through the booking software yourself ',
        link: 'https://www.ctrlv.ca/booking/location'
    },
    {   
      title: 'Move Booking Software',
      description: 'Another task that I worked on is Move Booking. Before this software, customers would have to contact their location\'s facility if they were not able to come to the session they booked and want to move it. I got tasked with making an online version of moving a booking, so that a customer has their own freedom on choosing and confirming when their booking is. This frees up time on the employees side to keep working on pressing matters, and also gives customers an excellent way to move their booking much more easily now. You can see this site online, and you can test it out if you have a booking you would like to move ',
      link: 'https://www.ctrlv.ca/move-booking'
  },
    {   
        title: 'Review',
        description: 'This company makes all of the internships feel absolutely comfortable. I love everybody that I worked with, and am now very close with all of them. This job has hugely flexible hours, as long as you clock in your eight hours, they are not stingy with when you clock that time in. This job got me much more familiar and comfortable working on weekends to get projects done on time. Every single employee there is friendly and amazing to work with.'
    }
  ]
});