import React from 'react'
import "../style/Loader.css"
const Loader = ({ err }) => {
  return (
    <>
      <div>
        {err ? <h2>{err}</h2>
          :
          <h2>Loading<span>...</span></h2>
        }
      </div>
    </>
  )
}

export default Loader