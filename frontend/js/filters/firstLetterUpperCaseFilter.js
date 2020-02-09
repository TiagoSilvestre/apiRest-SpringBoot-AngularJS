angular.module("testeBetha").filter("firstLetterUpperCase", function(){
    return function (input) {
        var listadeNomes = input.split(" ");
        var listaDeNomesFormatada = listadeNomes.map(function (nome) {
            if(nome == 'da' || nome == 'de' || nome == 'do' || nome == 'dos') return nome;
            return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
        });
        return listaDeNomesFormatada.join(" ");
    }
});