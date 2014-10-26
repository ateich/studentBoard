'use strict';

angular.module('piraBoardApp')
  .controller('GroupCtrl', function ($scope, $http, $filter, $stateParams, Auth, User) {
    $scope.groupName = $stateParams.name;
    $scope.isAdmin = Auth.isAdmin;
    $scope.users = User.query();

    $scope.delete = function(user) {
      if ( confirm('Really remove ' + user.name + '?')) {
        User.remove({ id: user._id });
        angular.forEach($scope.users, function(u, i) {
          if (u === user) {
            $scope.users.splice(i, 1);
          }
        });
      }
    };

    $scope.inviteEmail = function (email) {
      // send email invite to email
      var invited = angular.element('<tr><td></td><td>' + email +'</td><td colspan="2">PENDING</td></tr>')
      angular.element(invited).appendTo('#member-list');
      $scope.email = '';
    };
  })
.filter('lastname', function () {
  return function (input) {
    return input.split('')[1].sort();

  }
});

