import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import {  useSelector } from "react-redux";
import { addToPaste, updateToPaste } from "../redux/pasteSlice.jsx";
import { useSelector } from 'react-redux';
function Home() {
  const [title, setTitle] = useState("")
  const [value, setValue] = useState("")
  const [searchParams, setSearchParams] = useSearchParams()
  const pasteId = searchParams.get("pasteId")
 const allPaste=useSelector((state)=>state.paste.pastes);
 useEffect(() => {
  if(pasteId){
    const paste=allPaste.find((p)=>p._id===pasteId);
    setTitle(paste.title)
    setValue(paste.content)
  }
 }, [pasteId])
 
      
  const dispatch = useDispatch()
  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString()
    }

    if (pasteId) {
      //Update
      dispatch(updateToPaste(paste))
    } else {
      dispatch(addToPaste(paste))

    }
    //After Creattion an Update Clear Form\
    setTitle("")
    setValue("")
    setSearchParams({})

  }


  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", border: "1px solid transparent", padding: "20px", width: "1200px", margin: "20px auto", }}>
      <div style={{ display: "flex", flexDirection: "row", gap: "312px" }}>
        <input
          style={{ height: "20px", width: "300px", padding: " 0.6em 1.2em", borderRadius: "10px" }}

          type="text" value={title} placeholder='Enter The Text'

          onChange={(e) => setTitle(e.target.value)} />
        <button onClick={createPaste}>{pasteId ? "Update My Paste" : "Create My Paste"}</button>

      </div>
      <div>
        <textarea type="textarea" placeholder='Enter Text To Paste' value={value} onChange={(e => setValue(e.target.value))} style={{borderRadius:"15px"}} />

      </div></div>
  )
}

export default Home
