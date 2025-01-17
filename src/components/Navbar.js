import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
export default function Navbar(props) {
  return (
    <div>
       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="/">{props.title}</a> */}   {/*a is also for same purpose but page is loaded*/}
        <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>   
             
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}
      <div className ={`form-check form-switch text-${props.mode ==='dark'?'light':'dark'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
</div>
    </div>
  </div>
</nav>
    </div>
  )
}
Navbar.propTypes = {title:PropTypes.string.isRequired,           /*You can set type of props*/ /*isRequired - you have to enter those values*/
    about:PropTypes.string.isRequired}

// Navbar.defaultProps = {
//     title : "Set title here",                         /* You can set default types as well here*/
//     about:"About here"
// };