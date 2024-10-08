module.exports = populateEndpoint = (names) => {
  return {
    total: names.length,
    totalPairs: names.length / 2,
    items: [
      {
        url: `${globalThis.basePath}/png/${names[0]}/200`,
        name: names[0],
      },
      {
        url: `${globalThis.basePath}/png/${names[1]}/200`,
        name: names[1],
      },
      {
        url: `${globalThis.basePath}/png/${names[2]}/200`,
        name: names[2],
      },
      {
        url: `${globalThis.basePath}/png/${names[3]}/200`,
        name: names[3],
      },
      {
        url: `${globalThis.basePath}/png/${names[4]}/200`,
        name: names[4],
      },
      {
        url: `${globalThis.basePath}/png/${names[5]}/200`,
        name: names[5],
      },
    ],
  };
};
