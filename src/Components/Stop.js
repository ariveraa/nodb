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
            <div> 
                <h3>{name}</h3>
                <p>{date}</p>
                <p>{stateName}</p>
                <button onClick = {this.toggleEditMenu}>Edit</button>
                {this.state.toggleEdit? (
                    <div>
                        <a>Enter New Name</a>
                        <input placeholder= {name} 
                        name= 'nameInput'
                        onChange = {event => this.handleInput(event)}/>
                        <a>Enter New Date</a>
                        <input  placeholder = {date}
                        name = 'dateInput'
                        onChange = {event => this.handleInput(event)}/>
                        <a>Enter New State</a>
                        <input placeholder = {stateName} 
                        name = 'stateNameInput'
                        onChange = {event => this.handleInput(event)}/>
                        <button onClick ={this.editStop}>Submit</button>
                    </div>
                ):null}
                <button onClick = {() => this.props.deleteStopFn(this.props.id)}>Delete</button>

            </div>
        )
    }
}

export default Stop;