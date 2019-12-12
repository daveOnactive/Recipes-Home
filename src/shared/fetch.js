import React, {useState, useEffect} from 'react';

const fetchData = async () => {
  const response = await fetch();
  const data = await response.json();

  return data;
}

export default fetchData;