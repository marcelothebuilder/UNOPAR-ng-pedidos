(function() {
    'use strict';

    function mtbDatePicker() {
        // jshint -W040
        var vm = this;
        vm.opened = false;
        vm.format = 'dd/MM/yyyy';
        vm.options = {};
        vm.textClose = "Fechar";
        vm.altInputFormats = [];
        vm.toggleOpen = toggleOpen;

        function toggleOpen() {
            vm.opened = !vm.opened;
        }
    }

    angular.module('com.github.marcelothebuilder.housemm.datetime')
        .component('mtbDatePicker', {
            templateUrl: 'views/datetime/mtbDatePicker/mtbDatePicker.html',
            controller: mtbDatePicker,
            controllerAs: 'vm',
            bindings: {
                ngModel: '=',
                ngRequired: '='
            }
        });
}());
