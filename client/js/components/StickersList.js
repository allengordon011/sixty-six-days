import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/actions';
import HideStickersButton from './Button-HideStickers';
import ShowStickersButton from './Button-ShowStickers';

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
                if (goal.completed == true) {
                    count++;
                    return (
                        <div key={i}>
                            <img className='earned-sticker' src={goal.sticker}/>
                        </div>
                    )
                }
            })
        if (this.props.stickers.hidden === false) {
            if (count > 0) {
                return (
                    <div className="stickers">
                        <HideStickersButton />
                        {earnedStickers}
                    </div>
                );
            } else {
                return (
                    <div className="stickers">
                        <ShowStickersButton />
                        <p className="stickers-earned-subtitle">Complete your goals to earn rewards!</p>
                    </div>
                )
            }
        } else {
            return (
                <div className="stickers">
                    <ShowStickersButton />
                </div>
            )
        }

    }
}

const mapStateToProps = (state, props) => ({goals: state.goals, stickers: state.stickers})

export default connect(mapStateToProps)(StickersList);
