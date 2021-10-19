import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
import Header from '../Header/Header';
import './Booking.css';

const Booking = () => {
    const { locationName } = useParams();
    const [modalShow, setModalShow] = React.useState(false);
    const [locationInfo, setLocationInfo] = useState([]);
    const newLocation = fakeData.find(loc => loc.name === locationName);
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
                        <label htmlFor="Service">Service:</label>
                        <input name="service" defaultValue={locationInfo.name} ref={register({ required: true })} /> <br />
                        {errors.location && <span style={{ color: 'red' }}>This field is required</span>}
                        <br />
                        <div className="date-input">
                            <label htmlFor="date">Date:</label>
                            <input type="date" id="date" name="date" defaultValue={new Date()} min="2021-10-18" max="2022-10-25" />
                        </div>
                        <br />
                        <input className="submit-btn" type="submit" value="Get Appointment" onClick={() => setModalShow(true)} />
                    </form>
                    <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
                </div>
            </div>
        </div>
    );
};

export default Booking;

function MyVerticallyCenteredModal(props) {
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Conformation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Congratulations!</h4>
                <p>You Appointment is placed in our List. We will contact you soon.Stay with DocTime .thank you</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
