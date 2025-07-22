import { Outlet } from "react-router";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div className=" flex flex-col justify-start items-center min-h-screen bg-gray-100">
      <Navigation />

      <div className="flex flex-col flex-1 w-full max-w-7xl border-[0.5px] border-gray-600 mx-auto px-4 rounded-xl">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
