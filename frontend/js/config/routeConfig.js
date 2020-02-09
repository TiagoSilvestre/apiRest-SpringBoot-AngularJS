angular.module("testeBetha").config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "view/home.html",
        controller: "homeController"
    });

    $routeProvider.when("/servicos", {
        templateUrl: "view/servicos/servicos.html",
        controller: "servicosController"
    });

    $routeProvider.when("/novoServico", {
        templateUrl: "view/servicos/novoServico.html",
        controller: "novoServicoController"
    });    

    $routeProvider.when("/servico/detalhes/:id", {
        templateUrl: "view/servicos/detalhesServico.html",
        controller: "detalhesServicoController"
    });


    $routeProvider.when("/clientes", {
        templateUrl: "view/clientes/clientes.html",
        controller: "clientesController"
    });

    $routeProvider.when("/novoCliente", {
        templateUrl: "view/clientes/novoCliente.html",
        controller: "novoClienteController"
    });

    $routeProvider.when("/detalhesCliente/:id", {
        templateUrl: "view/detalhesCliente.html",
        controller: "detalhesClienteController"
    });

    $routeProvider.otherwise({redirectTo: "/"});
});