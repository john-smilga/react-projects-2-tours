import React, { useState } from 'react';

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <div className='tour-info'>
        <span className='tour-price'>${price}</span>
        <h4>{name}</h4>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>
          not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
