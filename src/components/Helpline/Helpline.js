import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../Header/Header';

const Helpline = () => {
    return (
        <div>
            <Header />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ height: '60vh' }}>
                    <h2 className="text-warning text-center">Contact us</h2>

                    <h3>phone: +238972938429</h3>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Helpline;
