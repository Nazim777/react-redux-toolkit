import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { additem } from '../redux/features/Userslice'

const Sliceuser = () => {
const data= useSelector((state)=> state.user.students)
const dispatch= useDispatch()
const submitdata=()=>{
   dispatch(additem({
       id:1,
       name:'Mohammad Naim Uddin',
       age:22,
       height:5.9
   }))
}


  return (
    <div className='container'>
        {
            data.map((item, index)=>{
                return(



                    <div className="card" key={index} >
                  <ul className="list-group list-group-flush">
                 <li className="list-group-item">name: {item.name}</li>
                <li className="list-group-item">age: {item.age}</li>
               <li className="list-group-item">height: {item.height}</li>
                  </ul>
                </div>
                    
                )
            })
        }
        
        <button onClick={()=>{submitdata()}}>submitdata</button>
      
    </div>
  )
}

export default Sliceuser
