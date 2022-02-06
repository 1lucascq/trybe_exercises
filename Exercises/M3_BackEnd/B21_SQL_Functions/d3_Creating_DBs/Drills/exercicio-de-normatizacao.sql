-- Exerício 3: Monte uma query que:
-- Crie um banco de dados chamado normalization ;
-- Crie todas as tabelas resultantes do exercício 2 (na 2ª Forma Normal);
-- Popule todas as tabelas com os dados fornecidos nos exercícios.
DROP SCHEMA IF EXISTS normalization;
CREATE SCHEMA normalization;
USE normalization;

CREATE TABLE funcionario (
  funcionario_id TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(45) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  register_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY  (funcionario_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
;

INSERT INTO funcionario(funcionario_id, first_name, last_name) VALUES
(12,'John','Cena');

INSERT INTO funcionario(first_name, last_name) VALUES
('José','Cena'),
('João','Cena'),
('Jorge','Cena');

CREATE TABLE setor (
  setor_id TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  PRIMARY KEY (setor_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
;

INSERT INTO setor(name) VALUES
('Administração'),
('Vendas'),
('Operacional'),
('Estratégico'),
('Marketing')
;

CREATE TABLE funcionario_setor (
	func_id TINYINT UNSIGNED NOT NULL,
  set_id TINYINT UNSIGNED NOT NULL,
  FOREIGN KEY (func_id) REFERENCES funcionario (funcionario_id) ON DELETE RESTRICT ON UPDATE CASCADE,
  FOREIGN KEY (set_id) REFERENCES setor (setor_id) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO funcionario_setor (func_id, set_id) VALUES
(12, 1),
(12, 2),
(13, 2),
(14, 3),
(14, 4),
(15, 1)
;
