-- Write insert queries to populate the burgers table with at least three entries
USE burgers_db;
INSERT INTO burgers (burger_name, devoured, ingredients)
VALUES 
("The Ultimate Cheeseburger", false, "Swiss, Pineapple, Teriyaki, Chicken"),
("Double Patty", true, "Pretzel, Swiss, BBQ"),
("The Gigantor", false, "Cheddar, Pickle, Tomato, Lettuce");
-- INSERT INTO burgers (burger_name) VALUES("Slider");
-- Run in mysql server