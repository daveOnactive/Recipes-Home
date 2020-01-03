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
  const api = 'https://recipes-homes-api.herokuapp.com/api/recipe';
  try {
    const response = await fetch(api);
    const data = await response.json();
    return data;
  } catch(err) {
    console.log(err);
  }
  
}

const getOneData = async (id) => {
  const api = `http://localhost:4000/api/receipe/${id}`;
  try {
    const response = await fetch(api);
    const data = await response.json();
    return data;
  } catch(err) {
    console.error(err);
  }
}

