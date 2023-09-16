import React ,{useState}from 'react'
function TextForm(props) {
   
  const handleonclick=()=>{
    let newText=text.toLowerCase();
    setf(newText);
  }
  const handleonchange=(event)=>{
    
    f(event.target.value);
  }
  const change=(event)=>{
        
    setText(event.target.value);

}

//color:props.mode==='dark'?'white':'black'
 
  const [text , setText]=useState("Enter Text Here");
  const [f , setf]=useState("output");
  return (
<div className='container' style={{color: props.mode==='light'?'black':'white'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <label for="exampleFormControlInput1" className="form-label">Enter your text here</label>
  
     <textarea className="form-control" value={text} onChange={change}  id="exampleFormControlTextarea0" rows="5"></textarea>
     </div>
     <button className='btn btn-primary' onClick={handleonclick}>convert</button>
      <div className="mb-3">
      <label for="exampleFormControlTextarea1"  className="form-label">output</label>
       <textarea className="form-control" value={f} onChange={handleonchange} id="exampleFormControlTextarea1" rows="5"></textarea>
     </div>
    </div>
  )
}

export default TextForm
