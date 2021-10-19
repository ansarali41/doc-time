import React from 'react';
import { useParams } from 'react-router-dom';
import GoogleMap from '../GoogleMap/GoogleMap';
import Header from '../Header/Header';
import './NearestHospital.css';

const NearestHospital = () => {
    const { place } = useParams();
    return (
        <div>
            <Header></Header>
            <div className="hotelsAndMap-container">
                <div className="google-map-container" style={{ width: '100%' }}>
                    <GoogleMap></GoogleMap>
                </div>
            </div>
        </div>
    );
};

export default NearestHospital;
