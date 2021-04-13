import React from 'react';

import CardListItem from '../card-list-item';

import './card-list.css';

const CardList = ({cardList, setCardActive}) => {
  return (
    <div className="card-list">
      <div className="row pb-5 mb-4 justify-content-center">
        {cardList.map((card, index) => (
          <div key={index} className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            {<CardListItem {...card}
                           setCardActive={setCardActive}/>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
