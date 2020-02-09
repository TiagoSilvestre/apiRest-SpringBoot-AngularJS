angular.module("testeBetha").factory("clientesAPI", function($http, config){
    var _getClientes = function() {
        return $http.get(config.baseUrl + '/api/clientes');
    }

    var _getCliente = function(id) {
        return $http.get(config.baseUrl + '/api/cliente/' + id);
    }

    var _saveCliente = function(cliente) {
        return $http.post(config.baseUrl + '/api/cliente', cliente);
    }

    return {
        getClientes: _getClientes,
        getCliente: _getCliente,
        saveCliente: _saveCliente

    };
});


