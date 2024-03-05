import navList from "./navList.js";
import { Link, useLocation } from "react-router-dom";
import Search from "../Search/Search.jsx";
import {useEffect, useState} from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { motion } from "framer-motion";
import BasicLink from "../BasicLink/BasicLink.jsx";
import logo from "../../assets/favicon.svg";
import {
  logout,
  selectLoggedIn, selectProfile,
} from "../../features/userSlice.js";
import { useDispatch, useSelector } from "react-redux";
import BasicButton from "../BasicButton/BasicButton.jsx";
import userService from "../../services/UserService.js";

const Header = () => {
  const loggedIn = useSelector(selectLoggedIn);
  const location = useLocation();
  const [searchValue, setSearchValue] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dispatch = useDispatch();
  const [profileImage, setProfileImage] = useState(null);
  const profile = useSelector(selectProfile);

  const logoutUser = () => {
    userService.logout();
    dispatch(logout());
  };

  useEffect(() => {
    if(profile) {
      setProfileImage(profile.profileImage);
    }
  }, [profile]);

  return (
    <header className="z-10 bg-base-color flex w-full p-2 justify-between sticky">
      <div className="flex space-x-10 items-center">
        <div className="flex space-x-2 items-center">
          <div className="w-14 h-14 rounded-full bg-yellow-400">
            <img src={logo} alt="icon" />
          </div>
          <span className="-z-10 text-semiTitle text-base-text font-bold bg-teal-50">
            <span className="text-yellow-400">har</span>vest
          </span>
        </div>
        <ul className="hidden lg:flex space-x-4">
          {navList.map((item) => {
            return (
              <li
                key={item.id}
                className="text-paragraph font-menu hover:text-base-textHover"
              >
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex items-center space-x-2">
        {location.pathname !== "/listings" && (
          <Search
            className="hidden md:flex"
            value={searchValue}
            setValue={setSearchValue}
            onClear={() => setSearchValue("")}
            placeholder="Search for a listing..."
          />
        )}
        {loggedIn && (
          <div className="flex space-x-2">
            <BasicButton onClick={logoutUser}>Logout</BasicButton>
            <Link
              className="w-14 h-14 items-stretch flex items-center justify-center border border-base-border rounded-full overflow-clip"
              to={"/profile"}
            >
              <img className="bg-cover" src={profileImage} alt="" />
            </Link>
          </div>
        )}
        {!loggedIn && (
          <div className="hidden md:flex space-x-2 items-center text-base-textRev text-paragraph">
            <BasicLink to="/sign-in">Login</BasicLink>
            <span className="text-gray-500">or</span>
            <BasicLink to="/sign-up">Register</BasicLink>
          </div>
        )}
        <motion.button
          animate={{
            transform: isDropdownVisible ? "rotate(180deg)" : "rotate(0)",
          }}
          onClick={() => setIsDropdownVisible((prevState) => !prevState)}
          className={`lg:hidden flex items-center justify-self-end`}
        >
          <AiFillCaretDown size={30} />
        </motion.button>
      </div>
    </header>
  );
};

export default Header;
