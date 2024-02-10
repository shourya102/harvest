import {useState} from "react";
import {motion} from "framer-motion";
import apples from "../../assets/apples.png";

const ListingCard = ({}) => {
    const [title, setTitle] = useState("Product");
    const [currentBid, setCurrentBid] = useState("₹ 0");
    const [timeLeft, setTimeLeft] = useState("24:00:00");

    return <motion.div
        whileHover={{scale: 1.1}}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ease: "easeIn", duration: 0.4}}
        className="flex flex-col justify-between h-60 bg-base-color shadow-md flex-grow m-4 rounded-xl overflow-clip hover:cursor-pointer">
        <div className="flex item-end justify-start bg-yellow-300 p-4">
            <h2 className="text-semi font-bold">{title}</h2>
        </div>
        <div className="flex justify-center items-center p-4 bg-cover"><img src={apples} className="w-20 h-20 bg-cover"
                                                                            alt={"image"}/></div>
        <div className="flex justify-between text-paragraph font-serif p-4">
            <span>{currentBid}</span>
            <span className="text-red-600">{timeLeft}</span>
        </div>
    </motion.div>;
};

export default ListingCard;
