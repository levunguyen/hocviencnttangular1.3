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
    
   console.log($scope); 
  
}) 

app.directive('userInfoCard',function(){
  
  return {
    templateUrl : "userInfoCard.html",
    restrict : "E",
    controller : function($scope) {
        $scope.knightMe = function(user) {
            user.rank = 'Knight';
        }  
        
         console.log($scope); 
    }
  }
  
});