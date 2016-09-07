'use strict'

import Reflux from 'reflux';
import Actions from '../actions/actions.js';

const MainStore = Reflux.createStore({

  listenables: Actions,

  init() {
    this.state = {
      title: 'Learning to React',
      menuItems: [
        {
          key: 0,
          name: 'Home',
          href: '/'
        },
        {
          key: 1,
          name: 'Docs',
          href: '/Docs'
        },
        {
          key: 2,
          name: 'About',
          href: '/About'
        },
        {
          key: 3,
          name: 'Help',
          href: '/Help'
        }
      ],
      tiles: [
        {
          id: 0,
          title: 'Example Tile',
          description: 'An example tile!',
          imageUrl: '',
          price: 3.25,
        },
        {
          id: 1,
          title: 'Example Tile',
          description: 'An example tile!',
          imageUrl: '',
          price: 3.25,
        },
        {
          id: 2,
          title: 'Example Tile',
          description: 'An example tile!',
          imageUrl: '',
          price: 3.25,
        },
        {
          id: 3,
          title: 'Example Tile',
          description: 'An example tile!',
          imageUrl: '',
          price: 3.25,
        },
        {
          id: 4,
          title: 'Example Tile',
          description: 'An example tile!',
          imageUrl: '',
          price: 3.25,
        },
        {
          id: 5,
          title: 'Example Tile',
          description: 'An example tile!',
          imageUrl: '',
          price: 3.25,
        },
        {
          id: 6,
          title: 'Example Tile',
          description: 'An example tile!',
          imageUrl: '',
          price: 3.25,
        }
      ]
    }
  },

  getState() {
    return this.state;
  },

  onTitleChange(titleText) {
    this.state.title = titleText;
    console.log(this.state);
    this.trigger(this.state);
  }
});

export default MainStore;
