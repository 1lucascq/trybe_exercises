DROP DATABASE IF EXISTS `exercises`;

CREATE DATABASE `exercises`;

CREATE TABLE `exercises`.`movies` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `rating` INT NOT NULL,
  PRIMARY KEY (`id`)) ENGINE=INNODB;

  CREATE TABLE `exercises`.`employees` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `document` VARCHAR(11) NOT NULL,
  `office` INT NOT NULL,
  `active` TINYINT NOT NULL,
  PRIMARY KEY (`id`)) ENGINE=INNODB;

INSERT INTO `exercises`.`movies`
(`id`,
`name`,
`rating`)
VALUES
(1,
'procurando nemo',
10);

INSERT INTO `exercises`.`employees`
(`id`,
`first_name`,
`last_name`,
`document`,
`office`,
`active`)
VALUES
(1,
'michael',
'scott',
11122233344,
999,
1);
