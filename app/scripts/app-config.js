(function() {
    'use strict';
    angular
        .module('com.github.marcelothebuilder.housemm')
        .config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/clientes/pesquisa.html',
                    controller: 'PesquisaClientesController',
                    controllerAs: 'vm'
                })
                .when('/', {
                    templateUrl: 'views/home/main.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                })
                .otherwise({
                    redirectTo: '/'
                });
        });

}());
