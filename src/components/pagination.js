import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/gallery.scss';

const Pagination = ({ recipePerPage, totalRecipes, paginate, currentPage }) => {
  const [showButton, setShowButton] = useState(currentPage);
  const pageNumbers = Math.ceil(totalRecipes / recipePerPage);

  const Page = (() => {
    let pageNum = pageNumbers;
    let current = currentPage;
    function increase() {
      if (current < pageNum) {
        current += 1;
        paginate(current);
        setShowButton(current);
      }
    };

    function decrease() {
      if (current > 0) {
        current -= 1;
        paginate(current);
        setShowButton(current);
      }
    };

    return {
      next: increase,
      prev: decrease
    }

  })();

  const nextPage = () => {
    Page.next();
  };

  const prevPage = () => {
    Page.prev();
  };

  return (
    <div className="pagination">
      <button onClick={prevPage} className={showButton === 1 ? 'hide-btn' : 'show-btn'}>
        <span>
          <FontAwesomeIcon
            icon="arrow-alt-circle-left"
          />
        </span>
        prev
      </button>
      <div className="page-count">
        <span>{`${currentPage} of ${[pageNumbers]}`}</span>
      </div>
      <button onClick={nextPage} className={showButton === pageNumbers ? 'hide-btn' : 'show-btn'}>
        next
      <span>
          <FontAwesomeIcon
            icon="arrow-alt-circle-right"
          />
        </span>
      </button>
    </div>
  );
};

export default Pagination;