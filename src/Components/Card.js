import axios from 'axios';
import React from 'react';
import Follower from './Follower'

class Card extends React.Component {

    state = ({
        followers: []
    })

    componentDidMount() {
        console.log("Card component mounted")
        
        axios
            .get('https://api.github.com/users/KyleCardwell/followers')
            .then(res => {
                this.setState({
                    followers: res.data
                })
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }

    render() {
        return (
            <div>
                <h2>What's Up {this.props.name}</h2>
                Hi {this.props.name}
                <div>
                    {this.state.followers.map(follower => {
                        return (
                            <Follower key={follower.id} login={follower.login} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Card;