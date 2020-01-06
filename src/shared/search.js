import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import '../styles/form.scss';

const Search = ({recipes}) => {
  const [searchResult, setSearchResult] = useState([]);
  const [input, setInput] = useState('');
  const [hide, setHide] = useState(true);
  const searchInput = e => {
    setInput(e.target.value);
  };

  const cancelSearch = () => {
    setSearchResult([]);
    setHide(true)
  };

  const matchInput = e => {
    if(input !== '') {
      e.preventDefault();
      let result = [];
      recipes.filter(items => {
        let title = items.title.toLowerCase();
        let compare = input.toLowerCase();
        if(title.includes(compare)) {
          result.push(items);
        }
        return true;
      });
      setHide(false)
      setSearchResult(result);
      setInput('');
    }
  };

  return (
    <div style={{position: "relative"}}>
        <form onSubmit={matchInput}>
          <div className="form-container">
            <div className="input">
              <input type="text" min="3" required placeholder="Try 'fried rice'" name="search" value={input} onChange={searchInput}  />
            </div>
            <div className="search-btn" onClick={matchInput}>
              <FontAwesomeIcon
                icon="search"
                color="#fcc395"
              />
            </div>
          </div>
        </form>
        <div className={hide ? 'hide': 'result'}>
          <header>
            <button className="cancel" onClick={cancelSearch} type="button">
              <FontAwesomeIcon
                icon="times-circle"
                color="#fcc395"
              />
            </button>
          </header>
          <ul>
            {searchResult.map((item, index) => (
              <Link to={`/recipe/${item.title}`} tile={item.tile}className="linka" key={index}>
                <li>
                  <div className="s-img">
                    <img src={item.imageUrl} alt="search" />
                  </div>
                  <p>{item.title}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default Search;