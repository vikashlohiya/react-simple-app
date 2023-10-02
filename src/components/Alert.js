
import React from 'react'




function Alert(props) {
  
  return (
    <div style={{height:'50px'} } className="my-2" >{
    props.msg && <div className="alert alert-success" role="alert">
  {props.msg}
</div>
}
</div>
  );
}

export default Alert;