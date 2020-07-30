import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';

const App = () => {
  const [lat, errorMessage] = useLocation();

  let content;
  if (errorMessage) {
    content = <div>Error : {errorMessage}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spinner message='Please accept location request' />;
  }

  return <div className='border red'>{content}</div>;
};

// class App extends Component {
//   state = { lat: null, errorMessage: '' };

//   componentDidMount() {
//     this.setState({ lon: null });
//   }

//   renderContent() {
//     console.log(this.state);
//     if (this.state.errorMessage && !this.state.lat) {
//       return <div>Error : {this.state.errorMessage}</div>;
//     }
//     if (!this.state.errorMessage && this.state.lat) {
//       return <SeasonDisplay lat={this.state.lat} />;
//     }

//     return <Spinner message='Please accept location request' />;
//   }

//   render() {
//     return <div>{this.renderContent()}</div>;
//   }
// }

ReactDOM.render(<App />, document.querySelector('#root'), () => {
  console.log('rendered');
});
