import React from 'react'

export default function Alert(props) {
  // const capitalize=(word)=>{
  //     let lower=word.toLowerCase();
  //     let firstletter = lower.charAt(0).toUpperCase()
  //     return firstletter + lower.slice(1);
  // }
  return (


    // if props.alert is null, it will not show the alert or anything written after it

    props.showalert && <div className="alert alert-success alert-dismissible fade show" role="alert">

      {props.showalert}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

    </div>
  )
}
