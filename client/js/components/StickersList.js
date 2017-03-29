import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions/actions';

// Stateless component example
class StickersList extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let randomize25 = Math.floor(Math.random()*25);
        let stickersArray = this.props.stickers.stickers;
        // console.log('sticker obj: ', stickersArray[randomize25])
        // let sticker = stickersArray.length <= 1 ? "" : stickersArray[randomize25].sticker

        let earnedStickers = stickersArray.length <= 1 ? "Loading..." : stickersArray.map((sticker, idx) => {
            // console.log('earned?', sticker)
    //   const randomize = Math.floor(Math.random()*4);
          if(sticker.earned == true){
            return (
                <div key={i}>
                    <img className='earned-sticker' src={sticker} />
                </div>
           )}
        })

          return (
              <div>
                  STICKERS!
                  {earnedStickers}
              </div>
          );

        }
}

const mapStateToProps = (state, props) => ({stickers: state.stickers})

export default connect(mapStateToProps)(StickersList);
//
