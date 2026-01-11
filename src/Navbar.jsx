import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div style={{padding:"10px",marginTop:"-19px",
        display:"flex",flexDirection:"row",gap:"300px",width:"1500px" ,justifyContent:"center",alignItems:"center",
        backgroundColor:"#1926af5a",
        fontSize:"20px",
        
    }}>
        <NavLink id="nava" to="/">Home</NavLink>
            
        <NavLink id="nava2"to="/paste">Paste</NavLink>

       
    </div>
  )
}

export default Navbar
