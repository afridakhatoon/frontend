import React from 'react'
import Appheader from '../admin/sharecomponents/Appheader'
import Appsidebar from '../admin/sharecomponents/Appsidebar'
import { Outlet } from 'react-router-dom'
import Appfooter from '../admin/sharecomponents/Appfooter'

function Masterpage() {
  return (
    <div>
      <Appheader />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-2'>
            <Appsidebar />
          </div>
          <div className='col-10'>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      <Appfooter />
    </div>
  )
}

export default Masterpage
