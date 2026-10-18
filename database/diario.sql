create database diario_online;
use diario_online;

CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE notas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data DATE DEFAULT (CURRENT_DATE()),
    hora TIME DEFAULT (CURRENT_TIME()),
    titulo VARCHAR(100) DEFAULT 'Sem título',
    conteudo VARCHAR(5000),
    id_usuario INT NOT NULL,
    FOREIGN KEY (id_usuario)
        REFERENCES usuarios (id)
);

drop table notas;

select * from notas; 
select * from usuarios;

SELECT 
    id, data, hora, titulo, conteudo, id_usuario
FROM
    notas;