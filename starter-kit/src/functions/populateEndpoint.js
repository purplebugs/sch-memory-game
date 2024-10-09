module.exports = populateEndpoint = (names) => {
  const items = [];

  names.forEach((element, i) => {
    items.push({
      url: `${globalThis.basePath}/png/${names[i]}/200`,
      name: names[i],
    });
  });

  return {
    total: names.length,
    totalPairs: names.length / 2,
    items: items,
  };
};
