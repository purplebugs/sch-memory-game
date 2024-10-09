export const fetchData = async () => {
  const res = await fetch('http://localhost:3002/api/cards');
  const data = await res.json();
  return data;
};
