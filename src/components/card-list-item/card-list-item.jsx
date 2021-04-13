import React from 'react';

import './card-list-item.css';

const CardListItem = ({image, title, text, background, active, setCardActive}) => {

  const activeClasses = active ? `card-list-item-active card-list-item-active-${title.toLowerCase()}` : '';

  const selectItem = () => {
    setCardActive(title);
  }

  return (
    <div className={`card-list-item card rounded shadow-sm border-0 ${activeClasses}`} onClick={selectItem}>
      <div className="card-body p-0">
        <div className={`px-5 py-4 text-center card-img-top} ${background}`}>
          <img src={image} alt="card list item" width="100" className="rounded-circle mb-2 img-thumbnail d-block mx-auto"/>
          <h4 className="text-white mb-0">{title}</h4>
        </div>
        <div className="p-4 d-flex justify-content-center bg-white text-dark">
          {text}
        </div>
      </div>
    </div>
  );
}

export default CardListItem;
