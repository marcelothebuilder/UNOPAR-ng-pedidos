(function() {
    'use strict';


    /**
     * @ngdoc overview
     * @name unoparhousemmApp
     * @description
     * # unoparhousemmApp
     *
     * Main module of the application.
     */
    angular
        .module('com.github.marcelothebuilder.housemm', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch',
            'ui.bootstrap',
            'com.github.marcelothebuilder.housemm.home',
            'com.github.marcelothebuilder.housemm.clientes',
            'com.github.marcelothebuilder.housemm.empresas',
            'com.github.marcelothebuilder.housemm.entregadores',
            'com.github.marcelothebuilder.housemm.pedidos',
            'com.github.marcelothebuilder.housemm.produtos',
            'com.github.marcelothebuilder.housemm.datetime'
        ]);

    angular.module('com.github.marcelothebuilder.housemm.clientes', []);
    angular.module('com.github.marcelothebuilder.housemm.empresas', []);
    angular.module('com.github.marcelothebuilder.housemm.entregadores', []);
    angular.module('com.github.marcelothebuilder.housemm.pedidos', []);
    angular.module('com.github.marcelothebuilder.housemm.produtos', []);
    angular.module('com.github.marcelothebuilder.housemm.home', []);
    angular.module('com.github.marcelothebuilder.housemm.datetime', ['ui.bootstrap']);
}());
