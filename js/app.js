(function () {
 'use strict';

 angular.module("foodCountChecker",[])
 .controller("foodCount",['$scope', function ($scope){
    $scope.foodCountInput="";
    $scope.resultText="";
    var temp = [];

    $scope.submit = function(){
        temp = $scope.foodCountInput.split(/\s*,\s*/);
        temp = temp.filter(Boolean);
        if (temp.length >3 ) {
            $scope.colorBorder={'border-color':'green'};
            $scope.colorText={'color':'green'};
            $scope.resultText = "Too much!";
        } else
            if (temp.length > 0) {
                $scope.colorBorder={'border-color':'green'};
                $scope.colorText={'color':'green'};
                $scope.resultText = "Enjoy";
            } else
                if ((temp.length == 0) && ($scope.foodCountInput == "")) {
                    $scope.colorBorder={'border-color':'red'};
                    $scope.colorText={'color':'red'};
                    $scope.resultText = "Please enter data first";
                }
                else {
                    $scope.colorBorder={'border-color':'red'};
                    $scope.colorText={'color':'red'};
                    $scope.resultText = "Please enter valid data, at least one non-space or non-separator symbol!";
                }
     }



 }]);


})();
