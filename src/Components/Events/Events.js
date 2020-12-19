import React, { useContext, useState } from 'react';
import './Events.css';
import volunteerData from '../volunteerData';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { EventContext } from '../../App';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('https://thawing-bayou-15656.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setEvents(data))

    }, []);

    const [chooseEvent, setChooseEvent] =useContext(EventContext);

    const handleChooseEvent = (event) => {
        setChooseEvent(event);

    }

    const colours = ['#FFBD3E', '#421FCF', '#FF7044', '#3F90FC'];
    const getColour = () => colours[Math.floor(Math.random() * colours.length)];
    
    return (
        <div className="container">
            <div className="row">
            {
                events.map(event =>
                    <div className="card col-md-3" key={event.id}>
                        <Link to="/register" onClick={() => handleChooseEvent(event)}>
                            <img src={event.img} className="card-img-top"  alt="..." />
                            <div className="card-body" style={{backgroundColor: getColour()}}>
                                <h5 className="card-title">{event.eventName}</h5>
                            </div>
                        
                        </Link>
                    </div>
                )
            }
            </div>
        </div>
    );
};

export default Events;