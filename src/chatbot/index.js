// src/chatbot/index.js
const express = require('express');
const bodyParser = require('body-parser');
const { getResponse } = require('./chatbotService');
const semanticSearchRouter = require('../semanticSearch/index'); // Import the semantic search router

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/chat', async (req, res) => {
    try {
        const response = await getResponse(req.body.input);
        res.json({ response });
    } catch (error) {
        console.error('Error in /chat endpoint:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Use the semantic search router
app.use('/search', semanticSearchRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});