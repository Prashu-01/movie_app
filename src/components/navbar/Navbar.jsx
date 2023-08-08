import React from 'react'
import '../style/navbar.css'
// import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-4">
            <div className="container-fluid">
                <div className="navbar-brand" href="/">Showhere</div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Shows</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Login</a>
                        </li>
                        
                    </ul>
                </div>

                <button className="navbar-toggler" style={{ padding: '0 .4rem 0 .4rem' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="navbar-toggler-icon"></i>
                </button>
            </div>
        </nav>
  )
}
