import React, { useState, useEffect } from 'react';
import Procedure from './procedure';
import { data } from '../../shared/fetch';
import '../../styles/recipe.scss';
import Ingredients from './ingredient';
import Facebook from 'react-sharingbuttons/dist/buttons/Facebook'
import Twitter from 'react-sharingbuttons/dist/buttons/Twitter'
import Loader from '../../shared/loader';
import 'react-sharingbuttons/dist/main.css';

const result = data();
const Recipe = ({ match }) => {
  const url = window.location.href;
  const [shareText, setShareText] = useState('');
  const [items, setItems] = useState();

  useEffect(() => {
    result.allReceipe.then(data => {
      getSpecificData(data, match.params.id);
    });
  }, []);

  const getSpecificData = (data, id) => {
    data.filter(item => {
      if (item.title === id) {
        setItems(item);
        setShareText(item.title);
      }

      return true;
    });
  };

  if (!items) {
    return (
      <div>
        <Loader />
      </div>
    )
  }

  return (
    <div className="recipe">
      <main>
        {
          <div key={items.id}>
            <section className="parallax" style={{
              backgroundImage: `url(${items.imageUrl})`
            }}>
              <header className="para-content">
                <h3>{items.title}</h3>
                <p>{items.description}</p>
              </header>
            </section>
            <section>
              <Ingredients ingredient={items.ingredient} />
            </section>
            <section>
              <Procedure
                beforeYouCook={items.beforeYouCook}
                cookingDirection={items.cookingDirections} />
            </section>
          </div>
        }
        <div className="social-btn">
          <p>Share on: </p>
          <Facebook url={url} />
          <Twitter url={url} shareText={`Check out how to prepare ${shareText}`} />
        </div>
      </main>
    </div>
  )
}


export default Recipe;