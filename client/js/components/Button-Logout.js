import React from 'react';

function Logout() {

    function handleClick() {
        fetch('/api/logout', {
            method: 'get'
        })
        console.log('fired off loginUser event')
    }
    return (
        <div className="logout-container">
            <button className="logout-button" onClick={this.handleClick}>Logout</button>
        </div>
    )
}
