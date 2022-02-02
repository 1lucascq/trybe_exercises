DROP SCHEMA IF EXISTS ex_1;
CREATE SCHEMA ex_1;
USE ex_1;

CREATE TABLE residencias (
	residencia_id INT NOT NULL AUTO_INCREMENT,
  tipo VARCHAR(10) NOT NULL,
  locador VARCHAR(20) NOT NULL,
  endereco VARCHAR(50) NOT NULL,
  cidade VARCHAR(20) NOT NULL,
  uf VARCHAR(15) NOT NULL,
  PRIMARY KEY (residencia_id)
) ENGINE=InnoDB;

INSERT INTO residencias (tipo, locador, endereco, cidade, uf) VALUES
('casa','Doran', 'Rua Norte Sul, 35', 'Belo Horizonte', 'MG'),
('ap','Ramon','Av Rodrigues Ramos, 55','São Paulo','SP'),
('ap','Jesga','Av Brasil 22','Porteirinha','MG'),
('casa','Diego','Rua São Sebastião 29','Salvador','BA')
;

CREATE TABLE inquilinos (
	inquilino_id INT NOT NULL AUTO_INCREMENT,
  residencia_id INT NOT NULL,
  nome VARCHAR(20) NOT NULL,
	FOREIGN KEY (residencia_id) REFERENCES residencias (residencia_id) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;
;
INSERT INTO inquilinos (residencia_id, nome) VALUES
(1,'João'),
(1,'Carlos'),
(1,'José'),
(2,'Maria'),
(2,'Natália'),
(3,'Diego'),
(3,'Jussara'),
(4,'Waena'),
(4,'Gisele'),
(4,'Beth')
;




;

