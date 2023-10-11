import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=(event)=>{
      event.preventDefault();
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handledownClick =(event)=>{
      event.preventDefault();
      let newText=text.toLowerCase();
      setText(newText);
    }

    const handleCopyText=(event)=>{
      event.preventDefault();
      let text=document.getElementById("textAreaBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const handleClearText=(event)=>{
      event.preventDefault();
      let newText="";
      setText(newText)
    }

    const [text,setText]=useState("Enter text here"); 
    
  return (
    <>
    <form>
  <div className="form-group my-3">
   <h1>{props.heading}</h1>
    <textarea className="form-control" value={text} onChange={(e)=>handleOnChange(e)} id="textAreaBox" rows="8"></textarea>
    <button className='btn btn-primary' onClick={handleUpClick}>To Uppercase</button>
    <button className='btn btn-primary mx-1' onClick={handledownClick}>To Lowercase</button>
    <button className='btn btn-primary mx-1' onClick={handleCopyText}>Copy Text</button>
    <button className='btn btn-primary mx-1' onClick={handleClearText}>Clear Text</button>
  </div>
   
   <div className="container">
    <p>words: {text.split(" ").length} characters: {text.length}</p>
    <p>{0.008*text.split(" ").length} minutes read</p>
    <h3>preview</h3>
    <p>{text}</p>
   </div> 
</form>
</>
  )
}
