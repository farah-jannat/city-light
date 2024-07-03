import Nevbar from "./components/Nevbar";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";
import Rightbar from "./components/Rightbar";
const App = () => {
  return (
    <>
      <Nevbar />
      <div className="container">
        <div className="side-bar">
          <Sidebar />
        </div>
        <div className="post">
          <Post />
        </div>
        <div className="right-bar">
          <Rightbar />
        </div>
      </div>
    </>
  );
};

export default App;
