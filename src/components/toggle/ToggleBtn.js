import React from 'react';
import './toggleBtn.css';
function ToggleBtn(props) {
  let toggleBtnClass;

  if (props.showToggle) {
    toggleBtnClass = 'toggleBtn show';
  } else {
    toggleBtnClass = 'toggleBtn';
  }

  return (
    <div>
      <div onClick={props.active} className={toggleBtnClass}>
        <div />
        <div />
      </div>
    </div>
  );
}

export default ToggleBtn;
