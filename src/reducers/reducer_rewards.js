import { SET_REWARDS } from '../constants';

const reward = (action) => {
    return {
        rewardName: action.rewardName,
        points: action.points
    }
}

export default (state = [], action) => {
    let rewards = null;
    switch (action.type) {
        case SET_REWARDS:
           // debugger;
           //rewards = [...state, reward(action)];
           const { rewards } = action;
           console.log('rewards as state', rewards);
           return rewards;
        default:
            return state;
    }
}