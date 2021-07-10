import React from 'react';

class Follower extends React.Component {

    componentDidMount() {
        console.log("Follower component mounted")
    }

    render() {
        return (
           <div>{this.props.login}</div> 
        )
    }
}

export default Follower;