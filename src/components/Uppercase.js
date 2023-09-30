
import React,{useState} from 'react'




function Uppercase(props) {
  const [text, setText] = useState('');
  function handleChange(event){
    setText(text.toUpperCase())
  }
  
  const handeledOnchnage=(event)=>{
        setText(event.target.value)

  }
  return (
    <div className="container">
      
      <div className="form-group">
    <label for="email">Convert text into upper case:</label>
    <textarea className="form-control" rows="8" value={text} onChange={handeledOnchnage}></textarea>
    <input type="button"  value="Convert to Uppercase" className="btn btn-default btn-primary px-5 my-5" onClick={handleChange} />
      </div>
      </div>
  );
}

export default Uppercase;