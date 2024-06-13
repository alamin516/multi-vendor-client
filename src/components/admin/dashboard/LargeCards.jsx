import React from 'react'
import LargeCard from './LargeCard'

const LargeCards = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5'>
        <LargeCard/>
        <LargeCard/>
        <LargeCard/>
        <LargeCard/>
        <LargeCard/>
    </div>
  )
}

export default LargeCards