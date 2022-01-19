import React from 'react';
import './App.css';

class Image extends React.Component {
  render() {
    return <img className='catinho' src={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default Image;