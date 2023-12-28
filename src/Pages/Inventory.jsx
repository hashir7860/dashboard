import React from 'react'
import Sidebar from '../Components/Layouts/Sidebar'
// import Main from '../Components/Layouts/Main'
import Header from '../Components/Elements/Header'
import InventoryButton from '../Components/Elements/InventoryButton'
import Categorybtn from '../Components/Elements/Categorybtn'
import Tableinven from '../Components/Elements/Tableinven'


const Inventory = () => {
  return (
    <div className='d-flex'>
      <Sidebar />
      <div className='main-content'>
        <Header/>
        <InventoryButton/>
        <Categorybtn/>
        <Tableinven/>
      </div>
    </div>
  )
}

export default Inventory