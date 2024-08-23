// src/semanticSearch/index.js
const express = require('express');
const bodyParser = require('body-parser');
const { semanticSearch } = require('./searchService');

const router = express.Router();

router.use(bodyParser.json());

router.post('/', async (req, res) => {
    try {
        const results = await semanticSearch(req.body.query);
        res.json({ results });
    } catch (error) {
        console.error('Error in /search endpoint:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;