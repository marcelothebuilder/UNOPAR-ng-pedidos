(function() {
    'use strict';

    ProdutosService.$inject = ['$q'];

    function ProdutosService($q) {
        var self = this;

        self.builder = builder;
        self.inserir = inserir;
        // TODO: adicionar persistencia
        self.produtos = [];

        var marmitasMock = [
            ["Marmita1", "Arroz, feijão, bife e salada de tomate.", 15],
            ["Marmita2", "Arroz, feijão, bife e ovo frito", 18],
            ["Marmita3", "Arroz, feijão, file de frango, creme de milho", 14],
            ["Marmita4", "Arroz, feijão, file de frango e salada de tomate", 10]
        ];

        self.produtos = marmitasMock.map(function arrayToProduto(arrayMarmita) {
            return self.builder()
                .nome(arrayMarmita[0])
                .descricao(arrayMarmita[1])
                .custo(arrayMarmita[2])
                .build();
        });

        function builder() {
            return new ProdutoBuilder();
        }

        function inserir(produto) {
            if (!ProdutoBuilder.isValido(produto)) {
                throw new Error("Produto inválido");
            }

            self.produtos.push(produto);

            return $q.resolve(produto);
        }
    }

    function ProdutoBuilder() {
        var self = this;
        var produto = {};

        self.nome = nome;
        self.descricao = descricao;
        self.custo = custo;
        self.build = build;

        _defaults();

        function _defaults() {
            // Adiciona todas propriedades STRING como indefinidas:
            ["nome", "descricao"].forEach(function(propriedade) {
                produto[propriedade] = "Indefinido";
            });

            produto.custo = 0;
        }

        function nome(nome) {
            produto.nome = nome;
            return self;
        }

        function descricao(descricao) {
            produto.descricao = descricao;
            return self;
        }

        function custo(custo) {
            produto.custo = custo;
            return self;
        }

        function build() {
            return produto;
        }
    }

    ProdutoBuilder.isValido = isValido;

    function isValido(produto) {
        if (!produto) {
            return false;
        }

        if (typeof produto !== 'object') {
            return false;
        }

        var propriedades = ["nome", "descricao", "custo"];
        var valido = true;
        propriedades.forEach(function(propriedade) {
            if (!produto.hasOwnProperty(propriedade)) {
                valido = false;
            }
        });
        return valido;
    }

    angular.module('com.github.marcelothebuilder.housemm.produtos')
        .service('ProdutosService', ProdutosService);
}());
