(function() {
    'use strict';

    ClientesPesquisaController.$inject = ["ClientesService"];

    function ClientesPesquisaController(clientesService) {
        var vm = this;
        vm.clientes = clientes;
        vm.isPesquisando = isPesquisando;
        vm.temResultados = temResultados;
        vm.pesquisar = pesquisar;

        var _clientes = [];

        // inicia
        pesquisar();

        function isPesquisando() {
            return vm.pesquisaNome;
        }

        function temResultados() {
            return vm.clientes().length > 0;
        }

        function pesquisar() {
            clientesService.porNome(vm.pesquisaNome)
                .then(function(clientes) {
                    _clientes = clientes;
                });
        }

        function clientes() {
            return _clientes;
        }
    }

    angular.module('com.github.marcelothebuilder.housemm.home')
        .controller('ClientesPesquisaController', ClientesPesquisaController);
}());
