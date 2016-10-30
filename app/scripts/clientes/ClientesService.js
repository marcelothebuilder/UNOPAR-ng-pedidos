(function() {
    'use strict';

    ClientesService.$inject = ['$q'];

    function ClientesService($q) {
        var self = this;

        self.porNome = porNome;
        self.builder = builder;
        self.inserir = inserir;
        // TODO: adicionar persistencia
        self.clientes = [];

        // mock um cliente
        self.inserir(
            self.builder()
              .nome("Geraldo")
              .endereco("Praça das flores")
              .complemento("apto")
              .telefone("31 1421231231")
              .dataNascimento(new Date())
              .build()
        );

        function porNome(nome) {
          if (!nome) {
              return $q.resolve(self.clientes);
          }

          return $q.resolve(self.clientes.filter(function(cliente) {
              return cliente.nome.indexOf(nome) !== -1;
          }));
        }

        function builder() {
            return new ClienteBuilder();
        }

        function inserir(cliente) {
            if (!ClienteBuilder.isValido(cliente)) {
                throw new Error("Cliente inválido");
            }

            self.clientes.push(cliente);

            return $q.resolve(cliente);
        }


    }

    // Exemplo de uso:
    // builder.nome("Valor")
    //   .telefone("Valor")
    //   .endereco("Valor")
    //   .complemento("Valor")
    //   .dataNascimento(new Date())
    //   .build();
    function ClienteBuilder() {
        var self = this;
        var cliente = {};

        self.nome = nome;
        self.telefone = telefone;
        self.endereco = endereco;
        self.complemento = complemento;
        self.dataNascimento = dataNascimento;
        self.build = build;

        _defaults();

        function _defaults() {
            // Adiciona todas propriedades STRING como indefinidas:
            ["nome", "telefone", "endereco", "complemento"].forEach(function(propriedade) {
                cliente[propriedade] = "Indefinido";
            });

            // define dataNascimento para a data atual
            cliente.dataNascimento = new Date();
        }

        function nome(valor) {
            cliente.nome = valor;
            return self;
        }

        function telefone(valor) {
            cliente.telefone = valor;
            return self;
        }

        function endereco(valor) {
            cliente.endereco = valor;
            return self;
        }

        function complemento(valor) {
            cliente.complemento = valor;
            return self;
        }

        function dataNascimento(valor) {
            cliente.dataNascimento = valor;
            return self;
        }

        function build() {
            return cliente;
        }
    }

    ClienteBuilder.isValido = isValido;

    function isValido(cliente) {
        if (!cliente) {
            return false;
        }

        if (typeof cliente !== 'object') {
            return false;
        }

        var propriedades = ["nome", "telefone", "endereco", "complemento", "dataNascimento"];
        var valido = true;
        propriedades.forEach(function(propriedade) {
            if (!cliente.hasOwnProperty(propriedade)) {
                valido = false;
            }
        });
        return valido;
    }

    angular.module('com.github.marcelothebuilder.housemm.home')
        .service('ClientesService', ClientesService);
}());
