(function() {
    'use strict';

    PedidosPesquisaController.$inject = ["PedidosService"];

    function PedidosPesquisaController(pedidosService) {
        var vm = this;
        vm.pedidos = pedidos;
        vm.isPesquisando = isPesquisando;
        vm.temResultados = temResultados;
        vm.pesquisar = pesquisar;
        vm.statusPossiveis = pedidosService.statusPossiveis;

        var _pedidos = [];

        pesquisar();

        function isPesquisando() {
            return vm.pesquisaNome;
        }

        function temResultados() {
            return vm.pedidos().length > 0;
        }

        function pesquisar() {
            return pedidosService.porNomeDoCliente(vm.pesquisaNome)
                .then(function(pedidos) {
                    _pedidos = pedidos;
                });
        }

        function pedidos() {
            return _pedidos;
        }
    }

    angular.module('com.github.marcelothebuilder.housemm.pedidos')
        .controller('PedidosPesquisaController', PedidosPesquisaController);
}());
