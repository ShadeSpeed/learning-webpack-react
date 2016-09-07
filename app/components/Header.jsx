import React from 'react';
import MainStore from '../stores/MainStore.js';

const propTypes = { title: React.PropTypes.string };

export default class Header extends React.Component {

  render() {

    return (
        <div id="header">
           <h1>{ this.props.title }</h1>
        </div>
    )
  }
}

Header.propTypes = propTypes;
