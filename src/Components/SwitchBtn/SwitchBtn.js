import './SwitchBtn.scss'

import React from 'react'

function SwitchBtn() {
  return (
    <div className="SwitchBtn">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  )
}

export default SwitchBtn
