import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import RaisedButton from 'material-ui/RaisedButton';

class LogoutButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.dispatch(actions.logoutUser());
    }
    render(){
        return (
            <div className="logout-container">
                <RaisedButton className="logout-button" onClick={this.handleClick}>Logout</RaisedButton>
            </div>
        )
    }
}

export default connect()(LogoutButton);
