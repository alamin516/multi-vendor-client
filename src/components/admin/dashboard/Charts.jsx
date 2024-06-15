import React from 'react'
import SalesChart from './SalesChart'
import Visitors from './Visitors'

const Charts = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 py-10 gap-5'>
      <SalesChart/>
      <Visitors/>
    </div>
  )
}

export default Charts