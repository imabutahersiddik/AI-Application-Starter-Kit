// src/chatbot/chatbotService.js
const client = require('../utils/db');

async function getResponse(userInput) {
    const query = `
        SELECT response 
        FROM chatbot_responses 
        WHERE input_vector <=> (SELECT vector FROM pgvector.embed($1)) 
        LIMIT 1
    `;
    const res = await client.query(query, [userInput]);
    return res.rows[0] ? res.rows[0].response : "I'm not sure how to respond.";
}

module.exports = { getResponse };