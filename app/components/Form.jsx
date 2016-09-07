import React from 'react';
import MainStore from '../stores/MainStore.js';
import Actions from '../actions/actions.js';

const propTypes = { title: React.PropTypes.string };

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = MainStore.getState();
        this.changeVal = this.changeVal.bind(this);
    }

    changeVal(event) {
        Actions.titleChange(event.target.value);
    }

    render() {
        return (
            <div id="form">
                <h2>Create Tile</h2>
                <input placeholder="Tile Title"/>
                <textarea placeholder="Description"/>
                <input type="submit" value="Create"/>
                <input id="setTitle" defaultValue={this.props.title} onChange={this.changeVal}/>
            </div>
        )
    }
}

Form.propTypes = propTypes;