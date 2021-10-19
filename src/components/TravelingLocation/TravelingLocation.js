import React from 'react';
import { Card } from 'react-bootstrap';
import './TravelingLocation.css';
import { Link } from 'react-router-dom';

const TravelingLocation = props => {
    const { name, photo } = props.location;

    return (
        <Card style={{ width: '18rem' }} className="img-container">
            <Link to={`/booking/${name}`} style={{ height: '100%', width: '100%' }}>
                <Card.Img variant="top" src={photo} style={{ height: '100%', width: '100%', borderRadius: 15 }} />
            </Link>

            <div className="centered">
                <h3>{name}</h3>
            </div>
        </Card>
    );
};

export default TravelingLocation;
