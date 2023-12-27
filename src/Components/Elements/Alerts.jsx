import React from 'react'

const Alerts = () => {
    return (
        <div className='alerts m-3'>
            <div className="overview mt-3">
                <h6><b>Alerts</b></h6>
            </div>
            <div className="row upcomming">
                <div className="col-lg-6">
                    <div className=" bg-white p-3 rounded-4">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <h5 className="card-body-text">Urgent alerts</h5>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Qty</th>
                                        <th scope="col">Expiration date</th>
                                        <th scope="col">Total Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Product Name</td>
                                        <td>Qty</td>
                                        <td>DD/MM/YY <span className="text-danger"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-exclamation-circle" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                                        </svg></span>
                                        </td>
                                        <td>Total Cost</td>
                                    </tr>
                                    <tr>
                                        <td>Product Name</td>
                                        <td>Qty</td>
                                        <td>DD/MM/YY <span className="text-danger"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-exclamation-circle" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                                        </svg></span>
                                        </td>
                                        <td>Total Cost</td>
                                    </tr>
                                    <tr>
                                        <td>Product Name</td>
                                        <td>Qty</td>
                                        <td>DD/MM/YY <span className="text-danger"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-exclamation-circle" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                                        </svg></span>
                                        </td>
                                        <td>Total Cost</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className=" bg-white p-3 rounded-4">
                        <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                            <div className="card-body-text">Active Alerts</div>
                        </div>
                        <div className="progress-circle-container text-center">
                            <div className="progress-circle progress-100"><span>100</span></div>
                        </div>
                        <div className="card-body-text pt-3 "><i className="fa-solid fa-circle text-danger" /> Active Alerts
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className=" bg-white p-3 rounded-4">
                        <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                            <div className="card-body-text">Active Alerts</div>
                        </div>
                        <div className="progress-circle-container text-center">
                            <div className="progress-circle progress-30"><span>5</span></div>
                        </div>
                        <div className="card-body-text pt-3 "><i className="fa-solid fa-circle text-warning" /> Active Alerts
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alerts