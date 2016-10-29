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
            'com.github.marcelothebuilder.housemm.datetime'
        ]);

    angular.module('com.github.marcelothebuilder.housemm.clientes', []);
    angular.module('com.github.marcelothebuilder.housemm.home', []);
    angular.module('com.github.marcelothebuilder.housemm.datetime', ['ui.bootstrap']);
}());
