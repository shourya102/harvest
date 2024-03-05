import BasicInput from "../../components/BasicInput/BasicInput.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import userService from "../../services/UserService.js";
import { login } from "../../features/userSlice.js";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUser = () => {
    userService.login({ username, password }).then((res) => {
      localStorage.setItem("user", JSON.stringify(res.data));
      dispatch(login());
      navigate(-1);
    });
  };

  return (
    <div className="flex justify-center h-screen items-center py-36 px-2">
      <div className="sm:bg-base-color rounded-lg sm:shadow-md w-[30rem]  flex flex-col sm:p-6">
        <h1 className="text-title my-5 text-base-textRev sm:text-blue-600 font-bold">
          Login
        </h1>
        <div className="flex flex-col space-y-4">
          <BasicInput
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            validation={false}
            placeholder="Username"
          />
          <BasicInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            validation={false}
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          onClick={loginUser}
          className="bg-gradient-to-r shadow-md from-blue-600 to-blue-800 p-3 text-white font-bold rounded-full mt-8"
        >
          Sign in!
        </button>
        <div className="text-center mt-5 space-x-1">
          <span>Don't have an account?</span>
          <Link className="text-blue-600" to="/sign-up">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
