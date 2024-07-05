import Nevbar from "./components/Nevbar";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";
import Rightbar from "./components/Rightbar";
import { data, data2 } from "./Data";
import { useState } from "react";

const App = () => {
  const [bgColor, setbgColor] = useState("blue");
  const [color, setColor] = useState("white");
  const [toggle, setToggle] = useState(false);

  const toggleButtun = () => {
    setToggle(!toggle);
    if (toggle) {
      setbgColor("gray");
      setColor("black");
      document.querySelector("body").style.backgroundColor = "black";
    } else {
      setbgColor("blue");
      setColor("white");
      document.querySelector("body").style.backgroundColor = "white";
    }
  };

  // 232D3f
  return (
    <>
      <Nevbar
        bgColor={bgColor}
        color={color}
        toggleButtun={toggleButtun}
        toggle={toggle}
      />
      <div className="container">
        <div className="side-bar">
          <Sidebar bgColor={bgColor} color={color} />
        </div>
        <div className="post">
          {data.map((d) => (
            <Post key={d.id} data={d} bgColor={bgColor} color={color} />
          ))}
        </div>
        <div className="right-bar">
          {data2.map((d) => (
            <Rightbar key={d.id} data={d} bgColor={bgColor} color={color} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
