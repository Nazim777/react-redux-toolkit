import React,{ useState} from 'react'
import { adduser } from '../redux/features/Userslice'
import { useDispatch } from 'react-redux'

const Registration = () => {
    const handleSubmit=(e)=>{
        e.preventDefault()
    }

    const [input, setinput] =useState({
        name:'',
        email:'',
        password:''
    })


   const hanleinput=(e)=>{
        setinput((prevstate)=>({
            ...prevstate,
            [e.target.name]:e.target.value
        }))
    }
  const dispatch= useDispatch()
   
       const senduser=()=>{
           dispatch(adduser(input))

       }


   
   
  return (
    <div className='container'>
        <form action="" className='mt-5' onSubmit={handleSubmit}>
            <input type="text" className="form-control" value={input.name} name='name' onChange={hanleinput} placeholder='name' /> <br />
            <input type="email" className="form-control" value={input.email} name='email' onChange={hanleinput} placeholder='email' /> <br />
            <input type="password" className="form-control" value={input.password} name='password' onChange={hanleinput} placeholder='password' /> <br />
            <button type='submit' className='btn btn-info' onClick={senduser}>Registration</button>

        </form>
      
    </div>
  )
}

export default Registration
