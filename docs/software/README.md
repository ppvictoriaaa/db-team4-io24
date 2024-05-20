# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення на початкового наповнення бази даних
```sql
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema db-io24-team4
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db-io24-team4
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db-io24-team4` DEFAULT CHARACTER SET utf8 ;
USE `db-io24-team4` ;

-- -----------------------------------------------------
-- Table `db-io24-team4`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-io24-team4`.`user` (
  `id` INT NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `nickname` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `nickname_UNIQUE` (`nickname` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-io24-team4`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-io24-team4`.`role` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-io24-team4`.`member`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-io24-team4`.`member` (
  `id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_member_user_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_member_Role1_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `fk_member_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `db-io24-team4`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_member_Role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `db-io24-team4`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-io24-team4`.`permission`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-io24-team4`.`permission` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-io24-team4`.`grant`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-io24-team4`.`grant` (
  `id` INT NOT NULL,
  `role_id` INT NOT NULL,
  `permission_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Grant_Role1_idx` (`role_id` ASC) VISIBLE,
  INDEX `fk_grant_permission1_idx` (`permission_id` ASC) VISIBLE,
  CONSTRAINT `fk_Grant_Role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `db-io24-team4`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_grant_permission1`
    FOREIGN KEY (`permission_id`)
    REFERENCES `db-io24-team4`.`permission` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-io24-team4`.`project`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-io24-team4`.`project` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(150) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-io24-team4`.`project_member`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-io24-team4`.`project_member` (
  `id` INT NOT NULL,
  `member_id` INT NOT NULL,
  `project_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_project_member_member1_idx` (`member_id` ASC) VISIBLE,
  INDEX `fk_project_member_project1_idx` (`project_id` ASC) VISIBLE,
  CONSTRAINT `fk_project_member_member1`
    FOREIGN KEY (`member_id`)
    REFERENCES `db-io24-team4`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_project_member_project1`
    FOREIGN KEY (`project_id`)
    REFERENCES `db-io24-team4`.`project` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-io24-team4`.`task`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-io24-team4`.`task` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(150) NOT NULL,
  `isCompleted` TINYINT NOT NULL,
  `project_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_task_project1_idx` (`project_id` ASC) VISIBLE,
  CONSTRAINT `fk_task_project1`
    FOREIGN KEY (`project_id`)
    REFERENCES `db-io24-team4`.`project` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


-- -----------------------------------------------------
-- Data for table `db-io24-team4`.`role`
-- -----------------------------------------------------
START TRANSACTION;
USE `db-io24-team4`;
INSERT INTO `db-io24-team4`.`role` (`id`, `name`) VALUES (1, `ProjectOwner`);
INSERT INTO `db-io24-team4`.`role` (`id`, `name`) VALUES (2, `Developer`);

COMMIT;

-- -----------------------------------------------------
-- Data for table `db-io24-team4`.`permission`
-- -----------------------------------------------------
START TRANSACTION;
USE `db-io24-team4`;
INSERT INTO `db-io24-team4`.`permission` (`id`, `name`) VALUES (1, `create_task`);
INSERT INTO `db-io24-team4`.`permission` (`id`, `name`) VALUES (2, `delete_task`);
INSERT INTO `db-io24-team4`.`permission` (`id`, `name`) VALUES (3, `change_task_description`);
INSERT INTO `db-io24-team4`.`permission` (`id`, `name`) VALUES (4, `change_project_description`);
INSERT INTO `db-io24-team4`.`permission` (`id`, `name`) VALUES (5, `add_user`);
INSERT INTO `db-io24-team4`.`permission` (`id`, `name`) VALUES (6, `delete_user`);
INSERT INTO `db-io24-team4`.`permission` (`id`, `name`) VALUES (7, `delete_project`);

COMMIT;

-- -----------------------------------------------------
-- Data for table `db-io24-team4`.`grant`
-- -----------------------------------------------------
START TRANSACTION;
USE `db-io24-team4`;
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (1, 1, 1);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (2, 1, 2);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (3, 1, 3);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (4, 1, 4);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (5, 1, 5);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (6, 1, 6);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (7, 1, 7);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (8, 2, 1);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (9, 2, 2);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (10, 2, 3);

COMMIT;

-- -----------------------------------------------------
-- Data for table `db-io24-team4`.`user`
-- -----------------------------------------------------
START TRANSACTION;
USE `db-io24-team4`;
INSERT INTO `db-io24-team4`.`user` (`id`, `email`, `nickname`, `password`) VALUES (1, `yellowmonkey@gmail.com`, `yellowmonkey`, `Bws3YXQ8`);
INSERT INTO `db-io24-team4`.`user` (`id`, `email`, `nickname`, `password`) VALUES (2, `wonderful@gmail.com`, `w0nderful`, `NW4Xzm4h`);
INSERT INTO `db-io24-team4`.`user` (`id`, `email`, `nickname`, `password`) VALUES (3, `denysholovin03@gmail.com`, `holovin.d`, `sDnGtCiN`);

COMMIT;

-- -----------------------------------------------------
-- Data for table `db-io24-team4`.`member`
-- -----------------------------------------------------
START TRANSACTION;
USE 'db-io24-tean4';
INSERT INTO `db-io24-team4`.`member` (`id`, `user_id`, `role_id`) VALUES (1, 1, 1)
INSERT INTO `db-io24-team4`.`member` (`id`, `user_id`, `role_id`) VALUES (2, 2, 2)
INSERT INTO `db-io24-team4`.`member` (`id`, `user_id`, `role_id`) VALUES (3, 3, 2)

COMMIT;

-- -----------------------------------------------------
-- Data for table `db-io24-team4`.`project_member`
-- -----------------------------------------------------
START TRANSACTION;
USE 'db-io24-tean4';
INSERT INTO `db-io24-team4`.`project_member` (`id`, `member_id`, `project_id`) VALUES (1, 1, 1)
INSERT INTO `db-io24-team4`.`project_member` (`id`, `member_id`, `project_id`) VALUES (2, 2, 1)
INSERT INTO `db-io24-team4`.`project_member` (`id`, `member_id`, `project_id`) VALUES (3, 3, 1)

COMMIT;

-- -----------------------------------------------------
-- Data for table `db-io24-team4`.`project`
-- -----------------------------------------------------
START TRANSACTION;
USE 'db-io24-tean4';
INSERT INTO `db-io24-team4`.`project` (`id`, `name`, `description`) VALUES (1, `course work`, `Our course work`)

COMMIT;

-- -----------------------------------------------------
-- Data for table `db-io24-team4`.`task`
-- -----------------------------------------------------
START TRANSACTION;
USE 'db-io24-tean4';
INSERT INTO `db-io24-team4`.`task` (`id`, `name`, `description`, `isCompleted`, `project_id`) VALUES (1, `Frontend`, `Frontend part`, 0, 1)
INSERT INTO `db-io24-team4`.`task` (`id`, `name`, `description`, `isCompleted`, `project_id`) VALUES (2, `Backend`, `Backend part`, 0, 1)

COMMIT;
```

## RESTfull сервіс для управління даними

