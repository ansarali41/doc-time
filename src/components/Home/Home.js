import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import fakeLocation from '../../fakeData/fakeLocation';
import Header from '../Header/Header';
import TravelingLocation from '../TravelingLocation/TravelingLocation';
import './home.css';

const Home = () => {
    const [locations, setLocations] = useState(fakeLocation);
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url('https://i.ibb.co/qpM3Y9s/main-Banner.jpg')`,
                height: '100vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100vw',
                textAlign: 'center',
                color: 'orange',
            }}
        >
            <Header></Header>
            <h3 style={{ color: 'white' }} e>
                Welcome To Doc Time
            </h3>
            <h3 style={{ color: 'orange' }} e>
                Choose Our Service
            </h3>
            <Grid container direction="row" justify="center" className="locations-container">
                {locations.map(loc => (
                    <TravelingLocation location={loc} key={loc.id}></TravelingLocation>
                ))}
            </Grid>
        </div>
    );
};

export default Home;
