const express = require('express');
const jdenticon = require('jdenticon');
const cors = require('cors');

const app = express();
app.use(cors());

const port = process.env.SERVER_PORT || 3002;

// TODO add test for /api/cards
app.get('/api/cards', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  // TODO names should come from a random list
  const uniqueNames = ['anita', 'benny', 'cecilie'];
  const doubleNames = uniqueNames.concat(uniqueNames);
  const names = doubleNames; //.sort((a, b) => 0.5 - Math.random()); // TODO randomise names

  console.log(names);
  const host = 'http://localhost:3002'; // TODO move to global this
  try {
    res.json({
      total: names.length,
      cards: [
        {
          url: `${host}/png/${names[0]}/200`,
          name: names[0],
        },
        {
          url: `${host}/png/${names[1]}/200`,
          name: names[1],
        },
        {
          url: `${host}/png/${names[2]}/200`,
          name: names[2],
        },
        {
          url: `${host}/png/${names[3]}/200`,
          name: names[3],
        },
        {
          url: `${host}/png/${names[4]}/200`,
          name: names[4],
        },
        {
          url: `${host}/png/${names[5]}/200`,
          name: names[5],
        },
      ],
    });
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
