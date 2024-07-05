import { FcSearch } from "react-icons/fc";
import { IoFilterSharp } from "react-icons/io5";
import { MdToggleOff } from "react-icons/md";
import { MdToggleOn } from "react-icons/md";

const Nevbar = ({ bgColor, color, toggleButtun, toggle }) => (
  <>
    <div className="nav-bar">
      <div
        className="logo"
        style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
      >
        WDM
        <div onClick={toggleButtun}>
          {toggle ? (<MdToggleOn /> ): (<MdToggleOff />)}
        </div>
      </div>
      <div
        className="search"
        style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
      >
        <div className="left">
          {" "}
          <FcSearch /> Search here
        </div>
        <div className="right">
          <IoFilterSharp /> filter
        </div>
      </div>
      <div
        className="seller"
        style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
      >
        Become a seller
      </div>
    </div>
  </>
);

export default Nevbar;
