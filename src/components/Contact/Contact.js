import { faEnvelope, faEnvelopeSquare, faSms, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../Header/Header';

const Contact = () => {
    return (
        <div style={{ overflowX: 'hidden' }}>
            <Header />
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6 pb-5">
                    <form>
                        <div className="card border-dark rounded-0">
                            <div className="card-header p-0">
                                <div className="bg-dark text-white text-center py-2">
                                    <h3>
                                        <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
                                        Contact Us
                                    </h3>
                                    <p className="m-0">Feel free to contact us</p>
                                </div>
                            </div>
                            <div className="card-body p-3">
                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <FontAwesomeIcon icon={faUser} className="text-dark" />
                                            </div>
                                        </div>
                                        <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Your Full Name" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <FontAwesomeIcon icon={faEnvelopeSquare} className="text-dark" />
                                            </div>
                                        </div>
                                        <input type="email" className="form-control" id="nombre" name="email" placeholder="Email address, ex:abc@gmail.com" required />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <FontAwesomeIcon icon={faSms} className="text-dark" />
                                            </div>
                                        </div>
                                        <textarea className="form-control" placeholder="Your Message" required></textarea>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <input type="submit" value="Send" className="btn btn-dark btn-block rounded-0 py-2" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
