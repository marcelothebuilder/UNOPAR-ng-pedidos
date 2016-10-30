(function() {
    'use strict';

    function ClientesNovoController(clientesService, $log) {
        var vm = this;
        vm.cliente = {};
        vm.inserir = inserir;

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
    }

    ClientesNovoController.$inject = ['ClientesService', '$log'];

    angular.module('com.github.marcelothebuilder.housemm.home')
        .controller('ClientesNovoController', ClientesNovoController);
}());
