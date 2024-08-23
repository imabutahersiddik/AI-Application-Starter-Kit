// src/semanticSearch/searchService.js
const client = require('../utils/db');

async function semanticSearch(query) {
    const searchQuery = `
        SELECT * 
        FROM documents 
        WHERE vector <=> (SELECT vector FROM pgvector.embed($1)) 
        ORDER BY vector <=> (SELECT vector FROM pgvector.embed($1)) 
        LIMIT 5
    `;
    const res = await client.query(searchQuery, [query]);
    return res.rows;
}

module.exports = { semanticSearch };