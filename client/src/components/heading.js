import React from 'react'

function heading(props) {
    return (
        <div>
            <div className="order__heading mb-2">
                {props.header}
            </div>
            
        </div>
    )
}

export default heading
