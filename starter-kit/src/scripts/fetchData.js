export const fetchData = async () => {
  try {
    const res = await fetch('http://localhost:3002/api/cards');

    if (res.status != 200) {
      throw new Error('🧨 fetchData: Could not get data');
    }

    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
};
