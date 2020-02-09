angular.module("testeBetha").controller("servicosController", function ($scope, growl, clientesAPI, servicosAPI) {
    $scope.servicosLoading = true;
    
    var carregarServicos = function () {
        servicosAPI.getServicos().then(function (response) {
            $scope.noData = (response.data.length == 0) ? true : false;
            
            $scope.servicos = response.data;
            $scope.servicosLoading = false;
        }, function(error){
            growl.error("Houveram erros ao processar a requisição. Confira a conexão com o banco de dados na Api.");
            $scope.servicosLoading = false;
        });
    }

    carregarServicos();


    $scope.filtrarPorEstagio = function () {
        $scope.servicos = [];
        $scope.servicosLoading = true;
        
        if ($scope.estagio == 'todos'){
            carregarServicos();
        }else {
            servicosAPI.getServicoPorEstagio($scope.estagio).then(function (response) {
                $scope.servicos = response.data;
                $scope.servicosLoading = false;
            }, function(error){
                growl.error("Houveram erros ao processar a requisição. Confira a conexão com o banco de dados na Api.");
                $scope.servicosLoading = false;
            });        
        }
    };
});
