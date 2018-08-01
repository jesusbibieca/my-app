import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ShowsCard from './ShowsCard';
import ShowsDetails from './ShowsDetails';

class App extends Component {
  state = {
    shows: [],
    error: null,
    isLoaded: false,
  };

  // componentDidMount() {
  //   fetch('https://www.episodate.com/api/most-popular?page=1')
  //     .then(res => res.json())
  //     .then(result => {
  //       this.setState({
  //         isLoaded: true,
  //         shows: result.tv_shows
  //       });
  //     },
  //     error => {
  //       this.setState({
  //         isLoaded: true,
  //         error
  //       });
  //     }
  //   )
  // }

  render() {
    let _URL = 'https://www.episodate.com/api/show-details?q='; // to query the content of the detailsection
    return(
      <div>
       <Route exact path='/' render={ () => {
         return(
           <div className='container'>
             {this.state.shows.map(show => (
               <ShowsCard
                 URL={show.permalink}
                 image={show.image_thumbnail_path}
                 title={show.name}
                 status={show.status}
               />
           ))}
           </div>
         )
       }} />
       <Route path='/details' component={ ShowsDetails } />
      </div>
    )}    
};

export default App;
