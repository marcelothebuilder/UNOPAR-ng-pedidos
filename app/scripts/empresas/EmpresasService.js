(function() {
    'use strict';

    EmpresasService.$inject = ['$q'];

    function EmpresasService($q) {
        var self = this;

        self.builder = builder;
        self.inserir = inserir;
        // TODO: adicionar persistencia
        self.empresas = [];

        // mocka uma empresa
        var empresa = self.builder()
            .nome("Motoboys unidos")
            .cnpj("28123022313123")
            .telefone("11 1209312123")
            .email("super@motoboys.com")
            .build();

        self.inserir(empresa);

        function builder() {
            return new EmpresaBuilder();
        }

        function inserir(empresa) {
            if (!EmpresaBuilder.isValido(empresa)) {
                throw new Error("Empresa inválido");
            }

            self.empresas.push(empresa);

            return $q.resolve(empresa);
        }
    }

    function EmpresaBuilder() {
        var self = this;
        var empresa = {};

        self.nome = nome;
        self.cnpj = cnpj;
        self.telefone = telefone;
        self.email = email;
        self.build = build;

        function nome(nome) {
            empresa.nome = nome;
            return self;
        }

        function cnpj(cnpj) {
            empresa.cnpj = cnpj;
            return self;
        }

        function telefone(telefone) {
            empresa.telefone = telefone;
            return self;
        }

        function email(email) {
            empresa.email = email;
            return self;
        }

        _defaults();

        function _defaults() {
            // Adiciona todas propriedades STRING como indefinidas:
            [
                "nome",
                "cnpj",
                "telefone",
                "email"
            ].forEach(function(propriedade) {
                empresa[propriedade] = "Indefinido";
            });
        }

        function build() {
            return empresa;
        }
    }

    EmpresaBuilder.isValido = isValido;

    function isValido(empresa) {
        if (!empresa) {
            return false;
        }

        if (typeof empresa !== 'object') {
            return false;
        }

        var propriedades = [
            "nome",
            "cnpj",
            "telefone",
            "email"
        ];
        var valido = true;
        propriedades.forEach(function(propriedade) {
            if (!empresa.hasOwnProperty(propriedade)) {
                valido = false;
            }
        });
        return valido;
    }

    angular.module('com.github.marcelothebuilder.housemm.empresas')
        .service('EmpresasService', EmpresasService);
}());
