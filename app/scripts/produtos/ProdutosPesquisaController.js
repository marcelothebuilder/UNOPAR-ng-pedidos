(function() {
    'use strict';

    ProdutosPesquisaController.$inject = ["ProdutosService"];

    function ProdutosPesquisaController(produtosService) {
        var vm = this;
        vm.produtos = produtos;
        vm.isPesquisando = isPesquisando;
        vm.temResultados = temResultados;

        function isPesquisando() {
            return vm.pesquisaNomeOuDescricao;
        }

        function temResultados() {
            return vm.produtos().length > 0;
        }

        function produtos() {
            if (!isPesquisando()) {
                return produtosService.produtos;
            }

            return produtosService.produtos.filter(function(produto) {
                return [produto.nome, produto.descricao].filter(function(propriedade) {
                    return propriedade.indexOf(vm.pesquisaNomeOuDescricao) !== -1;
                }).length > 0;
            });
        }
    }

    angular.module('com.github.marcelothebuilder.housemm.produtos')
        .controller('ProdutosPesquisaController', ProdutosPesquisaController);
}());
