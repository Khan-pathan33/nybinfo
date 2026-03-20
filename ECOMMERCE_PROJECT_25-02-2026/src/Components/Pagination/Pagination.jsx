import React from 'react'

const Pagination = ({ page, setPage, totalPages }) => {
  return (
     <div className="flex gap-4 items-center justify-end mt-6">

      <button
        className="px-3 py-1 bg-blue-500 rounded-lg "
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>

      <span>Page {page} of {totalPages}</span>

      <button
        className="px-3 py-1 bg-blue-500 rounded-lg"
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>

    </div>
  )
}

export default Pagination