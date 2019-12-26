import React , { Component } from 'react';

import { rewardsRef } from '../firebase'; 


class RewardItem extends Component {
    
    handleDeleteReward() {
        let { serverKey } = this.props.reward;
        rewardsRef.child(serverKey).remove();
    }

    render() {
        let { rewardName, points, serverKey } = this.props.reward;

        return (
            <div style={{margin: '5px'}}>
                <strong>{rewardName}</strong>
                <span style={{marginRight: '5px'}}> <em>{points}</em></span>
                <button
                    className="btn btn-sm btn-danger"
                    onClick={() => this.handleDeleteReward()}
                >
                Delete
                </button>
            </div>
        )
    }
}

export default RewardItem;
