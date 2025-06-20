const pool = require('../config/db');

const getProducts = async () => {
    const res = await pool.query('SELECT * FROM products');
    return res.rows;
}

const getMoviesProducts = async () => {
    const res = await pool.query("SELECT * FROM products AS p WHERE p.type = 'Movie'");
    return res.rows;
};

const getMoviesShows = async () => {
    const res = await pool.query("SELECT * FROM products AS p WHERE p.type = 'Streaming Service'");
    return res.rows;
};

//TODO: Fix details in body request for create product with required values . 
const createProduct = async (name) => {
    const res = await pool.query('INSERT INTO products (name) VALUES ($1) RETURNING *', [name]);
    return res.rows[0];
}

const getProductById = async (id) => {
    const res = await pool.query('SELECT * FROM products where id = $1 ', [id])
    return res.rows[0];
}

module.exports = {
    getProducts,
    createProduct,
    getMoviesProducts,
    getMoviesShows,
    getProductById
}