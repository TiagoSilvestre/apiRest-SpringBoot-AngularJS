angular.module("testeBetha").factory("servicosAPI", function($http, config){
    var _getServicos = function() {
        return $http.get(config.baseUrl + '/api/servicos');
    }

    var _getServico = function(id) {
        return $http.get(config.baseUrl + '/api/servico/' + id);
    }

    var _getServicoPorEstagio = function(estagio) {
        return $http.get(config.baseUrl + '/api/servicos?estagio=' + estagio);
    }    

    var _saveServico = function(servico) {
        return $http.post(config.baseUrl + '/api/servico', servico);
    }

    return {
        getServicos: _getServicos,
        getServico: _getServico,
        getServicoPorEstagio: _getServicoPorEstagio,
        saveServico: _saveServico
    };
});