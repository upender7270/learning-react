import React from 'react'
import withToggle from '../../hocs/withToggle'

const CollapseExpand = ({ toggle, toggleStatus, list }) => (
   <div className='flex'>
      <p>Sample Shopping List: </p>
      <div className='ml-2'>
         <button
            onClick={toggle}
            className='px-2 py-1 bg-blue-500 rounded text-white focus:outline-none'
         >
            {toggleStatus ? 'Collapse' : 'Expand'}
         </button>
         {toggleStatus && (
            <div>
               {list.map((item) => (
                  <p key={item.id}>{item.name}</p>
               ))}
            </div>
         )}
      </div>
   </div>
)

export default withToggle(CollapseExpand)
