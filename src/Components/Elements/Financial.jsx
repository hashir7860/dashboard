import React from 'react'

const Financial = () => {
    return (
        <div className='m-3 financial'>
            <div className="overview mt-3">
                <h6><b>Financial</b></h6>
            </div>
            <div className="row upcomming ">
                <div className="col-lg-3">
                    <div className=" bg-white p-3 rounded-4">
                        <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                            <div className="card-body-text">Total retails savings</div>
                            <div className="weeks">
                                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Week
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Month</a></li>
                                    <li><a className="dropdown-item" href="#">Year</a></li>
                                    <li><a className="dropdown-item" href="#">Days</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="p-3 d-flex justify-content-between text-center inner-card">
                            <div className="text-start">
                                <h5>4</h5>
                                <p>Savings</p>
                            </div>
                            <div>
                                <img src="Assets/pajamas_expire.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className=" bg-white p-3 rounded-4">
                        <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                            <div className="card-body-text">Cost Price Loss</div>
                            <div className="weeks">
                                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Month
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Month</a></li>
                                    <li><a className="dropdown-item" href="#">Year</a></li>
                                    <li><a className="dropdown-item" href="#">Days</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="p-3 d-flex justify-content-between text-center inner-card">
                            <div className="text-start">
                                <h5>Є-3456,99</h5>
                                <p>Losses</p>
                            </div>
                            <div>
                                <img src="Assets/pajamas_expire.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className=" bg-white p-3 rounded-4">
                        <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                            <div className="card-body-text">Retail Price Loss</div>
                            <div className="weeks">
                                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Month
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Month</a></li>
                                    <li><a className="dropdown-item" href="#">Year</a></li>
                                    <li><a className="dropdown-item" href="#">Days</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="p-3 d-flex justify-content-between text-center inner-card">
                            <div className="text-start">
                                <h5>Є10.374,99</h5>
                                <p>Losses in price</p>
                            </div>
                            <div>
                                <img src="Assets/pajamas_expire.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Financial