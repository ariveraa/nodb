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
                        stateName = {element.stateName} />
                    )
                })}

            </div>
        )
    
}

export default Stops;