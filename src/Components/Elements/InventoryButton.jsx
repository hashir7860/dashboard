import React from 'react'

const InventoryButton = () => {
    return (
        <div className='inventory-btn m-3'>
            <div className="inventory-name d-flex justify-content-between">
                <div>
                    <h3>Inventory</h3>
                </div>
                <div>
                    <button className="btn" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"><i className="fa-solid fa-plus" /> Add Product</button>
                    {/* <button class="btn history-btn" data-bs-toggle="modal" data-bs-target=""><i
                      class="fa-sharp fa-solid fa-plus me-1"></i>Add Product</button> */}
                </div>
                <div className="modal fade modal-lg" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Add Product</h1>
                                <span className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                {/* <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                            </div>
                            <div className="modal-body">
                                <div className=" d-flex justify-content-between flex-wrap">
                                    <div>
                                        <label htmlFor="Product Name">Product name</label><br />
                                        <input type="text" placeholder="Product name" name id className="mt-1" /><br />
                                        <input className="mt-2" type="text" placeholder="Product name" name id />
                                    </div>
                                    <div>
                                        <label htmlFor="Product Name">Quantity</label><br />
                                        <input type="text" placeholder="Quantity" name id className="mt-1" /><br />
                                        <input type="text" placeholder="Quantity" name id className="mt-2" />
                                    </div>
                                    <div>
                                        <label htmlFor="Product Name">SKU/Barcode</label><br />
                                        <input type="text" placeholder="SKU/Barcode" name id className="mt-1" /><br />
                                        <input type="text" placeholder="SKU/Barcode" name id className="mt-2" />
                                    </div>
                                    <div>
                                        <label htmlFor="Product Name">Expiration date</label><br />
                                        <input type="text" placeholder="DD/MM/YY" name id className="mt-1" /><br />
                                        <input type="text" placeholder="DD/MM/YY" name id className="mt-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer justify-content-between">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                    </svg>
                                    <a href="#" className="text-black"> Add another inventory</a>
                                </div>
                                <button className="btn" data-bs-target="modal" data-bs-toggle="modal">Add
                                    Inventory</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InventoryButton