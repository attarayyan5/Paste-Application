import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast';
const initialState = {
  pastes:localStorage.getItem("pastes")?JSON.parse(localStorage.getItem("pastes")):[],
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    
  addToPaste: (state, action) => {
    const paste = action.payload
    //ADDED A CHECK TO AVOID DUPLICATE PASTES BASED ON TITLE
    const isTitleExists = state.pastes.some(
        (paste) => paste.title.toLowerCase() === paste.title.toLowerCase()
      )
      const index = state.pastes.findIndex((item) => item._id === paste._id)
          if (index >= 0) {
        // If the course is already in the Pastes, do not modify the quantity
        toast.error("Paste already exist")
        return
      }
    state.pastes.push(paste)
    localStorage.setItem("pastes", JSON.stringify(state.pastes))
    toast.success("Paste Created Successfully ")
  },

    updateToPaste: (state,action) => {
      const paste=action.payload
      const index=state.pastes.findIndex((item)=>item._id===paste._id)
      if(index>=0){
        state.pastes[index]=paste;
        localStorage.setItem("pastes",JSON.stringify(state.pastes))
         toast.success("Paste updated")
      
      }
  
    },
    resetPaste: (state, action) => {
      
    },
    removePaste:(state,action)=>{
      const pasteId=action.payload;
      console.log(pasteId)
      const index=state.pastes.findIndex((item)=>
      item._id===pasteId);
      if(index>=0){
        state.pastes.splice(index,1);
        localStorage.setItem("pastes",JSON.stringify(state.pastes));
        toast.success("Paste Deleted");
      }
      
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToPaste, updateToPaste, resetPaste,removePaste } = pasteSlice.actions



export default pasteSlice.reducer