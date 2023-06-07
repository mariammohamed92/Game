import React from 'react'
import { Link } from 'react-router-dom';
import logo from './../../Images/logo.png'

export default function Navbar() {
  return <>
  <div className="container-fluid">
    <div className="row">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
        <div className="container">
            <Link className="navbar-brand" to='/'>
                <img src={logo} alt="logo"  className='logo'/>
                Game Over
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="">
                        Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="all">
                        All
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link
                        className="nav-link dropdown-toggle"
                        to="/platforms"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Platforms
                        </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link className="dropdown-item" to="/platforms/pc">PC</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/platforms/browser">Browser</Link>
                                </li>
                            </ul>
                    </li>

                    <li className="nav-item dropdown">
                        <Link
                        className="nav-link dropdown-toggle"
                        to="/sort-by"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Sort-by
                        </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link className="dropdown-item" to="/sort-by/release-date">release-date</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/sort-by/popularity">popularity</Link>
                                </li>
                                <li>
                                <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/sort-by/alphabetical">alphabetical</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/sort-by/relevance">relevance</Link>
                                </li>
                            </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <Link
                        className="nav-link dropdown-toggle"
                        to="categories"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Categories
                        </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link className="dropdown-item" to="/categories/shooter">shooter</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/categories/racing">racing</Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/categories/sports">sports</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/categories/social" >social</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/categories/open-world">open-world</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/categories/zombie">zombie</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/categories/fantasy">fantasy</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/categories/action-rpg">action-rpg</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/categories/action">action</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/categories/flight">flight</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/categories/battle-royale">battle-royale</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
               

                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex">
              
                        
                
                    
                        <li className="nav-item">
                        <Link className="nav-link" to="login">
                            Login
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link bordr" to="register">
                            Join Free
                        </Link>
                        </li>
                  
                </ul>
            </div>
            </div>
        </nav>
    </div>
    </div>
</>
}
