angular.module("testeBetha").controller("detalhesServicoController", function ($scope, $routeParams, servicosAPI, growl) {

    servicosAPI.getServico($routeParams.id).then(function (response) {
        $scope.servico = response.data;
    }, function (error) {
        growl.error("Houveram erros ao processar a requisição. Confira a conexão com o banco de dados.");
    });
});