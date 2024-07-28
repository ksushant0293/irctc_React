import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import irctc_logo from "../../assets/irctc_logo.png"
import irctc from "../../assets/irctc2.png"

const Header = () => {
    return (
        <header className="header">
            <div className="logo"><img src={irctc_logo} alt="irctc_logo" className='irlogo' /></div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/trains">trains</Link></li>
                    <li><Link to="/flights">Flights</Link></li>
                    <li><Link to="/hotels">Hotels</Link></li>
                    <li><Link to="/passengerForm">passengerForm</Link></li>
                    <li><Link to="/TrainList">TrainList</Link></li>
                    <li><Link to="/TrainList1">TrainList1</Link></li>

                </ul>
            </nav>
            <div className="login">
                <div>
                    <img src={irctc} alt="logo" className='irlogo'/>
                </div>
                <Link to="/loginSignupPage"><button>Login/Sign Up</button></Link>
            </div>
        </header>
    );
}

export default Header;
