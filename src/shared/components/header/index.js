import React from "react";
import './header.scss';
import Headerblacklogo from '../../../assets/logo/black-logo.png';
import Headerwhitelogo from '../../../assets/logo/white-new.png';

export default function Header() {
    return (
        <div>
            <header>
                <div className="full-header">
                    <div className="container">
                        <div className="header-flex">
                            <div className="header-logo">
                                <img className="whitelogo" width="100%" src={Headerwhitelogo} />
                                <img className="blacklogo" width="100%" src={Headerblacklogo} />
                            </div>
                            <div className="header-menu-grid">
                                <a>Company</a>
                                <a>Products</a>
                                <a>Solution</a>
                                <a>Partners</a>
                                <a>Contact</a>
                            </div>
                            <div className="header-button">
                                <button> Enquiry
                                    <div className="red-fill"></div>
                                    <div className="red-fill-name">Enquiry</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}