(function() {
    'use strict';

    ClientesPesquisaController.$inject = ["ClientesService"];

    function ClientesPesquisaController(clientesService) {
        var vm = this;
        vm.clientes = clientes;
        vm.isPesquisando = isPesquisando;
        vm.temResultados = temResultados;

        function isPesquisando() {
            return vm.pesquisaNome;
        }

        function temResultados() {
            return vm.clientes().length > 0;
        }

        function clientes() {
            if (!isPesquisando()) {
                return clientesService.clientes;
            }

            return clientesService.clientes.filter(function(cliente) {
                return cliente.nome.indexOf(vm.pesquisaNome) !== -1;
            });
        }
    }

    angular.module('com.github.marcelothebuilder.housemm.home')
        .controller('ClientesPesquisaController', ClientesPesquisaController);
}());
