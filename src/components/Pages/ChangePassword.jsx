import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [changePasswordData, setChangePasswordData] = useState({
    current: "",
    password: "",
    confirm: "",
  });
  const [changeError, setChangeError] = useState(null);

  useEffect(() => {
    const authenticate = async () => {
      try {
        await axios.get("https://localhost:3000/api/dashboard/authenticate", {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
      } catch (error) {
        navigate("/login");
      }
    };

    authenticate();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (changePasswordData.password === changePasswordData.confirm) {
      try {
        await axios.post(
          "https://localhost:3000/api/dashboard/edit/password",
          {
            ...changePasswordData,
          },
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          },
        );
        toast("Password successfully changed");
        navigate("/");
      } catch (error) {
        setChangeError(error.response.data.message);
      }
    } else {
      setChangeError("Passwords do not match");
    }
  };

  return (
    <div className="login flex flex-col items-center justify-center h-svh">
      <div className="flex flex-col items-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-8">
          Change password
        </h1>
        <form
          onSubmit={handleSubmit}
          className="form-field grid w-full max-w-sm items-center gap-1.5"
        >
          <Input
            name="current"
            type="password"
            id="password"
            placeholder="Current password"
            onChange={(e) =>
              setChangePasswordData({
                ...changePasswordData,
                current: e.target.value,
              })
            }
          />
          <Input
            name="password"
            type="password"
            id="password"
            placeholder="New password"
            onChange={(e) =>
              setChangePasswordData({
                ...changePasswordData,
                password: e.target.value,
              })
            }
          />
          <Input
            name="confirm"
            type="password"
            id="password"
            placeholder="Confirm password"
            onChange={(e) =>
              setChangePasswordData({
                ...changePasswordData,
                confirm: e.target.value,
              })
            }
          />
          <Button>Submit</Button>
          {changeError ? (
            <span className=" text-red-600">{changeError}</span>
          ) : (
            <></>
          )}
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
