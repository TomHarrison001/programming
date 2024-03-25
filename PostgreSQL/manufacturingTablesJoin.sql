SELECT products.product_id,
	products.name AS product_name,
	products.manufacturing_costs,
	categories.name as category_name,
	categories.market
FROM manufacturing.products 
JOIN manufacturing.categories
ON products.category_id = categories.category_id
WHERE market = 'industrial';