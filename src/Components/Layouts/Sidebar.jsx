import React, { useState } from 'react'
import { HiBars3, RiApps2Line } from "react-icons/hi2";

const Sidebar = () => {
    const[isOpen ,setIsOpen]=useState(true);
    const toogle = () => setIsOpen (!isOpen);

    return (
        <div className='left-sidebar'>
            <div style={{width: isOpen ? "200px" : "50px"}} className="p-3 sidebar" id="mySidebar">
                <div className="sidebar-toogle-container">
                    <span id="sidebar-toogle" role="button">
                    <HiBars3    onClick={toogle}/>
                    </span>
                </div>
                <div className="logo border-bottom text-center pt-3 pb-4" style={{display: isOpen ? "block" : "none"}}>Logo</div>
                <ul className="list-unstyled p-3 ps-0">
                    <li className="p-2 ps-0 mt-4 text">
                        <a href="#" className="text-decoration-none d-flex p-2 ps-0 active">
                            <img src="Assets/Dashboard.svg" alt="" className="pe-3" />
                            Dashboard
                        </a>
                    </li>
                    <li className="p-2 ps-0 mt-4">
                        <a href="inventory.html" className="text-decoration-none d-flex">
                            <img src="Assets/Inventory.svg" className="pe-3" alt="" />
                            <span>Inventory</span>
                        </a>
                    </li>
                    <li className="p-2 ps-0 mt-4">
                        <a href="#" className="text-decoration-none d-flex">
                            <img src="Assets/Analytics.svg" className="pe-3" alt="" />
                            <span>Analytics</span>
                        </a>
                    </li>
                    <li className="p-2 ps-0 mt-4">
                        <a href="alerts.html" className="text-decoration-none  d-flex">
                            <img src="Assets/Allerts.svg" className="pe-3" alt="" />
                            <span>Alerts</span>
                        </a>
                    </li>
                    <li className="p-2 ps-0 mt-4">
                        <a href="recomendations.html" className="text-decoration-none d-flex">
                            <img src="Assets/Recommendations.svg" className="pe-3" alt="" />
                            <span>Recommendation</span>
                        </a>
                    </li>
                    <li className="p-2 ps-0 mt-4 ">
                        <a href="feedback.html" className="text-decoration-none d-flex">
                            <img src="Assets/Feedback.svg" className="pe-3" alt="" />
                            <span>Feedback</span>
                        </a>
                    </li>
                    <li className="p-2 ps-0 logout">
                        <a href="#" className="text-decoration-none d-flex">
                            <img src="Assets/Logout.svg" className="pe-3" alt="" />
                            <span>Logout</span>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Sidebar