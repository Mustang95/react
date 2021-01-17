import React from 'react'
import '../style/Modal.css'

function Modal(props) {
    const onClose = (event) => {
      debugger
      props.onClose && props.onClose(event)
    }
    return (
       <>
       {props.show ? 
       <div className="modal" id="modal">
        <h2>Modal Window</h2>
        <div className="content">{props.children} {props.reference}aaa</div>
        <div className="actions">
          <button className="toggle-button" onClick={onClose}>
            close
          </button>
        </div>
      </div>
       :
      null }
      
       </>
    )
}

export default Modal