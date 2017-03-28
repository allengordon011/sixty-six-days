import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import StickersList from './StickersList';


const feedback = [
    'Way to go!',
    'Keep up the good work!',
    'That\'s the way to do it!',
    'Super job!'

]


class Stickers extends React.Component {
    constructor(props) {
        super(props);
    }
    // componentWillMount(){
    //     this.props.dispatch(actions.fetchStickers())
    // }
  render() {
      console.log('Sticker props', this.props)
    //   const completedSticker =
        //    this.props.stickers.map((sticker, i) => (console.log(sticker)));

    //   (<div key={i}>{sticker}</div>
    // ));

    //       console.log('goal completed?: ', goal.completed))}


    return (
      <div className="sticker-container">This is where stickers go!
          <StickersList />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({stickers: state.stickers})

export default connect(mapStateToProps)(Stickers);
