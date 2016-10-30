(function() {
    'use strict';

    mtbNavbar.$inject = ['$location'];

    function mtbNavbar($location) {
        var vm = this;
        vm.menuClass = menuClass;

        function menuClass(nomeMenu) {
            var paths = $location.url().split('/');
            paths.shift();
            return paths[0] === nomeMenu ? 'active' : '';
        }
    }

    angular.module('com.github.marcelothebuilder.housemm.navegacao')
        .component('mtbNavbar', {
            templateUrl: 'scripts/navegacao/mtbNavbar/mtbNavbar.html',
            controller: mtbNavbar,
            controllerAs: 'vm'
        });
}());
