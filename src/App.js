import './App.css';
import React from 'react';
import UserCard from './Components/UserCard'
import axios from 'axios';
import { Container, Typography, Card, AppBar, Toolbar, CardActions, CardContent, CardMedia, CssBaseline, Grid } from '@material-ui/core'
import { withStyles, makeStyles } from '@material-ui/core/styles'


class App extends React.Component {

  state = ({

  })

  componentDidMount() {

    console.log("App component mounted")
    
    setTimeout(() => {

      axios
        .get("https://api.github.com/users/KyleCardwell")
        .then(res => {
          console.log(res)
          this.setState(res.data)
        })
        .catch(err => {
          console.log(err)
        })

    },2000)

  }


  render() {
    return (

      <>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h4" align="center">Lifecycle Components with GitHub</Typography>
          </Toolbar>  
        </AppBar>      
        <Container component='div' maxWidth="sm">
          <Toolbar className="titlebar">
            <Typography variant="h5" align="center">{this.state.name}'s GitHub Followers</Typography>
          </Toolbar>
          {this.state.id === undefined ? <h4>Loading...</h4> : <UserCard className="userCard" name={this.state.name} followers={this.state.followers}/>}
        </Container>
      </>
    )
  }
}

export default App;
