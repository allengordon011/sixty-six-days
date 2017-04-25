import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/actions';

class StickersList extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.dispatch(actions.fetchStickers())
    }
    render() {
        console.log('GOALS STICKERS: ', this.props.goals.goals)
        // let randomize25 = Math.floor(Math.random() * 25);
        let goalsArray = this.props.goals.goals;
        let count = 0;
        let earnedStickers = goalsArray.length <= 1
            ? "Loading..."
            : goalsArray.map((goal, i) => {
                console.log('STICKER? ', goal.sticker)
                if (goal.completed == true) {
                    count++;
                    return (
                        <div key={i}>
                            <img className='earned-sticker' src={goal.sticker}/>
                        </div>
                    )
                }
            })
            console.log('COUNT: ', count)

            if(count > 0){
        return (
            <div>
                <h3 className="stickers-earned">Stickers Earned</h3>
                {earnedStickers}
            </div>
        );
    } else { return (
        <div>
            <h3 className="stickers-earned">Stickers Earned</h3>
            <p className="stickers-earned-subtitle">Complete your goals to earn rewards!</p>
        </div>
            )
        }
    }
}

const mapStateToProps = (state, props) => ({goals: state.goals, stickers: state.stickers})

export default connect(mapStateToProps)(StickersList);
