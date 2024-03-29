import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Landing from './landing';
import Loader from '../../shared/loader';
import { data } from '../../shared/fetch';
import '../../styles/home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InstallButton from './install-btn';
import Footer from '../../shared/footer';
import Search from '../../shared/search';
const ReceipeList = React.lazy(() => import('../../shared/receipeList'));

const result = data();

const Home = () => {
  const [receipeData, setReceipeData] = useState(null);
  useEffect(() => {
    result.allReceipe.then(data => {
      setReceipeData(data);
    })
  }, []);

  if (!receipeData) {
    return (
      <div>
        <Loader />
      </div>
    )
  }
  return (
    <div className="contain">
      <main>
        <div className="landing-page">
          <Landing />
          <header className="landing-page-content">
            <h2>Put Your New Kitchen Appliances to Work</h2>
            <p>How many times have you jotted down a recipe on a slip of paper, only to lose it when you actually need it? When your cookbook is stuffed with tons of sticky notes, loose-leaf papers,its disorganization can drive you nuts.With recipes home app you do not need all that.</p>
          </header>
        </div>
        <InstallButton />
        <section>
          <h2>top recipes</h2>
          <Search recipes = {receipeData} />
          <ReceipeList items={receipeData.slice(0, 3)} />
          <div className="btn-case">
            <Link to={'/gallery'} className="link">
              <button type="button" className="show-more">
                Show all <FontAwesomeIcon
                  icon="arrow-alt-circle-right"
                  color="#ffdd4b3"
                />
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer type={'dark'} />
    </div>
  );
}


export default Home;

