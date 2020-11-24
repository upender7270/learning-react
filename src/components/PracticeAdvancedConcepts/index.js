import React, { Component } from 'react'
import ViewEditToggle from '../ViewEditToggle'
import CollapseExpand from '../CollapseExpand'
import DisplayMouseCoordinates from '../DisplayMouseCoordinates'
import DeviceTypeText from '../DeviceTypeText'

class PracticeAdvancedConcepts extends Component {
   render() {
      return (
         <div className='flex flex-col items-center my-8'>
            <h1 className='text-3xl font-bold mb-2'> HOC's Usage </h1>
            <div className='py-4 flex flex-col items-center bg-gray-300 w-full px-2'>
               <h2 className='text-xl font-bold'> ViewEditToggle </h2>
               <ViewEditToggle defaultTitle='Click on the edit button to start editing' />
            </div>
            <div className='py-4 flex flex-col items-center bg-gray-400 w-full'>
               <h2 className='text-xl font-bold'> CollapseExpand </h2>
               <CollapseExpand
                  list={[
                     { id: 1, name: 'Eggs' },
                     { id: 2, name: 'Bread' },
                  ]}
               />
            </div>
            <div className='py-4 flex flex-col items-center bg-gray-300 w-full'>
               <h2 className='text-xl font-bold'> DeviceTypeText </h2>
               <DeviceTypeText />
            </div>
            <h1 className='text-3xl font-bold mb-2 mt-4'>
               Render Props Usage{' '}
            </h1>
            <div className='py-4 flex flex-col items-center bg-gray-300 w-full'>
               <h2 className='text-xl font-bold'>DisplayMouseCoordinates</h2>
               <DisplayMouseCoordinates />
            </div>
         </div>
      )
   }
}

export default PracticeAdvancedConcepts
