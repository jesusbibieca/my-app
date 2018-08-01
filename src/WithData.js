import React, { Component } from 'react';

// const WithData = WrappedComponent => {
//   class HOC extends Component {
//     state = {
//       data: null
//     }   
//   }
//   return HOC;
// }

function WithData(WrappedComponent, dataURL) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
        error: null,
        isLoaded: false,
      };
    }

    componentDidMount() {
      fetch(dataURL)
        .then(res => res.json())
        .then(result => {
          this.setState({
            isLoaded: true,
            data: result.tv_shows ? result.tv_shows : result
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
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}

export default WithData;