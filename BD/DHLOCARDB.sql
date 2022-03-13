CREATE SCHEMA dhlocar;
use dhlocar;

CREATE TABLE tipo_usuario( id_tipo_usuario INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
descricao VARCHAR(100) NOT NULL);


    
    CREATE TABLE endereco (
	id_endereco INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	cep_endereco INT(8) NOT NULL,
    logadouro_endereco VARCHAR(100) NOT NULL,
    complemento_endereco VARCHAR(100) NOT NULL,
    estado_endereco VARCHAR(20) NOT NULL,
    cidade_endereco VARCHAR(30) NOT NULL
    );

CREATE TABLE usuario (
	id_usuario INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	fk_id_tipo_usuario INT(10) NOT NULL,
    nome_completo_usuario VARCHAR(100) NOT NULL,
    email_usuario VARCHAR(100) NOT NULL UNIQUE,
    senha_usuario VARCHAR(100) NOT NULL UNIQUE,
    cpf_usuario INT(10) NOT NULL UNIQUE,
    telefone_usuario INT(11) NOT NULL,
    data_nascimento_usuario DATE NOT NULL,
    cnh_usuario INT(10) NOT NULL UNIQUE,
    validade_cnh_usuario DATE NOT NULL,
    fk_id_endereco INT(10) NOT NULL,
    foreign key (fk_id_endereco) references dhlocar.endereco(id_endereco),
    foreign key (fk_id_tipo_usuario) references dhlocar.tipo_usuario(id_tipo_usuario)
    
    );

    CREATE TABLE cartao (
	id_cartao INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nome_cartao VARCHAR(45) NOT NULL,
    numero_cartao INT(16) NOT NULL UNIQUE,
    validade_cartao DATE NOT NULL,
    cvc_cartao INT(3) NOT NULL,
    fk_id_usuario INT(10) NOT NULL,
	foreign key (fk_id_usuario) references dhlocar.usuario(id_usuario)
    );
    
    CREATE TABLE locadora (
	id_locadora INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome_locadora VARCHAR(100) NOT NULL,
    email_locadora VARCHAR(100) NOT NULL UNIQUE,
    cnpj_locadora INT(14) NOT NULL UNIQUE,
    telefone_locadora INT(11) NOT NULL UNIQUE,
    fk_id_endereco INT(10) NOT NULL,
    foreign key (fk_id_endereco) references dhlocar.endereco(id_endereco)
    );
    
	CREATE TABLE status_veiculo (
	id_status INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(100) NOT NULL
    );
    
    CREATE TABLE mensagem (
	id_mensagem INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome_completo_mensagem VARCHAR(100) NOT NULL,
    email_mensagem VARCHAR(100) NOT NULL,
    conteudo_mensagem VARCHAR(1000) NOT NULL
    );
    
	CREATE TABLE veiculo (
	id_veiculo INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    modelo_veiculo VARCHAR(100) NOT NULL,
    placa_veiculo VARCHAR(10) NOT NULL UNIQUE,
    km_rodados_veiculo DECIMAL(7,2) NOT NULL,
    custo_diaria_veiculo DECIMAL (5,2)  NOT NULL,
    renavam_veiculo INT(11) NOT NULL UNIQUE,
    data_ultima_atualizacao_veiculo DATE NOT NULL,
    fk_id_status INT(10) NOT NULL,
    id_locadora_proprietaria INT(10) NOT NULL,
    id_locadora_atual INT(10) NOT NULL,
    foreign key (fk_id_status) references dhlocar.status_veiculo(id_status),
    foreign key (id_locadora_proprietaria) references dhlocar.locadora(id_locadora),
    foreign key (id_locadora_atual) references dhlocar.locadora(id_locadora)
    );
    
    CREATE TABLE reserva (
	id_reserva INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    valor_reserva DECIMAL(6,2) NOT NULL,
    data_criacao_reserva DATETIME NOT NULL,
    data_retirada_reserva DATETIME NOT NULL,
	data_entrega_reserva DATETIME NOT NULL,
    fk_id_veiculo INT(10) NOT NULL,
    fk_id_usuario INT(10) NOT NULL,
    id_locadora_retirada INT(10) NOT NULL,
    id_locadora_devolucao INT(10) NOT NULL,
	foreign key (fk_id_usuario) references dhlocar.usuario(id_usuario),
    foreign key (fk_id_veiculo) references dhlocar.status_veiculo(id_status),
    foreign key (id_locadora_retirada) references dhlocar.locadora(id_locadora),
    foreign key (id_locadora_devolucao) references dhlocar.locadora(id_locadora)
    );
