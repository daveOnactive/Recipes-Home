import React from 'react';

const Pagination = ({recipePerPage, totalRecipes, paginate}) => {
  const pageNumbers = Math.ceil(totalRecipes / recipePerPage);
  console.log(pageNumbers);

  // for(let  i = 1; i <= Math.ceil(totalRecipes / recipePerPage); i++){
  //   pageNumbers.push(i);
  // }
  const nextPage = () => {
    paginate(2);
  }
  return (
    <div>
      <button>
        prev
      </button>
      <button onClick={nextPage}>
        next
      </button>
    </div>
  );
};

export default Pagination;