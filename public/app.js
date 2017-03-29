var app = angular.module('AngularPhonebook', []);

app.directive('modalPop', function($interpolate){
  return {
    scope: {},
    link: function(scope, element, attrs){

      element.bind('click', function(){
        var fn = $interpolate(element[0].dataset.user);
        scope.currentUser = fn(scope.$parent);
        // scope.currentUser = element[0].dataset.user;
        document.querySelector('.user-info').style.display = 'block';
          setTimeout(function(){
            document.querySelector('.user-info').style.opacity = 1;
          }, 50);

        console.log(scope);

      })
      // })

      // });
      // anchor.on('click', function(event){
      //   console.log(anchor[0]);
      //
      //   // scope.currentUser = anchor[0].dataset.user;
      //   document.querySelector('.user-info').style.display = 'block';
      //   setTimeout(function(){
      //     document.querySelector('.user-info').style.opacity = 1;
      //   }, 50);
      // });
    }
  }
});

app.controller('HomeCtrl', ['$scope', '$http', function($scope, $http){
  $scope.title = "Angular Phonebook";
  $scope.currentUser = {name: {first: "james"}};

  $scope.modalPopup = function(user_number){
    $scope.currentUser = $scope.users[user_number];
    document.querySelector('.user-info').style.display = 'block';
      setTimeout(function(){
        document.querySelector('.user-info').style.opacity = 1;
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
    return input.split(' ').map(function(word){
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
  }
});
