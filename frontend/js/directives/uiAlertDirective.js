angular.module("testeBetha").directive("uiAlert", function(){
    return {
        templateUrl: "view/partials/alert.html",
        replace: true,
        restrict: "AE",
        scope: {
            type: "@",
            alertmessage: "@"
        }
        //transclude: true
    };
});