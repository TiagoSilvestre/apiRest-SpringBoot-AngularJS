angular.module("testeBetha").controller("clientesController", function ($scope, $http, clientesAPI, growl) {
    $scope.clientesLoading = true;

    var carregarClientes = function () {
        clientesAPI.getClientes().then(function (response) {
            $scope.noData = (response.data.length == 0) ? true : false;
            $scope.clientesLoading = false;
            $scope.clientes = response.data;
        }, function (error) {
            $scope.clientesLoading = false;
            growl.error("Houveram erros ao processar a requisição. Confira a conexão com o banco de dados na Api.");
        });
    }

    carregarClientes();
});
