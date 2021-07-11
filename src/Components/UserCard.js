import axios from 'axios';
import React from 'react';
import Follower from './Follower'
import { Card, CardMedia, Container, Grid } from '@material-ui/core'

class UserCard extends React.Component {

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
                {/* <h2>What's Up {this.props.name}</h2>
                Hi {this.props.name} */}
                <div>
                    <Grid
                        container 
                        justifyContent="center">
                        {this.state.followers.map(follower => {
                            return (
                                <Card key={follower.id} className="userCard">
                                    <Follower
                                        login={follower.login}
                                        avatar={follower.avatar_url}/>
                                </Card>
                            )
                        })}
                    </Grid>
                </div>
            </div>
        )
    }
}

export default UserCard;