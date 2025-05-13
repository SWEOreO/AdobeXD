const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

// Serve local mockData.json
app.get('/patients', (req, res) => {
  fs.readFile('./mockData.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading mockData.json:', err);
      res.status(500).json({ error: 'Failed to load mock data' });
      return;
    }

    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
