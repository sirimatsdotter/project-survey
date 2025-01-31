import React from 'react'

const ProgressBar = ( {section} ) => {

  let progress = section * 20
  let width = ( progress / 100 ) * 200
  
  return (
    <div className="progress-container">
    <div className="progress-bar">
      <div style={{width: `${width}px`}} className="progress-fill">
        <p>{progress} %</p>
      </div>
    </div>
    </div>

  )

}

export default ProgressBar