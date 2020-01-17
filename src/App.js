import React, {Component} from 'react';
import axios from 'axios'; 
import './App.css';
import Stops from './Components/Stops'
import Header from './Components/Header'
import AddStop from './Components/AddStop'

class App extends Component{
  constructor(){
    super()
    this.state = {

        stops:[]
      
    }
    this.newStop = this.newStop.bind(this)
  }

  componentDidMount(){
    axios.get('/api/stops').then(res => {
      this.setState({stops: res.data})
    }).catch(err => console.log(err))
  }

  newStop(body){
    axios.post('/api/stop', body).then(res => {
      this.setState({stops: [...res.data]})
    }).catch(err => console.log(err))
  }

  render(){
    return (
      <div className="App">
          <Header/>
          <AddStop    
            newStopFn = {this.newStop}/>
          <Stops stops = {this.state.stops}/> 
      </div>
    );
  }
}

export default App;
