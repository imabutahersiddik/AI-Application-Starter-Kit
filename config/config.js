// config/config.js
require('dotenv').config();

const config = {
    DATABASE_URL: process.env.DATABASE_URL || 'postgres://user:password@localhost:5432/mydb',
};

module.exports = config;