var app = angular.module('app',[]);

app.controller('mainCtrl',function($scope){
  
  $scope.answer = { baseLocation : "Answer 1" };

});


app.directive('myQuestion',function(){
    
 return {
     restrict : 'E',
     transclude : true,
     templateUrl : 'myQuestion.html',
     scope : {
        questionText : '@q'
     }
 }   
    
});