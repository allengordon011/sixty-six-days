import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import StickersList from './StickersList';

class Stickers extends React.Component {
    constructor(props) {
        super(props);
    }
    // componentWillMount(){
    //     this.props.dispatch(actions.fetchStickers())
    // }
  render() {

    return (
      <div className="sticker-container">
          This is where stickers go!
          <StickersList />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({stickers: state.stickers})

export default connect(mapStateToProps)(Stickers);
