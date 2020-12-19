import React, { useContext, useEffect, useState } from 'react';
import './EventTask.css'
import { UserContext } from '../../App';
import NavBar from '../NavBar/NavBar';

const EventTask = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        fetch('https://thawing-bayou-15656.herokuapp.com/selectedEventData?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setUserData(data))
        
    },[])

    const deleteEvent = (id) => {
        fetch('https://thawing-bayou-15656.herokuapp.com/deleteEvent/'+id , {
            method: 'DELETE'
        })
    }
    return (
        <>
        <NavBar></NavBar>
        <div className="container">
            <div className="task-container row">
                {
                    userData.map(data => 
                        <div className="col-md-4 event-card">
                        <img src={data.chooseEvent.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">{data.chooseEvent.eventName}</h3>
                            <p className="card-text">25.12.2020</p>
                            <button onClick={() => deleteEvent(data._id)} className="btn btn-primary">Cancel</button>
                        </div>
                        </div>
                        )
                }
            </div>
        </div>
        </>
    );
};

export default EventTask;