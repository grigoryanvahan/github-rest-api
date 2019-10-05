import React from 'react';
import {connect} from 'react-redux';
import '../App.css';

const ShowProfile = props => {

    return(
        <div>
            <img src={props.avatar_url} alt="Image Not Found" id="avatar"/>
            <hr/>
            <h2>{props.login}</h2>
            <h4>Repositories: {props.repos}</h4>
            <h4>Following: {props.following}</h4>
            <h4>Followers: {props.followers}</h4>
            <a href={props.htmlUrl} target="_blank" id="viewProfile"><button id="viewProfile">View Profile</button></a>
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
export default connect(mapStateToProps, null)(ShowProfile);