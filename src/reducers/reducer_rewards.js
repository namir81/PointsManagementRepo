import { ADD_REWARD } from '../constants';

const reward = (action) => {
    return {
        rewardName: action.rewardName,
        points: action.points
    }
}

export default (state = [], action) => {
    let rewards = null;
    switch (action.type) {
        case ADD_REWARD:
           // debugger;
           rewards = [...state, reward(action)];
           console.log('rewards as state', rewards);

           return rewards;
        default:
            return state;
    }
}