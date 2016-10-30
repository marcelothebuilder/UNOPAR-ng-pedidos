(function() {
    'use strict';


    PedidosNovoController.$inject = ['ClientesService', 'ProdutosService', 'PedidosService', '$log'];

    function PedidosNovoController(clientesService, produtosService, pedidosService, $log) {
        var vm = this;

        vm.clientePorNome = clientePorNome;
        vm.produtoPorNomeDescricao = produtoPorNomeDescricao;
        vm.produtoLabel = produtoLabel;
        vm.produtoSelecionado = produtoSelecionado;
        vm.itens = itens;
        vm.tamanhos = pedidosService.tamanhos;
        vm.isPedidoValido = isPedidoValido;
        vm.inserir = inserir;

        var _itens = [];

        function clientePorNome(nome) {
            return clientesService.porNome(nome);
        }

        function produtoPorNomeDescricao(nomeDescricao) {
            return produtosService.porNomeDescricao(nomeDescricao);
        }

        function produtoLabel(produto) {
            if (!produto) {
                return '';
            }
            return produto.nome + " - " + produto.descricao;
        }

        function produtoSelecionado($item, produto, $label) {
            $log.debug("Produto", $label, 'selecionado');
            vm.produto = null;

            _itens.push({
                produto: produto,
                quantidade: 1,
                tamanho: {
                    id: 'PEQUENO',
                    descricao: 'Pequeno'
                }
            });
        }

        function itens() {
            return _itens;
        }

        function isPedidoValido() {
            return _itens.length > 0 && vm.cliente;
        }

        function inserir() {
            var pedido = pedidosService.builder()
                .cliente(vm.cliente)
                .itens(_itens)
                .build();

            pedidosService.inserir(pedido)
                .then(function() {
                    window.alert("Pedido inserido com sucesso");
                    _itens = [];
                    vm.cliente = null;
                });
        }
    }

    angular.module('com.github.marcelothebuilder.housemm.pedidos')
        .controller('PedidosNovoController', PedidosNovoController);
}());
