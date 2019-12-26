import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setRewards } from '../actions';
import { rewardsRef } from '../firebase'; 
import RewardItem  from './RewardItem';

class RewardList extends Component {
    componentDidMount() {
        rewardsRef.on("value" , snap => {
            let rewards = [];
            snap.forEach( reward => {
                const { rewardName, points } = reward.val();
                const serverKey = reward.key;
                rewards.push({rewardName, points, serverKey});
            })

            console.log('rewards', rewards);
            this.props.setRewards(rewards);
        })
    }

    render() {
        console.log('this.props.rewards', this.props.rewards);
        
        return (
            <div>
                {
                this.props.rewards.map((reward, index) => {
                   return ( 
                    <RewardItem key={index} reward={reward}/>
                    )
                } )
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { rewards } = state;

    return {
        rewards
    }
}

export default connect(mapStateToProps,{setRewards})(RewardList);
