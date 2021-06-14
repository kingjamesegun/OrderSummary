import React from 'react'

function Location(props) {
    return (
        <div className="locatin">
            <div className="row">
                <div className="col-lg-2 col-md-2 title">
                    {props.title}
                </div>
                <div className="col-lg-5 col-md-8">
                    {props.details}
                </div>
                <div className=""></div>
            </div>
        </div>
    )
}

export default Location
