app.directive('myWork', function() {
  return {
    restrict: 'A',
    replace: 'true',
    scope: {
      type: '=',
      data: '='
    },
    templateUrl: function(elem, attr) {
      return 'partials/work-' + attr.type + '.html';
    }
  };
});