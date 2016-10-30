(function() {
    'use strict';

    function EmpresasNovaController(empresasService, $log) {
        var vm = this;
        vm.empresa = {};
        vm.inserir = inserir;

        function inserir() {
            var empresa = empresasService.builder()
                .nome(vm.empresa.nome)
                .cnpj(vm.empresa.cnpj)
                .telefone(vm.empresa.telefone)
                .email(vm.empresa.email)
                .build();

            $log.debug("Inserindo empresa", empresa);

            empresasService.inserir(empresa)
                .then(function() {
                    window.alert("Empresa inserido com sucesso!");
                    vm.empresa = {};
                });
        }
    }

    EmpresasNovaController.$inject = ['EmpresasService', '$log'];

    angular.module('com.github.marcelothebuilder.housemm.home')
        .controller('EmpresasNovaController', EmpresasNovaController);
}());
