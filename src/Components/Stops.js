import React from 'react'
import Stop from './Stop'

const Stops = (props) => {
          
        return(
            
            <div>
                {props.stops.map((element) => {
                    return(
                        <Stop
                        key = {element.id}
                        name = {element.name}
                        date = {element.date}
                        id = {element.id}
                        stateName = {element.stateName} 
                        editStopFn = {props.editStopFn}
                        deleteStopFn = {props.deleteStopFn} />
                    )
                })}

            </div>
        )
    
}

export default Stops;