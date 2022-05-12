CREATE DATABASE `geek_store`

CREATE TABLE `products` 
( `id` INT NOT NULL , `name` VARCHAR(20) NOT NULL , `price` FLOAT NOT NULL , `description` TEXT NOT NULL , `category` VARCHAR NOT NULL , `colors` VARCHAR NOT NULL , `size` VARCHAR NOT NULL , `discount` INT NOT NULL , `type` VARCHAR NOT NULL ,
 `img` VARCHAR NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;