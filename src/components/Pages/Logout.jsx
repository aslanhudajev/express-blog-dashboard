import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <section className="error flex flex-col justify-center items-center h-svh gap-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Are you sure you want to log out?
      </h1>
      <Button onClick={handleLogout}>Log out</Button>
    </section>
  );
};

export default Logout;
