import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaBasketShopping } from "react-icons/fa6";
import { IoMdChatboxes } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BiSolidLogOut } from "react-icons/bi";
import { IoIosWallet } from "react-icons/io";









const Sidebar = ({bgColor, color}) => {
  return (
    <div>
      <div className="side_bar_content" style={{backgroundColor:`${bgColor}`, color:`${color}`}}>
        <div className="top_content">
          <div className="item"><FaHome className='icons' />
          Home</div>
          <div className="item"><IoIosNotifications className='icons' />
          Notification</div>
          <div className="item"><FaBasketShopping className='icons' />
          Shop</div>
          <div className="item"><IoMdChatboxes className='icons'/>
          Conversation</div>
          <div className="item"><IoIosWallet className='icons' />
          Wallter</div>
          <div className="item"><FaYoutube className='icons' />
          Subscription</div>
          <div className="item"><CgProfile className='icons' />
          My Profile</div>
        </div>
        <div className="bottom_content item"><BiSolidLogOut />
        Log Out</div>
      </div>
    </div>
  )
}

export default Sidebar
