const test = require('node:test');
const assert = require('node:assert');
const populateEndpoint = require('./populateEndpoint.js');

test('returns correct value for property: total', (t) => {
  const names = ['anita', 'benny', 'cecilie', 'anita', 'benny', 'cecilie'];
  const result = populateEndpoint(names);

  assert.equal(result.total, names.length);
});

test('returns correct length of property: items', (t) => {
  const names = ['anita', 'benny', 'cecilie', 'anita', 'benny', 'cecilie'];
  const result = populateEndpoint(names);

  assert.equal(result.items.length, names.length);
});
