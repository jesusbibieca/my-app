import React, { Component } from  'react';
import ShowsDetails from './ShowsDetails';

class DetailPage extends Component {
  state = {
    data: {},
    isLoaded: false,
    error: null,
  }
  
  componentDidMount() {
    fetch(`https://www.episodate.com/api/show-details?q=${this.props.slug}`)
      .then(res => res.json())
      .then(result => {
        this.setState({
          data: result.tvShow,
          isLoaded: true,
        });
      },
      error => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    return(
      !this.state.isLoaded ? <div> Loading... </div> :
        <ShowsDetails
          name={this.state.data.name}
          description={this.state.data.description}
          image={this.state.data.image_thumbnail_path}
        />
    )
  }
};

export default DetailPage;