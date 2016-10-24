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
        user:'='
    },
    controller : function($scope) {
        $scope.collapsed = false;
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