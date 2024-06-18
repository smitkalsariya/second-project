import React from "react";
import './footer.scss';

export default function Footer() {
    return (
        <div>
            <footer>
                <div className="footer-bgcolor">
                    <div className="container">
                        <div className="footer-grid">
                            <div className="footer-grid-one">
                                <p>Contact <p>us.</p></p>
                                <div className="grid-border-bottom-white"></div>
                            </div>
                            <div className="footer-grid-two">
                                <div className="footer-grid-left">
                                    <p>Navigation</p>
                                    <a>Company</a>
                                    <a>Products</a>
                                    <a>Serviece</a>
                                    <a>Achievment & certificates</a>
                                    <a>Partners</a>
                                    <a>Careers</a>
                                    <a>Gallary</a>
                                </div>
                                <div className="footer-grid-right">
                                    <p>Social Media</p>
                                    <a>Facbook</a>
                                    <a>Linkdin</a>
                                    <a>You tube</a>
                                    <a>Twitter</a>

                                </div>
                                <div className="grid-border-bottom-white"></div>
                            </div>
                            <div className="footer-grid-three">
                                <div className="grid-three-title">
                                    <p>Corporate Office</p>
                                </div>
                                <div className="grid-three-detailes">
                                    <p>Phone:
                                        <span> undefined</span>
                                    </p>
                                    <p>Fax:</p>
                                    <p>Mail:</p>
                                    <div className="grid-btn">
                                        Find your local contact
                                    </div>
                                </div>
                                <div className="grid-border-bottom-white"></div>
                            </div>
                            <div className="footer-grid-four">
                                <h2>Lets talk!</h2>
                                <div className="grid-btn">Write to us</div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}