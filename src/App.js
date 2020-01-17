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
    this.editStop = this.editStop.bind(this)
    this.deleteStop = this.deleteStop.bind(this)
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

  editStop(id, body){
    axios.put(`/api/stop/${id}`, body).then(res => {
      this.setState({stops: res.data})
    }).catch(err => console.log(err))
  }

  deleteStop(id){
    axios.delete(`/api/stop/${id}`).then(res => {
      this.setState({stops: res.data})
    }).catch(err => console.log(err))
  }

  render(){
    return (
      <div className="App">
          <Header/>
          <AddStop    
            newStopFn = {this.newStop}/>
          <Stops stops = {this.state.stops} 
          editStopFn = {this.editStop} 
          deleteStopFn= {this.deleteStop}/> 
      </div>
    );
  }
}

export default App;
