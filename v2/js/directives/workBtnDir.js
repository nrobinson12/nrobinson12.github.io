app.directive('workBtn', function() {
  return {
    restrict: 'A',
    replace: 'true',
    scope: {
      data: '='
    },
    templateUrl: 'partials/workBtn.html'
  };
});