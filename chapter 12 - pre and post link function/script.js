var app = angular.module('app',[]);

app.controller('mainCtrl',function($scope){
  
 
    
  
}) 

app.directive('emperor',function(){
  
    return {
        scope : true,
        link : 
        {
            pre : function($scope,el,attrs) {
                el.data('name','The Emperor');
                $scope.master = 'The Emperor';
            }
        }
    };
});

app.directive('vader',function(){
  
    return {
        scope : true,
        link : function($scope,el,attrs) {
           el.data('name','Vador');
           el.data('master',$scope.master);
            console.log("scope of master is " + $scope.master);
        }
    }
});