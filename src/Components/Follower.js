import React from 'react';

class Follower extends React.Component {

    componentDidMount() {
        console.log("Follower component mounted")
    }

    render() {
        return (
            <div>
                <h3>{this.props.login}</h3>
                <img src={`${this.props.avatar}`} alt="" className="userImage"/>
            </div> 
        )
    }
}

export default Follower;