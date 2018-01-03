app.service('sharedVals', function() {
  var workAttr = 'viziya';
  
  return {
      getWork: function() {
          return workAttr;
      },
      setWork: function(val) {
        workAttr = val;
      }
  }
});