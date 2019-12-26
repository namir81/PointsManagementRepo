import { SET_REWARDS } from '../constants';

export function setRewards(rewards) {
    const action = {
        type: SET_REWARDS,
        rewards,
    }

    return action;
}