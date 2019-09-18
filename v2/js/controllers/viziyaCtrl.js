app.controller('viziyaCtrl', function($scope, sharedVals) {
  
  $scope.work_type = sharedVals.getWork(),
  $scope.title_background = 'assets/images/viziyabackground.jpg',
  $scope.title_pic = 'assets/images/viziya1.png',
  $scope.title_link = 'https://www.viziya.com',
  $scope.theme = 'rgb(248, 152, 29)',

  $scope.sections = [
    {   
        title: 'Overview',
        description: 'Viziya helps businesses effectively and efficiently manage their assets. My role of Junior Software Developer during my co-op term gave me an opportunity to learn and experience many parts of their award-winning business. Most of my time there was invested into helping fix the various software-related bugs that were apparent in one of their newest products, IIoT (The Industrial Internet of Things). Apart from that, my other tasks ranged from testing new releases to their already existing products, developing guides and reference material for their product suite, to analyzing and concluding which external programs are most needed to aid the business. The work environment at Viziya is always welcoming and supportive, having an all around friendly and great group of people to work with. I enjoyed my stay there, and hope to see familiar faces in the future.'
    },
    {   
        title: 'About ERP/EAM',
        description: 'Enterprise Resource Planning is a software system that lets a business conduct their processes regarding most fields in their business: financial, manufacturing, sales, distribution, and more. Enterprise Asset Management directly controls and manages a company’s assets. Viziya is the complete software package that bundles all of a business’ maintenance needs by overlapping on top of their already existing EAM, making a seamless transition into their new software.'
    },
    {   
        title: 'Responsibilities',
        description: 'My tasks consisted of updating documents, testing products, and fixing bugs/adding new features in the latest update to their IoT product. Some of these features were: adding help dialogues/pages, adding error messages, adding new settings, fixed lists not deleting items properly, adding proper checks to names (and their uniqueness) to name creation of items. I also drafted and presented the pros and cons of working with many different testing suites, and giving recommendations on options the company should consider regarding working with these programs.'
    },
    {   
        title: 'Review',
        description: 'This is an amazing company to work with. I feel right at home with the open and very friendly employees, enhancing my co-op experience. They are always willing to talk and help each other whenever is needed, making sure everyone was working as efficiently as possible. I absolutely enjoyed my time there, and I recommend this company to anyone looking for a great co-op placement.'
    }
  ]
});