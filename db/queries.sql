USE "node";

CREATE TABLE `node`.`usuarios` (
  `id` SERIAL NOT NULL,
  `nombre` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL ,
  `estado` TINYINT NOT NULL DEFAULT '1'
) ENGINE = InnoDB;

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `estado`)
  VALUES (NULL, 'JSamuel', 'jsamuel@gmail.com', '1');

ALTER TABLE `usuarios`
  ADD `createdAt` TIMESTAMP NOT NULL AFTER `estado`,
  ADD `updatedAt` TIMESTAMP NOT NULL AFTER `createdAt`;

ALTER TABLE `node`.`usuarios` ADD UNIQUE `email_unique` (`email`);