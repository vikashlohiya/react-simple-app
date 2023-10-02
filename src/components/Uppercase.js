
import React,{useState} from 'react'




function Uppercase(props) {
  const [text, setText] = useState('');
  function handleChange(event){
    if(text.length>0){
    setText(text.toUpperCase())
    props.showAlert('Text converted successfully.');
    }
  }
  
  const handeledOnchnage=(event)=>{
        setText(event.target.value)
        
  }
  const handleLower=()=>{
    if(text.length>0){
    setText(text.toLocaleLowerCase())
    props.showAlert('Text converted successfully.');
    }
  }

  const formatString=()=>{
    if(text.length>0){
     let concateString='';
     let data=text.split(' ');
     data.forEach(element => {
    //  console.log(element)
    concateString += element.charAt(0).toUpperCase()+element.slice(1,element.length).toLocaleLowerCase()+' ';
    setText(concateString)
     });
     
    }
  }

  return (
    <div className="container">
      
    <div className="form-group">
    <h2 for="email">Convert text into upper case:</h2>
    <textarea className="form-control my-4" rows="8" value={text} onChange={handeledOnchnage}></textarea>
     <p><span className='fw-bold'>Total Word Count: </span>{text.split(' ').filter(arr=>arr.length!=0).length}</p>
    <input type="button"  value="Convert to Uppercase" className="btn btn-default btn-primary px-5 my-3 mx-2" onClick={handleChange} />
    <input type="button"  value="Convert to Lowercase" className="btn btn-default btn-primary px-5 my-3 mx-2" onClick={handleLower} />
    <input type="button"  value="Capitalize First Letter" className="btn btn-default btn-primary px-5 my-3 mx-2" onClick={formatString} />
    <input type="button"  value="Clear Text" className="btn btn-default btn-primary px-5 my-3" onClick={()=>{setText('')}} />
      </div>
      </div>
  );
}

export default Uppercase;