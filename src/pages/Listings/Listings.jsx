import ListingCardFull from "../../components/ListingCardFull/ListingCardFull.jsx";
import {motion} from "framer-motion";
import Dropdown from "../../components/Dropdown/Dropdown.jsx";

const Listings = () => {
    return (
        <div className="flex flex-col w-full">
            <motion.div
                initial={{y: -100, opacity: 0.5}}
                animate={{y: 0, opacity: 1}}
                transition={{ease: "easeOut", duration: 0.5}}
                className="h-[4rem] bg-gray-100 p-2 items-center flex">
                <Dropdown/>
            </motion.div>
            <div className="flex flex-col mt-2 p-4 w-full space-y-4">
                <div className="flex text-base-textRev flex-col">
                    <h1 className="font-bold text-semi">Active Listings</h1>
                    <h2 className=" font-light text-paragraph text-gray-200">Click on a listing to bid on it.</h2>
                </div>
                <div className="flex flex-col space-y-2">
                    <ListingCardFull/>
                    <ListingCardFull/>
                    <ListingCardFull/>
                    <ListingCardFull/>
                    <ListingCardFull/>
                </div>
            </div>
        </div>
    );
};

export default Listings;