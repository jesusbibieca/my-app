import React, { Component } from  'react';

class ShowsCard extends Component {
  state = {
    shows: 
      [{
        "id": 35624,
        "name": "The Flash",
        "permalink": "the-flash",
        "start_date": "2014-10-07",
        "end_date": null,
        "country": "US",
        "network": "The CW",
        "status": "Running",
        "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/35624.jpg"
    },
    {
        "id": 23455,
        "name": "Game of Thrones",
        "permalink": "game-of-thrones",
        "start_date": "2011-04-17",
        "end_date": null,
        "country": "US",
        "network": "HBO",
        "status": "Running",
        "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/23455.jpg"
    },
    {
        "id": 29560,
        "name": "Arrow",
        "permalink": "arrow",
        "start_date": "2012-10-10",
        "end_date": null,
        "country": "US",
        "network": "The CW",
        "status": "Running",
        "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/29560.jpg"
    },
    {
        "id": 43234,
        "name": "Supergirl",
        "permalink": "supergirl",
        "start_date": "2015-10-26",
        "end_date": null,
        "country": "US",
        "network": "The CW",
        "status": "Running",
        "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/43234.jpg"
    }]
  } 
  
  render() {
    return(
      <div className='shows-card'>
        <a href={'https://www.google.com'}>
          <img className='shows-element' src={'https://static.episodate.com/images/tv-show/thumbnail/35624.jpg'} />
          <br/>
          <div className='shows-title' >The Flash (Running)</div>
        </a>
      </div>
    )
  }
};

export default ShowsCard;