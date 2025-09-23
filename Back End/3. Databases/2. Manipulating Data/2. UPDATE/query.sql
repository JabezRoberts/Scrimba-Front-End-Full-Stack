/*
	Set the condition to 1
		and the price to $10,000
	where the car's brand is Porsche
		and sold is false
*/

-- 1. Add the column (initially nullable)
ALTER TABLE cars
ADD COLUMN dealership_id INTEGER;

UPDATE cars SET
	condition = 1,
	price = 10000
WHERE
	brand = 'Porsche'
	AND sold IS FALSE;

/*
	Update the record for the Aston Martin DB4 with ID 14
		set the condition to 5
		and the price to 465000
*/

UPDATE cars SET
	condition = 5,
	price = 465000
WHERE brand = 'ASTON MARTIN'
	AND model = 'DB4'
	AND ID = 14;


-- 2. Insert data to backfill the dealership_id column

-- Update cars, set the dealership_id to 1
--  where the dealership_id IS NULL
UPDATE cars SET
     dealership_id = 1
	 WHERE dealership_id IS NULL;

-- 3. Add the NOT NULL constraint


-- 4. Add the foreign key constraint

UPDATE cars 


ALTER TABLE cars
ALTER COLUMN brand  set NOT NULL,
ALTER COLUMN model  set NOT NULL,
ALTER COLUMN year set NOT NULL,
ALTER COLUMN price set NOT NULL,
ALTER COLUMN color set NOT NULL,
ALTER COLUMN condition set NOT NULL,
ALTER COLUMN sold set NOT NULL
