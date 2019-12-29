import React, {createContext, useState} from 'react';
import { data, singleData } from './fetch';

export const receipeContext = createContext();

export const receipeProvider = props => {

  const [receipeList, setReceipeList] = useState([]);

  const getReceipe = (type, id) => {
    switch(type) {
      case 'all':
        const result = data();
        result.allReceipe.then(data => {
          setReceipeList(data);
        })
        return receipeList;
      case 'single':
        singleData(id).then(data => {
          console.log(data);
        })
        // return singleReceipe;
        break;
      default:
        return receipeList;
    }
    
  }

  return (
    <receipeContext.Provider value={[getReceipe]}>
      {props.children}
    </receipeContext.Provider>
  );
};