import React from 'react'

function Summary(props) {
    return (
        <div className="col-lg-4 col-md-4">
            <div className="summary" >
                <div className="summary__item" style={{fontWeight: 600}}>
                    {props.title}: <span style={{fontSize: "120%", fontWeight: "BOLD"}}>{props.details}</span>
                </div>
            </div>
        </div>
    )
}

export default Summary
