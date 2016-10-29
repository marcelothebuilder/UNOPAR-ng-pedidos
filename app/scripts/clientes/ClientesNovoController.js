(function() {
    'use strict';

    function ClientesNovoController(clientesService, $log) {
        var vm = this;
        vm.cliente = {};
        vm.inserir = inserir;
        vm.abrirDataNascimentoPicker = abrirDataNascimentoPicker;

        function inserir() {
            var cliente = clientesService.builder()
                .nome(vm.cliente.nome)
                .telefone(vm.cliente.telefone)
                .endereco(vm.cliente.endereco)
                .complemento(vm.cliente.complemento)
                .dataNascimento(vm.cliente.dataNascimento)
                .build();

            $log.debug("Inserindo cliente", cliente);

            clientesService.inserir(cliente)
                .then(function() {
                    window.alert("Cliente inserido com sucesso!");
                    vm.cliente = {};
                });
        }

        function abrirDataNascimentoPicker() {
            vm.dataNascimentoPicker = vm.dataNascimentoPicker || {};
            vm.dataNascimentoPicker.opened = !vm.dataNascimentoPicker.opened;
        }
    }

    ClientesNovoController.$inject = ['ClientesService', '$log'];

    angular.module('com.github.marcelothebuilder.housemm.home')
        .controller('ClientesNovoController', ClientesNovoController);
}());
