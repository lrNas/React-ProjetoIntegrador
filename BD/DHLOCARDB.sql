CREATE SCHEMA dhlocar;
use dhlocar;

CREATE TABLE tipo_usuarios( 
	id INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
descricao VARCHAR(100) NOT NULL);


    
    CREATE TABLE enderecos (
	id INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	cep INT(8) NOT NULL,
    logadouro VARCHAR(100) NOT NULL,
    complemento VARCHAR(100) NOT NULL,
    estado VARCHAR(20) NOT NULL,
    cidade VARCHAR(30) NOT NULL
    );

CREATE TABLE usuarios (
	id INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	fk_id_tipo_usuario INT(10) NOT NULL,
    nome_completo VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(100) NOT NULL UNIQUE,
    cpf INT(10) NOT NULL UNIQUE,
    telefone INT(11) NOT NULL,
    data_nascimento DATE NOT NULL,
    cnh INT(10) NOT NULL UNIQUE,
    validade_cnh DATE NOT NULL,
    fk_id_endereco INT(10) NOT NULL,
    foreign key (fk_id_endereco) references dhlocar.enderecos(id),
    foreign key (fk_id_tipo_usuario) references dhlocar.tipo_usuarios(id)
    
    );

    CREATE TABLE cards (
	id INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45) NOT NULL,
    numero INT(16) NOT NULL UNIQUE,
    validade DATE NOT NULL,
    cvc INT(3) NOT NULL,
    fk_id_usuario INT(10) NOT NULL,
	foreign key (fk_id_usuario) references dhlocar.usuarios(id)
    );
    
    CREATE TABLE locadoras (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    cnpj INT(14) NOT NULL UNIQUE,
    telefone INT(11) NOT NULL UNIQUE,
    fk_id_endereco INT(10) NOT NULL,
    foreign key (fk_id_endereco) references dhlocar.enderecos(id)
    );
    
	CREATE TABLE status_veiculos (
	id INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(100) NOT NULL
    );
    
    CREATE TABLE messages (
	id INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome_completo VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    conteudo VARCHAR(1000) NOT NULL
    );
    
	CREATE TABLE veiculos (
	id INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    modelo VARCHAR(100) NOT NULL,
    placa VARCHAR(10) NOT NULL UNIQUE,
    km_rodados DECIMAL(7,2) NOT NULL,
    custo_diaria DECIMAL (5,2)  NOT NULL,
    renavam INT(11) NOT NULL UNIQUE,
    data_ultima_atualizacao DATE NOT NULL,
    fk_id_status INT(10) NOT NULL,
    fk_id_locadora_proprietaria INT(10) NOT NULL,
    fk_id_locadora_atual INT(10) NOT NULL,
    foreign key (fk_id_status) references dhlocar.status_veiculos(id),
    foreign key (id_locadora_proprietaria) references dhlocar.locadoras(id),
    foreign key (id_locadora_atual) references dhlocar.locadoras(id)
    );
    
    CREATE TABLE reservas (
	id INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    valor DECIMAL(6,2) NOT NULL,
    data_criacao DATETIME NOT NULL,
    data_retirada DATETIME NOT NULL,
	data_entrega DATETIME NOT NULL,
    fk_id_veiculo INT(10) NOT NULL,
    fk_id_usuario INT(10) NOT NULL,
    id_locadora_retirada INT(10) NOT NULL,
    id_locadora_devolucao INT(10) NOT NULL,
	foreign key (fk_id_usuario) references dhlocar.usuarios(id),
    foreign key (fk_id_veiculo) references dhlocar.status_veiculos(id),
    foreign key (id_locadora_retirada) references dhlocar.locadoras(id),
    foreign key (id_locadora_devolucao) references dhlocar.locadoras(id)
    );
