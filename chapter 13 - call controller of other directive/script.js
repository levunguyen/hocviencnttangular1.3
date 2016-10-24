var app = angular.module('app',[]);

app.controller('mainCtrl',function($scope){
  
 
    
  
}) 

app.directive('emperor',function(){
    var name = "Emperor";
    return {
        scope : true,
        controller : function($scope){
            this.name = name;
        },
        link  : function($scope,el,attrs) {
                el.data('name',name);
                $scope.master = name;
            }
        
    };
});

app.directive('vader',function(){
  
    return {
        scope : true,
        require : "^emperor",//^ tell angular how to find directive. If the same node (same line)
        link : function($scope,el,attrs,emperorCtrl) {
           el.data('name','Vador');
           el.data('master',emperorCtrl.name);
            console.log("scope of master is " + emperorCtrl.name);
        }
    }
});