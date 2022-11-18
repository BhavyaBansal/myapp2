import React from 'react'

export default function Alert(props) {
    const capatalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{height:'50px'}}>
      {props.alert &&
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        {/* If props.alert is null so do nothing otherwise go inside */}
        <strong>
          {capatalize(props.alert.type)} :{props.alert.msg}
        </strong>
        {/* <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button> */}
      </div>}    
      </div>
  );
}
