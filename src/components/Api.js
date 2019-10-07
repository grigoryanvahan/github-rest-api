import React,  { useState } from 'react';
import ReactDOM from "react-dom";
import {connect} from 'react-redux';
import * as actionCreator from '../store/actions/action';
import ShowProfile from './showProfile';
import '../App.css';
import logo from '../logo.png';

const Api = props => {
    const handleUsername = e => {
        props.changeUsername(e);
    };

    const handleSubmit = e => {
        props.getUserData(e, props.username);
    };

    const handleKeyDown = event => {
        if(event.key === 'Enter'){
            props.getUserData(event, props.username);
        }
    };

    return(
        <div onKeyDown={handleKeyDown}>
            <header>
                <a href="index.html">
                    <div className="header_logo_div">
                        <img src={logo} alt="logo" className="header_logo"/>
                    </div>
                    <h1>Github Finder</h1>
                </a>
            </header>
            <input
                type="text"
                placeholder="Enter Github Username."
                onChange={handleUsername}
                id="userInput"
            />
            <br/>
            <button onClick={handleSubmit} id="searchButton">Search</button>
            <br/>;
            {
                props.grabbedData == true?<div id="profile"><ShowProfile/></div>:<div id="message">{props.message}</div>
            }
        </div>
    )
};

const mapStateToProps = state => {
    return {
        username: state.username,
        login: state.login,
        repos: state.repos,
        following: state.following,
        followers: state.followers,
        message: state.message,
        grabbedData: state.grabbedData,
        htmlUrl: state.htmlUrl,
        avatar_url: state.avatar_url
    };
};
const mapDispatchToProps = dispatch => {
    return{
        changeUsername: e => dispatch(actionCreator.changeUsername(e)),
        getUserData: (e, username) => dispatch(actionCreator.getUserData(e, username))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Api);