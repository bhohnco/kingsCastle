import React, { useRef } from 'react'

 function Toggle(props) {
  const toggle = useRef()
  const checkbox = useRef()

   function handleToggle() {
    if (props.onChange) props.onChange()
    toggle.current.classList.toggle('toggled')
    checkbox.current.checked = !checkbox.current.checked
  }

  return (
      <>
        <input
            ref={checkbox}
            name={props.name}
            className='toggle-checkbox'
            type='checkbox'
            defaultChecked={props.value}
            value={props.value || false}
            aria-label="Toggle Button Check Box"
        />
        <span
            ref={toggle}
            onClick={handleToggle}
            className={props.checked ? 'toggled toggle-switch' : 'toggle-switch'}
        >
        <span className='toggle'/>
      </span>
      </>
  )
}

export default Toggle;

