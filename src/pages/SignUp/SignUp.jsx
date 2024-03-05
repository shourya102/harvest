import BasicInput from "../../components/BasicInput/BasicInput.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import userService from "../../services/UserService.js";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const register = () => {
    userService
      .register({ firstName, lastName, username, email, password })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen px-2">
      <div className="sm:bg-base-color rounded-lg sm:shadow-md flex flex-col sm:p-6">
        <h1 className="text-title my-5 text-base-textRevnpm sm:text-blue-600 font-bold">
          Register
        </h1>
        <div className="flex flex-col space-y-4">
          <div className="flex space-x-2">
            <BasicInput
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              validation={false}
              placeholder="First Name"
            />
            <BasicInput
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              validation={false}
              placeholder="Last Name"
            />
          </div>
          <BasicInput
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <BasicInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <BasicInput
            validated={/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&?]).{8,}$/.test(
              password,
            )}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <BasicInput
            validated={confirmPassword === password}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <button
          onClick={register}
          className="bg-gradient-to-r shadow-md from-blue-600 to-blue-800 p-3 text-white font-bold rounded-full mt-8"
        >
          Sign up!
        </button>
        <div className="text-center mt-5 space-x-1">
          <span>Already have an account?</span>
          <Link className="text-blue-600" to="/sign-in">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
