import React from  'react';

function ShowsCard(props) {
  return(
    <div className='shows-card brightness'>
      <a href={props.URL} target='_blank'>
        <img className='shows-element' src={props.image} width='250' height='300' alt='TV-Show cover' />
        <br/>
        <div className='shows-title' >{props.title} ({props.status})</div>
      </a>
    </div>
  )
};

export default ShowsCard;