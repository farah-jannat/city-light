import { FcSearch } from "react-icons/fc";
import { IoFilterSharp } from "react-icons/io5";
const Nevbar = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="logo">WDM</div>
        <div className="search">
            <div className="left"> <FcSearch /> Search here</div>
            <div className="right"><IoFilterSharp/> filter</div>
        </div>
        <div className="seller">Become a seller</div>
      </div>
    </>
  )
}

export default Nevbar
