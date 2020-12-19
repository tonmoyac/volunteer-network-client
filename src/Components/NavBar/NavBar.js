import React, { useContext } from 'react';
import './NavBar.css';
import Logo from '../../Images/logos/Logo.png';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="a">
                        <img className="nav-logo" src={Logo} alt="logo" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/donation">Donation</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/eventTask">Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/blog">Blog</Link>
                            </li>
                        </ul>
                    </div>
                    {
                        loggedInUser.email ? <h5 className="name">{loggedInUser.displayName}</h5> 
                        :<Link to='/register'>
                            <button type="button" className="btn btn-primary">Register
                            </button>
                        </Link>
                    }
                    <button type="button" className="btn btn-secondary">Admin</button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;