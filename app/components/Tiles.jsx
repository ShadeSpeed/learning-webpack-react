import React from 'react';
import Actions from '../actions/actions.js';

const propTypes = { title: React.PropTypes.string };

export default class Tiles extends React.Component {

    constructor(props) {
        super(props);
        this.displayTile = this.displayTile.bind(this);
    }

    displayTile(event) {
        console.log(event.target);
        event.preventDefault();
        alert(event.target.href);
    }

    render() {
        var tilesHtml = this.props.tiles.map((tile) => {
            return (
                <div className="tile" key={tile.id} onClickCapture={this.showLink} >
                    <img src={tile.imageUrl}/>
                    <div className="info">
                        <h2>{tile.title}</h2>
                        <p>{tile.description}</p>
                    </div>
                </div>
            )
        })
        return (
            <div id="tilesContainer">
                {tilesHtml}
            </div>
        )
    }
}

Tiles.propTypes = propTypes;