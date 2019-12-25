import React, { Component, useContext } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';
import Button from "react-bootstrap/Button";    
import { AuthContext } from "../auth";


class Points extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
        }
    }

    componentDidMount(){
        firebaseApp.auth().onAuthStateChanged(user => {
            if (user) {
                console.log('user has signed in or up', user);
                const { email } = user;
                //emailAddress = email;
                this.setState({email})
                            
                //debugger;
            }
        })
    }

    render() {
      
        return (
            <div>
                <h1> Points for { this.state.email }  </h1>
                <Button onClick={() => firebaseApp.auth().signOut()}>Sign out</Button>
            </div>
        )
    }
}

export default Points;

