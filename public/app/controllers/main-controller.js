app.controller('MainController', ['$scope', 'instagramAPI', function($scope, instagramAPI) {
  instagramAPI.returnInstagramClientId();

  $scope.view = {};
  $scope.view.authenticateInstagram = function() {
    instagramAPI.authenticateAccount();
  }
  $scope.view.returnInstagramClientId = function() {
    console.log(instagramAPI.instagramClientId);
  }
}])