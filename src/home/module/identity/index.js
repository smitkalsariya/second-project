import React from "react";
import './identity.scss';
import waveimage from '../../../assets/icons/wave.svg';
import brandidentity from '../../../assets/images/brand.png';

export default function Identity() {
    return (
        <div>
            <div className="container">
                <div className="identity">
                    <span>REFLECTING EXCELLENCE, TRUST, AND INNOVATION</span>
                    <div className='identity-title'>
                        <h4>BRAND IDENTITY</h4>
                        <div className='identity-rat'> 1.2</div>
                    </div>
                    <div className='identity-card'>
                        <div className='identity-card-detailes'>
                            <div>
                                <h6>Our Journey Since 1999</h6>
                            </div>
                            <div>
                                <p>Founded in 1999 in Abu Dhabi, UAE, we have been dedicated to delivering exceptional
                                    maritime solutions, shaping the industry's future, and fostering excellence through
                                    our unwavering commitment to innovation, expertise, and customer satisfaction.</p>
                            </div>
                            <div className='identity-card-iconimage'>
                                <img src={waveimage} />
                            </div>
                            <div className='identity-card-borderbottom'></div>
                        </div>
                        <div className='identity-card-image'>
                            <img src={brandidentity} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="overview">
                <div className="container">
                    <div className="overview-grid">
                        <div>
                            <h2>4,997+</h2>
                            <p>Happy Clients</p>
                        </div>
                        <div>
                            <h2>22</h2>
                            <p>Years in business</p>
                        </div>
                        <div>
                            <h2>60+</h2>
                            <p>Partners</p>
                        </div>
                        <div>
                            <h2>15</h2>
                            <p>Locations</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}