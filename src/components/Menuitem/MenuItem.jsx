import { render } from '@testing-library/react';
import React from 'react';
import { images } from '../../constants';

import './MenuItem.css';


const MenuItem = ({title, price, tags}) => {

  const [starToggled, setStarToggled] = React.useState(false);

  const StarType = () => {

    starToggled ? setStarToggled(false) : setStarToggled(true);
    

  }
  return (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{color: '#DCCA87'}}>{title}&nbsp;
          <img className="app__menuitem-img" src= {starToggled ? images.star : images.starwhite} id="star" alt="star" onClick={StarType}/>                  
        </p>
      </div>

      <div className="app__menuitem-dash"/>

      <div className="app__menuitem-price">
        <p className="p__cormorant" style={{color: '#DCCA87'}}>{price}</p>
      </div>
    </div>
    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{color: '#AAA'}}>{tags}</p>
    </div>
  </div>
  );
};

export default MenuItem;
