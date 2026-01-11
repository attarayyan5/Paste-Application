import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../index.css'
import { FaCalendarAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import {removePaste } from "../redux/pasteSlice.jsx";
import {
  FaCopy,
  FaEdit,
  FaShareAlt,
  FaTrash,
  FaEye
} from "react-icons/fa";
import toast from 'react-hot-toast';
function Paste() {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm,setSearchTerm]=useState("")

 





  // console.log(pastes)
  const dispatch = useDispatch()

  const filteredData = pastes.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()))

 function handleEdit(){
    
  }
   function handleDelete(pasteId){
    dispatch(removePaste(pasteId))
    
  }
   function handleCopy(){
    //  navigator.clipboard.writeText(paste?.content)
  }
   function handleView(){
    
  }
  function handleShare(pasteId){
    const sharelink=`${window.location.origin}/paste/${pasteId}`;
     navigator.clipboard.writeText(sharelink);
     toast.success("Link Generated")

  }

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", gap: "312px", justifyContent: "center", marginTop: "30px", border: "1px solid transparent" }}>


        <input
          style={{ width: "400px", padding: "15px" }}


          type="text" value={searchTerm} placeholder='Searc here' onChange={(e) => setSearchTerm(e.target.value)}

        />
      </div>
      <div style={{ display: "flex", width: "98%", flexDirection: "column", border: "1px solid transparent", gap: "15px", marginTop:"20px" }}>
        {
          filteredData.length > 0 &&
          filteredData.map(
            (paste) => {
              return (
                <div style={{ display: 'flex', justifyContent: "center", border: "1px solid white", flexDirection: "column", width: "1400px", gap: "10px", height: "150px" ,marginTop:"20px",padding:"15px",marginLeft:"42px",borderRadius:"10px"}} key={paste?._id}>


                  <div style={{ marginLeft: "600px",fontSize:"30px",fontWeight:"bold"}}>
                    {paste.title}
                  </div>

                  <div style={{ marginLeft: "600px"}}>
                    {paste.content}

                  </div>
              <div style={{display:"inline"}}>  <div className="icon-actions" style={{}}>
  {/* Edit */}
  <NavLink to={`/?pasteId=${paste?._id}`} title="Edit">
    <FaEdit />
  </NavLink>

  {/* View */}
  <NavLink to={`/paste/${paste?._id}`} title="View">
    <FaEye />
  </NavLink>

  {/* Delete */}
  <FaTrash
    title="Delete"
    onClick={() => handleDelete(paste?._id)}
  />



  {/* Share */}
  <FaShareAlt
    title="Share"
    onClick={() => handleShare(paste._id)}
  />
  {/* Copy */}
  <FaCopy style={{justifySelf:"self-end"
  }}
    title="Copy"
    onClick={() => {
      navigator.clipboard.writeText(paste?.content);
      toast.success("Copied to Clipboard");
    }}
  /></div>
    


                 <div className="date-wrapper">
      <FaCalendarAlt className="calendar-icon" />
      <input
        type="date"
        value={paste.createdAt}
       
        className="date-input"
      />
    </div></div> 

                </div>
              )
            }
          )
        }

      </div>

    </div>
  )
}

export default Paste
