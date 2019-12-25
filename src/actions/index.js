import { ADD_REWARD } from '../constants';

export function addReward(rewardName, points) {
    const action = {
        type: ADD_REWARD,
        rewardName,
        points
    }

    return action;
}