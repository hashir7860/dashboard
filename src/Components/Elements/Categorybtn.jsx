import React from 'react'

const Categorybtn = () => {
  return (
    <div className='category-search m-3'>
      <div className="d-flex justify-content-between mt-5 mb-3 flex-wrap">
        <div className="d-flex flex-wrap">
          <div className="category-container bg-light me-3 rounded-3">
            <input type="checkbox" className="category-checkbox" id="categoryCheckbox1" />
            <label className="category-button" htmlFor="categoryCheckbox1" tabIndex={0}>
              Category
              <div className="chevron-down">▼</div>
            </label>
            <div className="category-content">
              <a href="#">Category 1</a>
              <a href="#">Category 2</a>
              <a href="#">Category 3</a>
            </div>
          </div>
          <div className="category-container bg-light me-3 rounded-3">
            <input type="checkbox" className="category-checkbox" id="categoryCheckbox2" />
            <label className="category-button" htmlFor="categoryCheckbox2" tabIndex={0}>
              Category
              <div className="chevron-down">▼</div>
            </label>
            <div className="category-content">
              <a href="#">Category 4</a>
              <a href="#">Category 5</a>
              <a href="#">Category 6</a>
            </div>
          </div>
        </div>
        <div>
          <input className="mt-2 bg-light" type="text" placeholder="Product name" name id />
        </div>
        {/* <div class="dropdown me-3 rounded-2 bg-light" style="border: 1px solid black;">
              <button class="btn search-icon" type="text" data-bs-toggle="search-icon">
                  Search Product
              </button>
          </div> */}
      </div>

    </div>
  )
}

export default Categorybtn