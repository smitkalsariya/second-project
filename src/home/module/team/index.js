import React from "react";
import './team.scss';
import waveimage from '../../../assets/icons/wave.svg';
import teamCulture from '../../../assets/images/team-culture.png';

export default function Team() {
    return (
        <div>
            <div className="container">
                <div className="full-team">
                    <div className="full-team-heading">
                        <span>OUR DYNAMIC TEAM</span>
                        <div className='team-title'>
                            <h4>TEAM & CULTURE</h4>
                            <div className='team-rat'> 1.3</div>
                        </div>
                    </div>
                    <div className="team-details">
                        <div className="team-text">
                            <h3>Cultivating Collaboration and Excellence</h3>
                            <p>At Master Systems, we foster a culture of teamwork and innovation. Our diverse team brings
                                together expertise from various disciplines, collaborating to deliver exceptional solutions.
                                We value growth, transparency, and a supportive work environment that encourages creativity,
                                personal development, and a shared commitment to maritime excellence.</p>
                            <div className='team-culture-text-iconimage'>
                                <img src={waveimage} />
                            </div>
                            <div className='team-culture-text-borderbottom'></div>
                        </div>
                        <div className="team-image">
                            <img src={teamCulture} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}