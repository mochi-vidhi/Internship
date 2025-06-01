import React,{useRef} from 'react'
import './contact.css'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import { useNavigate } from 'react-router-dom'; 
import emailjs from '@emailjs/browser'

export default function Contact({mode,id}) {
  const [form,setForm] = useState({
     name:'',
     number:'',
     email:'',
     msg:'',
  })
  const navigate = useNavigate();
  const formData = useRef();

  const handleChange = (e)=>{
     const {name,value} = e.target;
     setForm((prev)=>({...prev,[name]:value}));
  }
  const handleSubmit = (e)=>{
     e.preventDefault();
     const uniqueId = uuidv4();
     const newSubmittion = {
       ...form,
       id:uniqueId
     }
     console.log(newSubmittion);

     emailjs.sendForm("service_viyzh8c","template_fjew72n",formData.current,"ldBhbeyx_pC2VXXyr")
     .then(()=>{
      alert('તમારો સંદેશ મોકલવામાં આવ્યો છે!');
      formData.current.reset()
    })
     .catch(()=>alert('કૃપા કરીને માફ કરો, તમારી માહિતી મોકલવામાં સમસ્યા આવી છે. ફરી પ્રયાસ કરો.'))     

      setForm({name:'',number:'',email:'',msg:''});
    //  navigate('/display',{state:newSubmittion});
  }
  
  return (
    <div id={id} className={`form-section ${mode}`}>
      <h2>Contact Us (અમારો સંપર્ક કરો)</h2>
        <form ref={formData} onSubmit={handleSubmit}>
            <label>Enter Your Name (તમારું નામ)</label>
            <input type='text' name="name" value={form.name} onChange={handleChange}/>
            <label>Enter Your Mobile Number (મોબાઈલ નંબર)</label>
            <input type='number' name="number" value={form.number} onChange={handleChange} />
            <label>Enter Your Email (ઈમેઈલ ) </label>
            <input type='email' name="email" value={form.email} onChange={handleChange}/>
            <label>Enter Your message (તમારો સંદેશ લખો...)</label>
            <textarea type='text' name="msg" value={form.msg} onChange={handleChange}/>
            <button type="submit">Send (મોકલો)</button>
        </form>
        
    </div>
  )
}
