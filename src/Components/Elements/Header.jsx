import React from 'react'
import { CiBellOn } from "react-icons/ci";

const Header = () => {
    return (
        <div className='right-header'>
            <div className="header">
                <div className="dropdown me-3">
                    <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Select store
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Store 1</a></li>
                        <li><a className="dropdown-item" href="#">Store 2</a></li>
                        <li><a className="dropdown-item" href="#">Store 3</a></li>
                    </ul>
                </div>
                <div className='bell-icon'>
                    <CiBellOn />
                </div>
                {/* <i className="fa-regular fa-bell me-3" /> */}
                <div className="me-5">
                    <div className>
                        <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="Assets/profile-image.png" className="img-fluid" alt="" />
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><a className="dropdown-item" href="#">Change Password</a></li>
                            <li><a className="dropdown-item" href="#">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header