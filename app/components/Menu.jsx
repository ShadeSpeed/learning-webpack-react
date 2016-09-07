import React from 'react';
import Actions from '../actions/actions.js';

const propTypes = { title: React.PropTypes.string };

export default class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.showLink = this.showLink.bind(this);
    }

    showLink(event) {
        console.log(event.target);
        event.preventDefault();
        alert(event.target.href);
    }

    render() {
        var menuHtml = this.props.menuItems.map((menuItem) => {
            return (
                <div className="menuButton" key={menuItem.key} href={menuItem.href} onClickCapture={this.showLink} >{menuItem.name}</div>
            )
        })
        return (
            <div className="menu">
                {menuHtml}
            </div>
        )
    }
}

Menu.propTypes = propTypes;