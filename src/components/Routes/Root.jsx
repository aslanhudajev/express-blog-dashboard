import Header from "../Parts/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

const Root = () => {
  return (
    <div className="root flex flex-col">
      <Header />
      <main className="flex flex-col p-4">
        <Outlet />
      </main>
      <Toaster />
    </div>
  );
};

export default Root;
