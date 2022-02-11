/**Insira abaixo informações de dados bancarios */
const usersBanco = 
[
    {
        "idUsuario":1,
        "nomeCartao":"José C S",
        "numeroCartao":6049203910293849,
        "validadeCartao": "20/09/2044",
        "cvc":460
    }
]
/**Insira abaixo informações de locadoras */
const locadorasBanco = 
[
    {
        "idLocadora":1,
        "nomeLocadora":"AG. O1 SP",
        "email":"emailficticio1@email.com", 
        "cnpj":52313240000192,
        "telefone":11902310029,
        "cep":"02938992",
        "rua":"AV. Casa de Pedras, 1023",
        "complemento":null,
        "cidade":"São Paulo",
        "estado":"São Paulo"
    },
    {
        "idLocadora":2,
        "nomeLocadora":"AG. O1 RJ",
        "email":"emailficticio2@email.com", 
        "cnpj":52313240000148,
        "telefone":11902317929,
        "cep":"09293992",
        "rua":"AV. Copacabana, 851",
        "complemento":null,
        "cidade":"Rio de Janeiro",
        "estado":"Rio de Janeiro"
    }
]
/**Insira abaixo informações de mensagens (enviadas da página contato) */
const messagesBanco = 
[
    {
        "idMensagem":1,
        "nomeCompleto":"Juliana Gomes Barbosa",
        "email":"ju-li-a-na@me.com",
        "mensagem":"Não consigo acessar minha conta, como posso resolver isso?"
    },
    {
        "idMensagem":2,
        "nomeCompleto":"Rafael Mendes",
        "email":"raffffffffa@gmks.com",
        "mensagem":"Estou tentando cadastrar e não vai, como fazer?"
    }
]

/**Insira abaixo informações de reservas */
const reservasBanco = 
[
    {
        "idReserva":1,
        "idVeiculo":1,
        "idUsuario":1,
        "idLocalRetirada":1,
        "data retirada":"31/12/2021",
        "valor":"R$600,00",
        "idLocalEntrega":2,
        "data entrega":"05/01/22"
    },
    {
        "idReserva":2,
        "idVeiculo":2,
        "idUsuario":1,
        "idLocalRetirada":2,
        "data retirada":"05/01/22",
        "valor":"R$800,00",
        "idLocalEntrega":1,
        "data entrega":"05/03/22"
    }
]

/**Insira abaixo informações de status de veiculos */
const statusBanco = 
[{
    "idStatus":1,
    "descricao":"Revisado e OK"
},
{
    "idStatus":2,
    "descricao":"Pendente de Revisão"
},
{
    "idStatus":3,
    "descricao":"Pendente de Reparo"
},
{
    "idStatus":4,
    "descricao":"Alugado"
},
{
    "idStatus":5,
    "descricao":"Indisponível"
}
]

/**Insira abaixo informações de usuários */
const usuariosBanco = 
[
    {
        "idUsuario":"1",
        "tipo":1,
        "nomeCompleto":"José Carlos da Silva",
        "email":"email@email.com", 
        "senha":"senha",
        "cpf":10023190423,
        "telefone":11902310029,
        "datanascimento":"10/01/1992",
        "cnh":"0923023901",
        "validadecnh":"20/03/2023",
        "cep":"01938299",
        "rua":"Rua Caldeira Velha, 180",
        "complemento":"Casa 2",
        "cidade":"São Paulo",
        "estado":"São Paulo"
    },
    
    {
        "idUsuario":"2",
        "tipo":2,
        "nomeCompleto":"José Carlos da Silva",
        "email":"email2@email.com", 
        "senha":"senha",
        "cpf":10023190423,
        "telefone":11902310029,
        "datanascimento":"10/01/1992",
        "cnh":"0923023901",
        "validadecnh":"20/03/2023",
        "cep":"01938299",
        "rua":"Rua Caldeira Velha, 180",
        "complemento":"Casa 2",
        "cidade":"São Paulo",
        "estado":"São Paulo"
    }
]

/**Insira abaixo informações de veiculos */
const veiculosBanco = 
[
    {
    "idVeiculo":"1",
    "modelo":"Agile2020", 
    "placa":"EXT5021",
    "kmRodados":7500,
    "custoDiaria":70,
    "renavam":"19302847993", 
    "status": 1,
    "locadoraPropietaria:":1,
    "locadoraAtual":1,
    "ultimaAtualizacao":"20/01/2022"
    }
,
    {
    "idVeiculo":"2",
    "modelo":"Fox2020", 
    "placa":"FXH0451",
    "kmRodados":8700,
    "custoDiaria":60,
    "renavam":"63894759493", 
    "status": 1,
    "locadoraPropietaria:":2,
    "locadoraAtual":2,
    "ultimaAtualizacao":"20/01/2022"
    }
]