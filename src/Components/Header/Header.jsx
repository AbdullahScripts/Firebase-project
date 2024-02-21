import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
        </li>
        {/* <li className="nav-item">
          <Link to="/about" className="nav-link active" aria-current="page" >About</Link>
        </li> */}
        <li className="nav-item">
          <Link to="/contact" className="nav-link" >Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/auth/login" className="nav-link" >Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/auth/register" className="nav-link" >Register</Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard/home" className="nav-link" >Dashboard</Link>
        </li>
        {/* <li className="nav-item">
          <Link to="/auth/forgot-password" className="nav-link" >Forgot Password</Link>
        </li> */}
      
    
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}
