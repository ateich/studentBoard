'use strict';

angular.module('piraBoardApp')
  .controller('ProfilesCtrl', function ($scope, $http, Auth) {
    $scope.users = [];

    $http.get('/api/users').success(function(users) {
      $scope.users = users;
    });
    
  });