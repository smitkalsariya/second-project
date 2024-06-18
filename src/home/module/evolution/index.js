import React from 'react';
import './evolution.scss';
import continiousen from '../../../assets/images/continiousen.png';
import waveimage from '../../../assets/icons/wave.svg';

export default function Evolution() {
    return (
        <div>
            <div className='container'>
                <div className='evolution'>
                    <span>ADAPTING, GROWING, INNOVATING, SUCCEEDING, THRIVING.</span>
                    <div className='evolution-title'>
                        <h4>CONTINIOUS EVOLUTION</h4>
                        <div className='evolution-title-rat'> 1.1</div>
                    </div>
                    <div className='evolution-card'>
                        <div className='evolution-card-image'>
                            <img src={continiousen} />
                        </div>
                        <div className='evolution-card-detailes'>
                            <div>
                                <h6>Our Journey Since 1999</h6>
                            </div>
                            <div>
                                <p>Founded in 1999 in Abu Dhabi, UAE, we have been dedicated to delivering exceptional
                                    maritime solutions, shaping the industry's future, and fostering excellence through
                                    our unwavering commitment to innovation, expertise, and customer satisfaction.</p>
                            </div>
                            <div className='evolution-card-iconimage'>
                                <img src={waveimage} />
                            </div>
                            <div className='evolution-card-borderbottom'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}