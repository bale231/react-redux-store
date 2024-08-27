import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <div className="w-full text-white relative flex justify-center overflow-y-auto">
      <div className="bg-[#222222] max-w-[1024px] w-full">
        <div>
          <Searchbar />
          <Outlet />
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default App;
