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
        
         $scope.removeFriend = function(friend) {

                var idx = $scope.user.friends.indexOf(friend)
                console.log("call here" + idx);
                if (idx > -1) {
                    $scope.user.friends.splice(idx,1);
                }
        }
    }
      
  }
  
});

app.directive('removeFriend',function(){
    return {
        restrict : 'E',
        templateUrl : 'removeFriend.html',
        scope :{
            notifyParent: '&method'
        },
        controller : function($scope){
            $scope.removing = false;
            console.log("AAA");
            
            $scope.startRemove = function() {
                 $scope.removing = true;
                console.log("HERE");
            }

            $scope.cancelRemove = function() {
                 $scope.removing = false;
            }

            $scope.confirmRemove = function() {
                $scope.notifyParent();
            }
           
        }
    }
});

app.directive('address',function(){
    return {
        templateUrl : 'address.html'
    }
});