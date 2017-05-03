import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import FlatButton from 'material-ui/FlatButton';

class ShowStickersButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickEvent = this.handleClickEvent.bind(this);
    }
    handleClickEvent() {
        this.props.dispatch(actions.showStickers());
    }

  render() {
        return (
            <div className="view-saved-sticker-container">
                <FlatButton label="View Stickers" className="view-saved-stickers-button" primary={true} style={{ margin: '0 5px', verticalAlign: 'middle' }} onClick={this.handleClickEvent} />
            </div>
        )
    }
}

// const mapStateToProps = (state, props) => ({savedRecipes: state.savedRecipes})

export default connect()(ShowStickersButton);
