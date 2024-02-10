import navList from "./navList.js";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectLoggedIn} from "../../features/userSlice.js";
import Search from "../Search/Search.jsx";
import {useState} from "react";
import {AiFillCaretDown} from "react-icons/ai";
import {motion} from "framer-motion";
import BasicLink from "../BasicLink/BasicLink.jsx";

const Header = () => {
    const loggedIn = useSelector(selectLoggedIn);
    const [searchValue, setSearchValue] = useState("");
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    return (
        <header className="z-10 bg-base-color flex w-full p-2 justify-between sticky">
            <div className="flex space-x-10 items-center">
                <div className="flex space-x-2 items-center">
                    <div className="bg-green-600 w-14 h-14 rounded-full shadow-sm"></div>
                    <span className="text-semiTitle text-base-text font-bold bg-teal-50">
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
            <div className="hidden md:flex items-center space-x-2">
                <Search
                    value={searchValue}
                    setValue={setSearchValue}
                    onClear={() => setSearchValue("")}
                    placeholder="Search for a listing..."
                />
                {loggedIn && (
                    <button className="bg-gray-600 w-14 h-14 rounded-full overflow-clip"></button>
                )}
                {!loggedIn && (
                    <div className="flex space-x-2 items-center text-base-textRev text-paragraph">
                        <BasicLink to="/sign-in">
                            Login
                        </BasicLink>
                        <span className="text-gray-500">or</span>
                        <BasicLink to="/sign-up">
                            Register
                        </BasicLink>
                    </div>
                )}
            </div>
            <motion.button
                animate={{
                    transform: isDropdownVisible ? "rotate(180deg)" : "rotate(0)",
                }}
                onClick={() => setIsDropdownVisible((prevState) => !prevState)}
                className={`lg:hidden flex items-center justify-self-end`}
            >
                <AiFillCaretDown size={30}/>
            </motion.button>
        </header>
    );
};

export default Header;
