(function() {
    'use strict';

    ProdutosPesquisaController.$inject = ["ProdutosService"];

    function ProdutosPesquisaController(produtosService) {
        var vm = this;
        vm.produtos = produtos;
        vm.pesquisar = pesquisar;
        vm.isPesquisando = isPesquisando;
        vm.temResultados = temResultados;
        var _produtos = [];

        // inicializa
        pesquisar();

        function isPesquisando() {
            return vm.pesquisaNomeOuDescricao;
        }

        function temResultados() {
            return vm.produtos().length > 0;
        }

        function produtos() {
            return _produtos;
        }

        function pesquisar() {
            return produtosService.porNomeDescricao(vm.pesquisaNomeOuDescricao)
                .then(function(produtos) {
                    _produtos = produtos;
                });
        }
    }

    angular.module('com.github.marcelothebuilder.housemm.produtos')
        .controller('ProdutosPesquisaController', ProdutosPesquisaController);
}());
