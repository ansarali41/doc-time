import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import fakeLocation from '../../fakeData/fakeLocation';
import Header from '../Header/Header';
import './Booking.css';

const Booking = () => {
    const { locationName } = useParams();

    const [locationInfo, setLocationInfo] = useState([]);
    const newLocation = fakeLocation.find(loc => loc.name === locationName);
    useEffect(() => {
        setLocationInfo(newLocation);
    }, []);

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url('https://i.ibb.co/Cst11zY/home2.jpg')`,
                height: '100vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100vw',
            }}
        >
            <Header></Header>
            <div className="booking-container">
                <div className="booking-location-details ">
                    {locationInfo.name && <h1>{locationInfo.name}</h1>}
                    {locationInfo.name && <p>{locationInfo.fullDescription}</p>}
                </div>
                <div className="booking-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="name">Your Name:</label>
                        <input name="name" placeholder="Enter Your Name" ref={register({ required: true })} /> <br />
                        {errors.origin && <span style={{ color: 'red' }}>This field is required</span>}
                        <br />
                        <label htmlFor="location">Location:</label>
                        <input name="location" defaultValue="Dhaka" ref={register({ required: true })} /> <br />
                        {errors.location && <span style={{ color: 'red' }}>This field is required</span>}
                        <br />
                        <div className="date-input">
                            <label htmlFor="start">From:</label>
                            <input type="date" id="start" name="trip-start" defaultValue={new Date()} min="2021-10-18" max="2022-10-25" />
                        </div>
                        <br />
                        <Link to={`/nearestHotel/${locationInfo.name}`}>
                            <input className="submit-btn" type="submit" value="Get Appointment" />
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;
