import React, {Component} from 'react'
import '../App.css';

class AddStop extends Component { 
    constructor(props){
        super(props)
        this.state = {
                name:'',
                date:'',
                stateName:''         
        }
        this.handleChange = this.handleChange.bind(this)
        this.addNewStop = this.addNewStop.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    addNewStop(){
        this.props.newStopFn({
            name: this.state.name, 
            date: this.state.date,
            stateName: this.state.stateName 
        })
        this.setState({
            name: '',
            date:'',
            stateName: ''
        })
    }

    render(){
        return(
            <div> 
                <h2 >Add A New Stop</h2>
                <section className = 'perm-inputs'>
                <input placeholder = 'Enter Stop Name'
                    name = 'name' 
                    value = {this.state.name}
                    onChange = {event => this.handleChange(event)}/> 
                <input placeholder='Enter Date/Time of Stop'
                    name = 'date'
                    value = {this.state.date}
                    onChange = {event => this.handleChange(event)}/>
                <input placeholder = 'Enter State/City of Stop'
                    name = 'stateName'
                    value = {this.state.stateName}
                    onChange = {event => this.handleChange(event)}/>
                <button onClick = {() => this.addNewStop()}>Add Stop</button>
                </section>
            </div>
        )
    }
}

export default AddStop; 