import React, {Component} from 'react'

class Stop extends Component{ 


    render(){
        return(
            <div> 
                
                <h3>{this.props.name}</h3>
                <p>{this.props.date}</p>
                <p>{this.props.stateName}</p>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        )
    }
}

export default Stop;