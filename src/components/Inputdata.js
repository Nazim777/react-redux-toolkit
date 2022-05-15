import React,{useState} from 'react'

const Inputdata = () => {
    const [data, setdata] =useState(
        {
            email:'',
            password:''
        }
    )
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
/*
    const handleChange=(e)=>{
      setdata((prevstate)=>({
          ...prevstate,
          [e.target.name]:e.target.value
      }))
    }
    */
   const handleChange=(e)=>{
       setdata((pre)=>({
           ...pre,
           [e.target.name]:e.target.value
       }))
   }
  return (
    <div className='container mb-10'>
        <form action="" onSubmit={handleSubmit}>
            
        <div className="form-floating mb-20 mt-5 ">
     <input type="email" name='email' value={data.email} onChange={handleChange} className="form-control" id="email" placeholder="email"/>
      <label>Email address</label>
    </div>
     <div className="form-floating  mt-3">
     <input type="password" name='password'  onChange={handleChange} value={data.password} className="form-control" id="Password" placeholder="Password"/>
      <label >Password</label>
      <button className='btn btn-primary' onClick={()=>{console.log(data)}}>login</button>
       </div>

       </form>
 </div>
       
  )
}

export default Inputdata
