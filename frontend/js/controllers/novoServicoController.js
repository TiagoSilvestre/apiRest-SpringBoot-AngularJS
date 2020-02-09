angular.module("testeBetha").controller("novoServicoController", function ($scope, $location, clientesAPI, servicosAPI, growl) {

    var carregarClientes = function () {
        clientesAPI.getClientes().then(function (response) {
            $scope.clientes = response.data;
        }, function (error) {
            growl.error("Houveram erros ao processar a requisição. Confira a conexão com o banco de dados na Api.");
        });
    }
    carregarClientes();


    $scope.cadastrarServico = function () {
        servicosAPI.saveServico($scope.servico).then(
            function (response) {
                growl.success("Serviço Cadastrado com Sucesso!");
                $location.path("/servicos");
            },
            function (error) {
                growl.error("Houveram erros ao processar a requisição. Confira a conexão com o banco de dados na Api.");
            }
        );
    };
});