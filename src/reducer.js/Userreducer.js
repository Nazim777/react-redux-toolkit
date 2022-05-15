import { createReducer } from "@reduxjs/toolkit"
const initialstate={
    name:'Mohammad Nazim Hossain',
    age:22,
    height:5.8
}
// this is connected with user.js
// this is a older rule to use reducer
/*
const reduceruser=(state=initialstate, action)=>{
    if(action.type==='updatename'){
        return{
            ...state,
            name:action.payload

        }
    }

    if(action.type==='updateage'){
        return{
            ...state,
            age:action.payload
        }
    }
    if(action.type==='updateheight'){
        return{
            ...state,
            height:action.payload
        }
    }
    return state

}
export default reduceruser


*/
/*
export default createReducer(initialstate,(buider)=>{
     buider.addCase('updatename',(state, action)=>{
         state.name=action.payload

     })

     buider.addCase('updateage',(state,action)=>{
         state.age= action.payload
     })
     buider.addCase('updateheight',(state,action)=>{
         state.height=action.payload
     })

})
*/
export default createReducer(initialstate,(builder)=>{
    builder.addCase('updatename',(state,action)=>{
        state.name=action.payload
    })
    builder.addCase('updateage',(state,action)=>{
        state.age= action.payload
    })
    builder.addCase('updateheight',(state,action)=>{
        state.height= action.payload
    })
})
