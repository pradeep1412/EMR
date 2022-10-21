import React from "react";
import { Typography } from "@mui/material";
import Link from "next/link";

const nav_link = [
  {
    path:'/signup',
    display:'Signup'
  },
  {
    path:'/login',
    display:'Login'
  },
]

export const Header = () =>{
  return(
    <header className="header_container">
      <div className="header_container_left">
        <div className="header_container_left_icon_text">
          <Typography className="header_container_left_text" variant="h5"> 
            Smart Healthcare System 
          </Typography> 
        </div>
      </div>
      <div className="header_container_right">
        {
          nav_link.map((value,index)=>(
            <Link href={value.path} key={index} >
            <div className="header_container_right_items">{value.display}</div>
            </Link>
          ))
        }

      </div>  
    </header>
    
  )
}