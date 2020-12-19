import React from 'react';
import './Home.css';
import NavBar from '../NavBar/NavBar';
import Events from '../Events/Events';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <header>
                <h1>I grow by helping people in need.</h1>
                <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-primary" type="button" id="button-addon2">Search</button>
                </div>
            </header>
            <Events></Events>
        </div>
    );
};

export default Home;