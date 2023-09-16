import React ,{useState} from 'react'

function TextForm2() {
    const [t , setTt]=useState("Enter Text Here");

    const change=(event)=>{
        
        setTt(event.target.value);

    }
  return (
    <div>
      <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" value={t} onChange={change} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
    </div>
  )
}

export default TextForm2
