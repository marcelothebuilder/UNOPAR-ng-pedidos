(function() {
    'use strict';

    EmpresasPesquisaController.$inject = ["EmpresasService"];

    function EmpresasPesquisaController(empresasService) {
        var vm = this;
        vm.empresas = empresas;
        vm.isPesquisando = isPesquisando;
        vm.temResultados = temResultados;

        function isPesquisando() {
            return vm.pesquisaNome;
        }

        function temResultados() {
            return vm.empresas().length > 0;
        }

        function empresas() {
            if (!isPesquisando()) {
                return empresasService.empresas;
            }

            return empresasService.empresas.filter(function(empresa) {
                return empresa.nome.indexOf(vm.pesquisaNome) !== -1;
            });
        }
    }

    angular.module('com.github.marcelothebuilder.housemm.home')
        .controller('EmpresasPesquisaController', EmpresasPesquisaController);
}());
