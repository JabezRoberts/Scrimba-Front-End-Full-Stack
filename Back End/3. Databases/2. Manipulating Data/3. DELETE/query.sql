/*
	Delete from the cars table, any record where
		condition is 0
*/

DELETE FROM cars WHERE condition = 0;

/*
	Delete any record from the cars table where sold is TRUE
*/
DELETE FROM cars WHERE sold IS TRUE;




/*
	Select the city and average car price
	Round that car price to a whole number
	
	Only show dealerships which have cars
	
	Group by dealership city and state
*/
SELECT city, ROUND(AVG(price))
FROM dealerships 
LEFT JOIN cars ON dealerships.id = cars.dealership_id
WHERE cars.id IS NOT NULL
GROUP BY city, state;
/*
	Select the name and role, alongside a total_sales:
		this is the sum of sales by a member of staff
	
	Use staff as your left table and sold_cars as your right table
	
	Include a where clause to select only staff with the role 'Salesperson'
	
	Group by staff name and role
	Order by the total_sales from high to low
*/

SELECT name, role, SUM(total_sales) FROM staff
LEFT JOIN sold_cars ON staff.id = sold_cars.seller
WHERE role = 'Salesperson'
GROUP BY name, role
ORDER BY SUM(total_sales) DESC;