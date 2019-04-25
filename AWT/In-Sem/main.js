var app_name = angular.module('app_name', []);

app_name.controller('ctrl1', function($scope){

    

    $scope.updateValue = function() {

        $scope.cal = (+$scope.sub1 + +$scope.sub2 + +$scope.sub3 + +$scope.sub4 + +$scope.sub5);
        $scope.result = $scope.cal/5
        $scope.result2 = $scope.cal/5 + '%';

        $scope.name1 = $scope.name;
        $scope.id1 = $scope.id;
        $scope.prog1 = $scope.program;

        if($scope.result > 80){
            $scope.grade = 'A';
        } 
        else if ($scope.result > 70) {

            $scope.grade = 'B';
        } 
        else if($scope.result > 60) {
            $scope.grade = 'C';
        } 
        else if ( $scope.result > 40) {

            $scope.grade = 'D';
        } 
        else if ( $scope.result < 40){
            $scope.grade = 'F';
        }
    }

});