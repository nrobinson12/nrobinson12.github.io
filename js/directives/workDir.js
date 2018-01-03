app.directive('myWork', function() {
  return {
    restrict: 'A',
    replace: 'true',
    scope: {
      type: '='
    },
    templateUrl: function(elem, attr) {
      return 'work-' + attr.type + '.html';
      // return 'work-viziya.html';
    }
  };
});