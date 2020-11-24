import React, { useState, useEffect } from 'react'
import withToggle from '../../hocs/withToggle'

const ViewEditToggle = ({ toggle, toggleStatus, defaultTitle }) => {
   const [title, setTitle] = useState(defaultTitle)

   const updateTitle = (event) => {
      setTitle(event.target.value)
   }

   return (
      <div className='flex items-center'>
         {toggleStatus ? (
            <input
               className='border-2 border-blue-500 p-1 focus:outline-none'
               type='text'
               value={title}
               onChange={updateTitle}
            />
         ) : (
            <p>{title}</p>
         )}
         <button
            className='ml-2 px-2 py-1 bg-blue-500 rounded text-white focus:outline-none'
            onClick={toggle}
         >
            {toggleStatus ? 'Cancel' : 'Edit'}
         </button>
      </div>
   )
}

export default withToggle(ViewEditToggle)
