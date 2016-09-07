import React from 'react';
import MainStore from '../stores/MainStore.js';
import Header from './Header.jsx';
import Menu from './Menu.jsx';
import Form from './Form.jsx';
import Tiles from './Tiles.jsx';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = MainStore.getState();
  }

  componentDidMount(){
    MainStore.listen((newState) => {
      this.setState(newState);
    })
  }

  render() {
    return (
      <div>
        <Header title={ this.state.title } />
        <Menu menuItems={ this.state.menuItems } />
        <Form titles={ this.state.title } />
        <Tiles tiles={this.state.tiles} />
      </div>
    )
  }
}
