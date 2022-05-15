import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
// this is with userreducer
const User = () => {
  const {name, age, height}=  useSelector((e)=>{
        return e

    })
    const dispatch= useDispatch()
    const updatename=()=>{
        dispatch({type:'updatename',payload:'Abdur Rahman'})


    }
    const updateage=()=>{
        dispatch({type:'updateage',payload:25})
    }
    const updateheight=()=>{
        dispatch({type:'updateheight',payload:5.6})
    }
  return (
    <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{height}</h1>
        <button onClick={()=>{updatename()}}>update name</button>
        <button onClick={()=>{updateage()}}>update age</button>
        <button onClick={()=>{updateheight()}}>update height</button>
      
    </div>
  )
}

export default User

