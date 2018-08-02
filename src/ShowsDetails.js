import React from  'react';

function ShowsDetails(props) {
  return(
    <div className='wrapper'>
      <div className="header">
        <h1>{props.name}</h1>
      </div>
      <div className="main"><span dangerouslySetInnerHTML={{__html: props.description}} /></div>
      <div className="aside">
        <img src={props.image} alt='TV-Show' width='280' height='350' />
        </div>
    </div>
  )
};

export default ShowsDetails;