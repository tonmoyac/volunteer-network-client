import React from 'react';
import './NotFound.css';
import { Link, useHistory } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const NotFound = () => {
    const history = useHistory();
    return (
        <>
        <NavBar></NavBar>
        <div className="notfound">
            <h1>404</h1>
            <h2>Not Found</h2>
            <Link className="btn btn-secondary" onClick={() => {
                    history.goBack();
                }}>Go Back
            </Link>
        </div>
        </>
    );
};

export default NotFound;