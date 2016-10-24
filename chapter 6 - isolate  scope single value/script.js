var app = angular.module('app',[]);

app.controller('mainCtrl',function($scope){
  
  $scope.user = {
      name : 'Le vu nguyen',
      address : {
          street : '08 Nguyen Thong',
          city : 'Da Nang',
          planet : 'Yahin'
      },
      friends : [
          'Han',
          'Hoa',
          'Tien'
      ]
  };
    

}) 

app.directive('userInfoCard',function(){
  
  return {
    templateUrl : "userInfoCard.html",
    restrict : 'E',
    scope : {
        user:'=',
        initialCollapsed : '@collapsed'
        //collapsed : '@'
    },
    controller : function($scope) {
        $scope.collapsed = ($scope.initialCollapsed === 'true');
        $scope.knightMe = function(user) {
            user.rank = 'Knight';
        } 
        
        $scope.collapse = function() {
            $scope.collapsed = !$scope.collapsed;
        }
       
    }
  }
  
});

app.directive('address',function(){
    return {
        templateUrl : 'address.html'
    }
});