import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import Header from '../Header/Header';
import TravelingLocation from '../TravelingLocation/TravelingLocation';
import './home.css';
import { Button } from 'react-bootstrap';
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    const [locations, setLocations] = useState(fakeData);
    return (
        <div style={{ overflowX: 'hidden' }}>
            <div
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url('https://i.ibb.co/qpM3Y9s/main-Banner.jpg')`,
                    height: '400px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100vw',
                    textAlign: 'center',
                }}
            >
                <Header></Header>
                <h3 style={{ color: 'white' }} e>
                    Welcome To Doc Time
                </h3>
                <div className="pt-5">
                    <Link to="/contact">
                        <Button variant="success w-25">Contact Us</Button>
                    </Link>
                </div>
            </div>
            <div className="container pb-5 text-center">
                <h3 className=" pt-3">Choose Our Service</h3>
                <Grid container direction="row" justify="center" className="locations-container ">
                    {locations.map(loc => (
                        <TravelingLocation location={loc} key={loc.id}></TravelingLocation>
                    ))}
                </Grid>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
