-- Setup

-- Assume DB = postgresql

-- Given the table:

CREATE TABLE something
(
    id uuid NOT NULL,
    name  CHARACTER VARYING(255) NOT NULL,
    email CHARACTER VARYING(255) NOT NULL,
    phone CHARACTER VARYING(255),
    birthday DATE,
    age INTEGER
);

-- create a trigger/function which will calculate the age on insert or modify given the birthday
--DECLARING A STORED PROCEDURE
CREATE FUNCTION generateAge(
    birthday DATE
)
RETURNS INT(100)
BEGIN
DECLARE currDate DATE
    SELECT current_date() into currDate;
    RETURN year(currDate)- year(birthday)
END

--CALLING THE FUNCTION
SELECT id,name,email, phone, birthday, generateAge(birthday) AS age FROM person;