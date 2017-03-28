var app = angular.module('AngularPhonebook', []);

app.controller('HomeCtrl', ['$scope', '$http', function($scope, $http){
  $scope.title = "Angular Phonebook";

  $http({
    method: 'GET',
    url: 'https://randomuser.me/api/?results=20'
  }).then( function successCallback(response){
    $scope.users = response.data.results;
  });
}]);
