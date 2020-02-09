angular.module("testeBetha").controller("novoClienteController", function ($scope, clientesAPI, $location, growl) {
        
    $scope.cadastrarCliente = function () {
        var telefone = $scope.telefone.substr(0, 5) + '-' + $scope.telefone.substr(5, 8);

        var data = {
            nome: $scope.nome,
            email: $scope.email,
            telefone: telefone,
            endereco: $scope.endereco
        };

        clientesAPI.saveCliente(data).then(
            function (response) {
                growl.success("Cliente Cadastrado com Sucesso!");
                $location.path("/clientes");
            },
            function (error) {
                growl.error("Houveram erros ao processar a requisição. Confira a conexão com o banco de dados na Api.");
            }
        );
    };
});