import React from 'react'

const Description = () => {

    return (
      <div className="description-items-container">
        <div className="description-item">
              <i className="material-icons md-48">lightbulb_outline</i>
              <h3>Create a Goal</h3>
              <p>The first step to creating a new habit is to set a goal.</p>
        </div>
        <div className="description-item">
          <i className="material-icons md-48">alarm</i>
          <h3>Schedule a Reminder</h3>
          <p>Add a reminder to your Apple, Google, Outlook, or Yahoo calendar.</p>
        </div>
        <div className="description-item">
          <i className="material-icons md-48">thumb_up</i>
          <h3>Earn Stickers</h3>
          <p>Complete your goal and earn a fun 'sticker' gif as a reward!</p>
        </div>
      </div>
    )
}


export default Description;
