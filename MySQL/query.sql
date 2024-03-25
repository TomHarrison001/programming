/* multi
line
comment */
select 'Hello World.'; -- not case sensitive
-- SELECT COUNT(*) FROM table; (comment: double dash, 1+ space) outputs total records
-- SELECT field as 'Field Alias' FROM table ORDER BY field LIMIT a, b; (a - offset, b - total records)
-- USE database;
-- SELECT * WHERE Population > 10000000 AND Continent = 'Europe';
-- INSERT INTO table (field1, field2, field3) VALUES (value1, value2, value3);
-- UPDATE table SET username = 'Rockafella', password = 'password' WHERE name LIKE 'Tom%';

-- USE database;
-- CREATE TABLE tableName ( a INT, b VARCHAR(16) );
-- INSERT INTO tableName VALUES ( 1, 'one' );
-- INSERT INTO tableName VALUES ( 2, 'two' );
-- INSERT INTO tableName VALUES ( 3, 'three' );
-- DELETE FROM tableName WHERE a = 2;
-- DROP TABLE IF EXISTS tableName;

-- SELECT a.value1, as A1, a.value2 as A2, b.value1 as B1
--     FROM tableName1 AS a
--     JOIN tableName2 AS b ON a.id = b.a_id;

-- USE database;
-- SHOW TABLES;
-- DESCRIBE tableName;
-- SHOW TABLE STATUS;
-- SHOW CREATE TABLE tableName;

-- Datatypes: INT, DECIMAL/NUMERIC(precision, scale), FLOAT/REAL, DOUBLE, VARCHAR(a), CHAR(a), BINARY(a), VARBINARY(a), TINYBLOB, BLOB, MEDIUMBLOB, LONGBLOB, TINYTEXT, TEXT, MEDIUMTEXT, LONGTEXT, DATE, DATETIME, TIMESTAMP, ENUM, SET

-- SELECT NOW();
-- SELECT UTC_TIMESTAMP();

-- CREATE TABLE tableName (
--     id INT UNSIGNED UNIQUE AUTO_INCREMENT PRIMARY KEY,
--     id SERIAL,
--     stamp DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--     name ENUM( 'One', 'Two', 'Three' )
-- );
-- INSERT INTO tableName (name) VALUES ('One');
-- INSERT INTO tableName (name) VALUES (1);
-- DROP TABLE tableName;

SELECT (0 = 0) AND (1 != 0);
SELECT 9 IN (1, 5, 9);
SELECT 5 MOD 3; -- returns 2
SELECT 5 DIV 3; -- returns 1

-- !, ^, *, /, DIV, MOD, %, -, +, <<, >>, &, |, <=>, >=, <=, <, >, <>, !=, IS, LIKE, REGEXP, IN, BETWEEN, CASE, WHEN, THEN, ELSE, NOT, AND, &&, XOR, OR, ||, =

SELECT
  CASE WHEN a < 5 THEN 'true' ELSE 'false' END AS boolA,
  CASE WHEN b < 5 THEN 'true' ELSE 'false' END AS boolB
  FROM tableName
;
SELECT IF(a < b, 'true', 'false') FROM tableName;

-- % is multi character wildcard, _ is a single character wildcard

SELECT name FROM country WHERE STRCMP(name, 'France') <= 0; -- STRCMP = 0 if equal, -1 if before and 1 if after
SELECT name FROM country WHERE name RLIKE '$y' ORDER BY name;
SELECT name FROM country WHERE name RLIKE '[xy][ai]' ORDER BY name; -- %xa, %xi, %ya, %yi

SELECT CONCAT('Hello', ' World');

-- SIN, ASIN, COS, ACOS, TAN, ATAN, DEGREES, RADIANS

SELECT "name", "age" FROM tableName; -- returns "name", "age" for each record
SELECT `name`, `age` FROM tableName; -- returns name, age for each record
