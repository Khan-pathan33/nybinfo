import React from 'react'

const ViewToggle = ({ setView }) => {
  return (
    <div>
        <button className='mr-2 px-3 py-1 bg-blue-500'
        onClick={() => setView("grid")}>
            Grid
        </button>
<button className='px-3 py-1 bg-blue-500'
onClick={()=> setView('list')}>List

</button>
    </div>
  )
}

export default ViewToggle