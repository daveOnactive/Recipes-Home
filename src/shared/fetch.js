export const data = () => {
  const allData = getAllData();
  return {
    allReceipe: allData
  };
};

export const singleData = (id) => {
  return getOneData(id);
};

const getAllData = async () => {
  const api = 'http://localhost:4000/api/receipe';
  try {
    const response = await fetch(api);
    const data = await response.json();
    return data;
  } catch(err) {
    console.log(err);
  }
  
}

const getOneData = async (id) => {
  const api = 'http://localhost:4000/api/receipe';
  try {
    const response = await fetch(api);
    const data = await response.json();
    return data;
  } catch(err) {

  }
}

