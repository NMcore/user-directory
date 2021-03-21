import React, { Component } from 'react'

class UserInfo extends Component {
    render() {    
        return (
            <div className="page-content">
                <span className="dirNumber">{this.props.userInfo.id}/25</span>
                <h2>{this.props.userInfo.name.first} {this.props.userInfo.name.last}</h2>
                <div className="userInfo">
                    <span className="userInfoB">From: </span>{this.props.userInfo.city}
                </div>
                <div className="userInfo">
                    <span className="userInfoB">Job Title: </span>{this.props.userInfo.title}
                </div>
                <div className="userInfo">
                    <span className="userInfoB">Employer: </span>{this.props.userInfo.employer}
                </div>
                <div className="userInfoMovie">
                    <span className="userInfoB">Favorite Movies:</span>
                    <ul>
                        <ol>{this.props.userInfo.favoriteMovies[0]}</ol>
                        <ol>{this.props.userInfo.favoriteMovies[1]}</ol>
                        <ol>{this.props.userInfo.favoriteMovies[2]}</ol>
                    </ul>
                </div>
            </div>

        )
    }
}

export default UserInfo;
