import { createSlice } from "@reduxjs/toolkit";
const userrslice= createSlice({
    name:'user',
    initialState:{
     
        students:[
            {
                id:1,
                name:'Mohammad Nazim Hosasain',
                age:22,
                height:5.8
            },
            { 
                id:2,
                name:'Rahim Uddin',
                age:26,
                height:5.9
            },
            {    
                id:3,
                name:'Abdur Rahman',
                age:28,
                height:5.6
            }
        ],
        teacher:[]
      
    },
    reducers:{
       additem:(state, action)=>{
           state.teacher=action.payload
           console.log(state.teacher)
          
         
       },
       adduser:(state,action)=>{
           state.teacher=action.payload
           console.log(state.teacher)
       }
      


    }
})


export default userrslice.reducer 
export const  {additem,adduser} = userrslice.actions