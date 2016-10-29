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
            'com.github.marcelothebuilder.housemm.home',
            'com.github.marcelothebuilder.housemm.clientes'
        ]);

    angular.module('com.github.marcelothebuilder.housemm.clientes', []);
    angular.module('com.github.marcelothebuilder.housemm.home', []);
}());
