import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions/actions';

// Stateless component example
class StickersList extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let stickersArray = this.props.stickers.stickers;
        let goalsArray = this.props.goals.goals;
        // let stickers = stickersArray.map(sticker => console.log('stickers map: ', sticker));
        const randomize25 = Math.floor(Math.random()*25);



  //       let stickers = goalsArray.map((goal, i) => {
  // //       const randomize4 = Math.floor(Math.random()*4);
  //         if(goal.completed === true){
  //             let sticker = stickersArray[randomize25]
  //             return (
  //             <div key={i}>
  //               <img className='sticker' src={sticker} />
  //               {/* <p className="quote">{feedback[randomize25]}</p> */}
  //             </div>
  //           )
  //
  //         }
    // })
        // const randomize4 = Math.floor(Math.random()*4);
      return (
          <div>
              STICKERS!
        </div>
            );

    //   return (
    //         <div>THIS IS A LIST
    //             {/* {stickers} */}
    //         </div>
    //         )
        }
}

const mapStateToProps = (state, props) => ({stickers: state.stickers, goals: state.goals})

export default connect(mapStateToProps)(StickersList);
//
