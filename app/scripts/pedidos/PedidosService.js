(function() {
    'use strict';

    PedidosService.$inject = ['$q'];

    function PedidosService($q) {
        var self = this;

        var _pedidos = [];
        self.pedidos = pedidos;
        self.tamanhos = tamanhos;
        self.statusPossiveis = statusPossiveis;
        self.builder = builder;
        self.inserir = inserir;
        self.porNomeDoCliente = porNomeDoCliente;

        function pedidos() {
          return _pedidos;
        }

        function tamanhos() {
            return _tamanhos;
        }

        function statusPossiveis() {
            return _statusPossiveis;
        }

        function builder() {
            return new PedidoBuilder();
        }

        function inserir(pedido) {
            if (!PedidoBuilder.isValido(pedido)) {
                throw new Error("Pedido inválido");
            }

            _pedidos.push(pedido);
            
            return $q.resolve(pedido);
        }

        function porNomeDoCliente(nome) {
            if (!nome) {
                return $q.resolve(_pedidos);
            }
            return $q.resolve(_pedidos.filter(function(pedido) {
                return pedido.cliente.nome.toLowerCase().indexOf(nome.toLowerCase()) !== -1;
            }));
        }
    }

    function PedidoBuilder() {
        var self = this;
        var pedido = {};

        self.cliente = cliente;
        self.itens = itens;
        self.adicionarItem = adicionarItem;
        self.taxaEntrega = taxaEntrega;

        self.build = build;

        _defaults();

        function _defaults() {
            pedido.taxaEntrega = 0;
            pedido.cliente = null;
            pedido.status = {
                id: 'PENDENTE',
                descricao: 'Pendente'
            };
            pedido.itens = [];
        }

        function cliente(cliente) {
            pedido.cliente = cliente;
            return self;
        }

        function itens(itens) {
            pedido.itens = itens;
            return self;
        }

        function adicionarItem(item) {
            pedido.itens.push(item);
            return self;
        }

        function taxaEntrega(taxaEntrega) {
            pedido.taxaEntrega = taxaEntrega;
            return self;
        }

        function build() {
            return pedido;
        }
    }

    PedidoBuilder.isValido = isValido;

    function isValido(pedido) {
        if (!pedido) {
            return false;
        }

        if (typeof pedido !== 'object') {
            return false;
        }

        var valido = true;

        return valido;
    }



    var _tamanhos = [{
        id: 'PEQUENO',
        descricao: 'Pequeno'
    }, {
        id: 'MEDIO',
        descricao: 'Medio',
    }, {
        id: 'GRANDE',
        descricao: 'Grande',
    }, {
        id: 'EXTRA_GRANDE',
        descricao: 'Extra grande'
    }];

    var _statusPossiveis = [{
        id: 'PENDENTE',
        descricao: 'Pendente'
    }, {
        id: 'EM_TRANSITO',
        descricao: 'Em transito'
    }, {
        id: 'CANCELADO',
        descricao: 'Cancelado'
    }, {
        id: 'ENTREGUE',
        descricao: 'Entregue'
    }];

    angular.module('com.github.marcelothebuilder.housemm.pedidos')
        .service('PedidosService', PedidosService);
}());
