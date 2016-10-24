var app = angular.module('app',[]);

app.controller('mainCtrl',function($scope){
  
  $scope.items = [2,4,6,33,445];

});


app.directive('myLazyRender',function(){
    
 return {
     restrict : 'A',
     transclude : 'element',
     priority : 1200,
     link: function(scope,el,attr,cltr,transclude) {
        var hasBeenShow = false;
        var unwatchFn = scope.$watch(attr.myLazyRender,function(value){
             if (value && !hasBeenShow) {
                 hasBeenShow = true;
                 transclude(scope,function(clone){
                     el.after(clone);
                 });
                 unwatchFn();
             }
         })
     }
     
 }   
    
});