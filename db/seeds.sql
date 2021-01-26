-- Write insert queries to populate the burgers table with at least three entries
USE burgers_db;
INSERT INTO burgers (burger_name, devoured)
VALUES 
("The Ultimate Cheeseburger", false),
("Double Patty", true),
("The Gigantor", false);
INSERT INTO burgers (burger_name) VALUES("Slider");
-- Run in mysql server