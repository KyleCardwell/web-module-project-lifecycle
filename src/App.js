import './App.css';
import React from 'react';
import Card from './Components/Card'
import axios from 'axios';

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
      <div>
        {this.state.id === undefined ? <h3>Loading...</h3> : <Card name={this.state.name} followers={this.state.followers}/>}
      </div>
    )
  }
}

export default App;
