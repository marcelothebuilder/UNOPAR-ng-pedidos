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
            return empresasService.porNome(vm.pesquisaNome);
        }
    }

    angular.module('com.github.marcelothebuilder.housemm.home')
        .controller('EmpresasPesquisaController', EmpresasPesquisaController);
}());
