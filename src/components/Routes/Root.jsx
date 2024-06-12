import Header from "../Parts/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="root flex flex-col">
      <Header />
      <main className="flex flex-col p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
