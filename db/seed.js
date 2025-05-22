-- USERS
INSERT INTO Users (first_name, last_name, email, password, phone_number, age, created_date)
VALUES 
('Alice', 'Smith', 'alice@example.com', 'hashedpassword1', '123-456-7890', 30, NOW()),
('Bob', 'Johnson', 'bob@example.com', 'hashedpassword2', '234-567-8901', 28, NOW());

-- CART
INSERT INTO Cart (user_id, total_amount, taxes, shipping, discount_code, created_date)
VALUES 
(1, 29.99, 2.99, 0.00, 'DISCOUNT10', NOW()),
(2, 49.99, 3.99, 5.00, NULL, NOW());

-- PAYMENTS
INSERT INTO Payments (placeholder_name, type, quantity, cvc, card_number, expiration_date, payment_plan)
VALUES 
('Alice Card', 'VISA', 1, '123', '4111111111111111', '2026-08-01', 'Monthly'),
('Bob Card', 'MASTERCARD', 1, '456', '5500000000000004', '2025-12-01', 'Annual');

-- PRODUCTS
INSERT INTO Products (plan_id, name, type, category, price, payment_date, rating, release_date, created_date)
VALUES 
(NULL, 'Inception', 'Movie', 'Sci-Fi', 9.99, '2025-05-01', 4.8, '2010-07-16', NOW()),
(NULL, 'Netflix', 'Streaming Service', 'Entertainment', 19.99, '2025-05-10', NULL, NULL, NOW());

-- PLANS
INSERT INTO Plans (type, plan_term, product_id, price, description, created_date)
VALUES 
('Standard', 'Monthly', 1, 9.99, 'Monthly access to one movie', NOW()),
('Lvl 1', 'Monthly', 2, 19.99, 'Basic streaming access', NOW());

-- ITEMS
INSERT INTO Items (cart_id, product_id, created_date)
VALUES 
(1, 1, NOW()),
(2, 2, NOW());
