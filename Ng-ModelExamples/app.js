var app = angular.module("ngModelExample",[])
app.controller("ExampleController",ngModelFun);

function ngModelFun($scope){
  $scope.textBoxChange =   function() {
        console.log("Text is being changing");
    }

}