import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import RaisedButton from 'material-ui/RaisedButton';

class StickersButtons extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickEvent = this.handleClickEvent.bind(this);
        this.handleHideClickEvent = this.handleHideClickEvent.bind(this);

    }
    handleClickEvent() {
        this.props.dispatch(actions.showStickers())
        console.log('fired off showStickers')
    }
    handleHideClickEvent() {
        this.props.dispatch(actions.hideStickers())
        console.log('fired off hideStickers')

    }

  render() {
        return (
            <div className="view-saved-sticker-container">
                <RaisedButton label="View Stickers" className="view-saved-stickers-button"  onClick={this.handleClickEvent} />
                <RaisedButton label="Hide Stickers" className="hide-saved-stickers-button"  onClick={this.handleHideClickEvent} />
            </div>
        )
    }
}

// const mapStateToProps = (state, props) => ({savedRecipes: state.savedRecipes})

export default connect()(StickersButtons);
