// src/utils/db.js
const { Client } = require('pg');
const config = require('../../config/config');

const client = new Client({
    connectionString: config.DATABASE_URL,
});

client.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Connection error', err.stack));

module.exports = client;