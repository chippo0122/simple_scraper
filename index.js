// web scraper
const express = require('express');
const {scraper} = require('./scraper');
const {port} = require('./setup.json');

const app = express();
const PORT = port;

scraper()

app.listen(PORT, () => {
    console.log(`Scraper is running on http://localhost:${port}`);
})