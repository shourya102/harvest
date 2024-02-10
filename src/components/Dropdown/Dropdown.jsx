import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";
import {AiFillCaretDown} from "react-icons/ai";

const Dropdown = (props) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="flex flex-col">
            <button onClick={() => setIsVisible(prevState => !prevState)}
                    className="flex border border-base-border text-base-textRev bg-green-600 items-center p-3 space-x-1 rounded-xl">
                <span>Categories</span>
                <motion.div animate={{rotate: isVisible ? 180 : 0}}
                            transition={{duration: 0.3}}>
                    <AiFillCaretDown/>
                </motion.div>
            </button>
            <div className="relative">
                <AnimatePresence>
                    {isVisible && <motion.div
                        initial={{opacity: 0.2}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0.2}}
                        transition={{ease: "easeInOut", duration: 0.3}}
                        className="absolute w-full z-10 border border-base-border bg-gray-100 rounded-xl translate-y-3 p-2 flex flex-col ">
                        <button className="border-b p-2 border-base-border">Fruits</button>
                        <button className="border-b p-2 border-base-border">Vegetables</button>
                        <button className="p-2 border-base-border">Mangoes and Onions</button>
                    </motion.div>}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Dropdown;