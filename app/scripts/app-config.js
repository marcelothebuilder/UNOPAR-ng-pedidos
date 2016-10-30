(function() {
    'use strict';
    angular
        .module('com.github.marcelothebuilder.housemm')
        .config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/home/main.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                })
                .when('/clientes/pesquisa', {
                    templateUrl: 'views/clientes/pesquisa.html',
                    controller: 'ClientesPesquisaController',
                    controllerAs: 'vm'
                })
                .when('/clientes/novo', {
                    templateUrl: 'views/clientes/novo.html',
                    controller: 'ClientesNovoController',
                    controllerAs: 'vm'
                })
                .when('/produtos/pesquisa', {
                    templateUrl: 'views/produtos/pesquisa.html',
                    controller: 'ProdutosPesquisaController',
                    controllerAs: 'vm'
                })
                .otherwise({
                    redirectTo: '/'
                });
        });

}());
