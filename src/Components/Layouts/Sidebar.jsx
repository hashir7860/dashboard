import React from 'react'

const Sidebar = () => {
    return (
        <div className='left-sidebar'>
            <div className="p-3 sidebar" id="mySidebar">
                <div className="sidebar-toogle-container">
                    <span id="sidebar-toogle" role="button">
                        ☰
                    </span>
                </div>
                <div className="logo border-bottom text-center pt-3 pb-4">Logo</div>
                <ul className="list-unstyled p-3">
                    <li className="p-2 mt-4 active">
                        <a href="#" className="text-decoration-none d-flex">
                            <img src="Assets/Dashboard.svg" alt="" className="pe-3" />
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li className="p-2 mt-4">
                        <a href="inventory.html" className="text-decoration-none d-flex">
                            <img src="Assets/Inventory.svg" className="pe-3" alt="" />
                            <span>Inventory</span>
                        </a>
                    </li>
                    <li className="p-2 mt-4">
                        <a href="#" className="text-decoration-none d-flex">
                            <img src="Assets/Analytics.svg" className="pe-3" alt="" />
                            <span>Analytics</span>
                        </a>
                    </li>
                    <li className="p-2 mt-4">
                        <a href="alerts.html" className="text-decoration-none  d-flex">
                            <img src="Assets/Allerts.svg" className="pe-3" alt="" />
                            <span>Alerts</span>
                        </a>
                    </li>
                    <li className="p-2 mt-4">
                        <a href="recomendations.html" className="text-decoration-none d-flex">
                            <img src="Assets/Recommendations.svg" className="pe-3" alt="" />
                            <span>Recommendation</span>
                        </a>
                    </li>
                    <li className="p-2 mt-4 ">
                        <a href="feedback.html" className="text-decoration-none d-flex">
                            <img src="Assets/Feedback.svg" className="pe-3" alt="" />
                            <span>Feedback</span>
                        </a>
                    </li>
                    <li className="p-2 logout">
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


const sidebar = document.querySelector('.sidebar');
const sidebarButtonToogle = document.querySelector('#sidebar-toogle');
const sidebarItemsText = document.querySelectorAll('.sidebar-item-text');

sidebarButtonToogle.addEventListener('click', (event) => {
    // Add-Remove Expand Class - Width Handler
    sidebar.classList.toggle('expand-sidebar');

    if (sidebar.classList.contains('expand-sidebar')) {
        toogleSidebarItemtext();
    } else {
        // Wait until Transition-Animation finish
        setTimeout(() => {
            toogleSidebarItemtext();
        }, 100);
    }
});

/**
 * Show-Hide Items Text
 */
function toogleSidebarItemtext() {
    sidebarItemsText.forEach((itemText) => {
        itemText.classList.toggle('hidden');
    });
}
export default Sidebar