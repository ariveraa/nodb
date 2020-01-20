import React, {Component} from 'react'

class Stop extends Component{ 
    constructor(){
        super()
        this.state = {
            toggleEdit: false
        }
    }

    toggleEditMenu =() => {
        this.setState({
            toggleEdit: !this.state.toggleEdit, 
            nameInput: '',
            dateInput: '',
            stateNameInput: ''
        })
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    editStop =() => {
        const {editStopFn , name, date, stateName, id} = this.props; 
        const {nameInput, dateInput, stateNameInput} = this.state; 
        editStopFn(id, {
            name:nameInput || name,
            date:dateInput || date,
            stateName:stateNameInput || stateName
        })
        this.toggleEditMenu()
    }

    render(){
        const {name,date,stateName} = this.props;
        return(
            <div className = 'stop-box'> 
               {!this.state.toggleEdit? (
                   <div id = 'data-box'>
                    <h3>{name}</h3>
                    <p>{date}</p>
                    <p>{stateName}</p>
                    </div> ):null}
              <div className = 'button-box'>
                <button id = 'box-buttons' onClick = {this.toggleEditMenu}>Edit</button>
              
                <button id = 'box-buttons' onClick = {() => this.props.deleteStopFn(this.props.id)}>Delete</button>
                
              </div>
              {this.state.toggleEdit? (
                    <div id = 'edit-box'>
                        <a>Enter New Name</a>
                        <input className = 'edit-input' placeholder= {name} 
                        name= 'nameInput'
                        onChange = {event => this.handleInput(event)}/>
                        <a>Enter New Date/Time</a>
                        <input className = 'edit-input'  placeholder = {date}
                        name = 'dateInput'
                        onChange = {event => this.handleInput(event)}/>
                        <a>Enter New State/City</a>
                        <input className = 'edit-input' placeholder = {stateName} 
                        name = 'stateNameInput'
                        onChange = {event => this.handleInput(event)}/>
                        <button id = 'edit-submit' onClick ={this.editStop}>Submit</button>
                    </div>
                ):null}
            </div>
        )
    }
}

export default Stop;