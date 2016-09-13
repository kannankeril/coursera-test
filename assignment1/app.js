(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);


    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.lunchMenu = "";
        $scope.checkLunchResponse = "";
        $scope.customStyle = {};

        $scope.checkLunchContents = function () {
            var strEntry = $scope.lunchMenu.trim();
            var strArray = strEntry.split(",");
            if (strEntry === "") {
                $scope.checkLunchResponse = "Please enter data first";
                $scope.customStyle.colorClass = "red";
            }
            else if (strArray.length <= 3) {
                $scope.checkLunchResponse = "Enjoy!";
                $scope.customStyle.colorClass = "green";
            }
            else {
                $scope.checkLunchResponse = "Too much!";
                $scope.customStyle.colorClass = "green";
            }
        };
    }

})();
