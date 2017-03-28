var app = angular.module('AngularPhonebook', []);

app.controller('HomeCtrl', ['$scope', function($scope){
  $scope.title = "Angular Phonebook";
}]);
