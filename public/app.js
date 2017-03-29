var app = angular.module('AngularPhonebook', []);

app.controller('HomeCtrl', ['$scope', '$http', function($scope, $http){
  $scope.title = "Angular Phonebook";

  $scope.modalPopup = function(user){
    $scope.currentUser = user
    console.log($scope.currentUser);
    document.querySelector('.overlay').style.height = window.getComputedStyle(document.querySelector('body')).height;
    document.querySelector('.user-info').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
      setTimeout(function(){
        document.querySelector('.user-info').style.opacity = 1;
        document.querySelector('.overlay').style.opacity = .6;
      }, 50);
  }

  $http({
    method: 'GET',
    url: 'https://randomuser.me/api/?results=20'
  }).then( function successCallback(response){
    $scope.users = response.data.results;
  });
}]);

app.filter('capitalise', function(){
  return function(input){
    if(input){
      return input.split(' ').map(function(word){
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      }).join(' ');
    } else{
      return '';
    }
  }
});
