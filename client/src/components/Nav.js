import React from 'react'
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <div className="nav">
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/">FAST FOOD STATION</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                
                    <div className="collapse navbar-collapse" id="navbarsExample07">
                            <ul className="navbar-nav ml-auto mb-2 mb-md-0">
                                <li className="nav-item active ">
                                <i className="fas fa-camera-retro"></i>
                                    <Link className="nav-link" to="/">ORDER</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/profile">PROFILE</Link>
                                </li>
                                
                            </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
