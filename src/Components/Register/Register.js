import React, { useContext } from 'react';
import './Register.css';
import Logo from '../../Images/logos/Logo.png';
import { useHistory } from 'react-router-dom';
import { EventContext, UserContext } from '../../App';
import { useForm } from 'react-hook-form';

const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [chooseEvent, setChooseEvent] = useContext(EventContext);

    const { register, handleSubmit, errors} = useForm();
    const history = useHistory();
    const handleSubmitData = data => {

        const registrationData = {registration: data, eventId:chooseEvent.id};
        // Send registration data
        fetch('https://thawing-bayou-15656.herokuapp.com/registration', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(registrationData)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            if(result){
                history.push('/eventTask');
                alert('You Registered Successfully')
                
            }
        })
        // Send Selected Event data
        const selectedEventData = {chooseEvent, email: loggedInUser.email}
        fetch('https://thawing-bayou-15656.herokuapp.com/selectedEvents', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(selectedEventData)
        })
    };
    return (
        <div>
            <div className="register-page">
                <img src={Logo} className="logo" alt="Logo" />
                <div className="registration-block">
                    <h4>Register as a Volunteer</h4>
                    <form onSubmit={handleSubmit(handleSubmitData)}>
                        <div className="input-data">
                            <label>Name</label>
                            <input name="name" type="text" defaultValue={loggedInUser.displayName} required ref={register({ required: true })}/>
                        </div>

                        <div className="input-data">
                            <label>Username or Email</label>
                            <input name="email" type="email" defaultValue={loggedInUser.email} required ref={register({ required: true })}/>
                            {errors.name && <span className="error">Name is required</span>} 
                        </div>

                        <div className="input-data">
                            <label>Date</label>
                            <input name="date" type="date" default-value="" required ref={register({ required: true })}/> 
                        </div>

                        <div className="input-data">
                            <label>Description</label>
                            <input name="description" type="text" required ref={register({ required: true })}/> 
                        </div>

                        <div className="input-data">
                            <label>Organization</label>
                            <input name="organization" type="text" defaultValue={chooseEvent.eventName} ref={register({ required: true })}/> 
                        </div>
                        <input type="submit" className="btn btn-primary"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;