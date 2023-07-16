import React, { useState } from 'react'
// props.buttons = [{name:abc, id=23}]
function BtnGroup(props) {
  const [selected, setSelected] = useState(null)

  return (
    <div className="BtnGroup d-flex align-items-center justify-content-between">
      {props.buttons.map((btn) => (
        <button
          className={'btn mx-2' + (btn.id === selected ? ' yel' : '')}
          key={btn.id}
          onClick={() => {
            setSelected(btn.id)
            props.onChange(btn.val)
          }}
        >
          {btn.name}
        </button>
      ))}
    </div>
  )
}
BtnGroup.defaultProps = {
  buttons: [],
  onChange: () => {},
}

export default BtnGroup
