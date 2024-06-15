import React from 'react'
import SalesChart from './SalesChart'

const Charts = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 py-10 gap-5'>
      <SalesChart/>
      <div>2</div>
    </div>
  )
}

export default Charts