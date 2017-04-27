import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import FlatButton from 'material-ui/FlatButton';

class HideStickersButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleHideClickEvent = this.handleHideClickEvent.bind(this);

    }
    handleHideClickEvent() {
        this.props.dispatch(actions.hideStickers())
        console.log('fired off hideStickers')

    }

  render() {
        return (
            <div>
                <FlatButton label="Hide Stickers" className="hide-saved-stickers-button" primary={true} style={{ verticalAlign: 'middle' }} onClick={this.handleHideClickEvent} />
            </div>
        )
    }
}

// const mapStateToProps = (state, props) => ({savedRecipes: state.savedRecipes})

export default connect()(HideStickersButton);
