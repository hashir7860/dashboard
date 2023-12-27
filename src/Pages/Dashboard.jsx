import React from 'react'
import Sidebar from '../Components/Layouts/Sidebar'
import Main from '../Components/Layouts/Main'

const Dashboard = () => {
  return (
    <div className='d-flex'>
        <Sidebar/>
        <Main/>
    </div>
  )
}

export default Dashboard