import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { firebaseApp } from '../firebase';
import { rewardsRef } from '../firebase'; 
import  { addReward} from '../actions';

class AddReward extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rewardName: '',
            points:10,
        }
    }

    handleRewardNameChange(event) {
        this.setState({rewardName: event.target.value});
        console.log(this.state);
    }

    addReward() {
        const { rewardName, points } = this.state;
        console.log(`addReward ${rewardName} ${points} `);
        this.props.addReward(rewardName, points);
        rewardsRef.push({rewardName, points})        
    }

    render() {
        return (
            <div>
                <h1>Add Reward</h1>
                <div className="form-group" style={{width:'200px', margin:'10px'}}>
                    <label htmlFor="rewardName">Name:</label>
                    <input id="rewardName" name="rewardName" type="text" placeholder="Add Reward Name" className="form-control"
                    onChange={event =>  this.handleRewardNameChange(event)}/>
                    <label htmlFor="pointsVal">Points:</label>
                    <select name="pointsVal" className="form-control"
                    onChange={event => this.setState({points: parseInt(event.target.value)})}>
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                        <option>40</option>
                    </select>
                    <br/>
                    <Button onClick={() => this.addReward()}>Add</Button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return  {
        rewards: state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addReward}, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps) (AddReward);

