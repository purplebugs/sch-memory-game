const express = require('express');
const jdenticon = require('jdenticon');
const cors = require('cors');

const populateEndpoint = require('./src/functions/populateEndpoint');

const app = express();
app.use(cors());

const port = process.env.SERVER_PORT || 3002;
globalThis.basePath = `http://localhost:${port}`;

app.get('/api/cards', (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const uniqueNames = ['anita', 'benny', 'cecilie', 'deedee'];
  const doubleNames = uniqueNames.concat(uniqueNames);
  const names = doubleNames.sort((a, b) => 0.5 - Math.random()); // TODO randomise names
  console.log('names', names);

  try {
    res.json(populateEndpoint(names));
  } catch (error) {
    console.error(error);
    return new Error('🧨 API: Could not get cards');
  }
});

// Example: 'GET /svg/billy/300' will return a 300x300 svg for the identifier 'billy'
app.get('/svg/:identifier/:size', (req, res) => {
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(jdenticon.toSvg(req.params.identifier, Number.parseInt(req.params.size, 10)));
});

// Example: 'GET /png/billy/300' will return a 300x300 png for the identifier 'billy'
app.get('/png/:identifier/:size', (req, res) => {
  res.setHeader('Content-Type', 'image/png');
  res.send(jdenticon.toPng(req.params.identifier, Number.parseInt(req.params.size, 10)));
});

app.listen(port, () => console.log(`Image server running on port ${port}`));
