import {motion} from "framer-motion";
import {GiGrass} from "react-icons/gi";
import ListingCard from "../../components/ListingCard/ListingCard.jsx";
import {FaFire, FaMoneyBill} from "react-icons/fa";

const Home = () => {
    return (
        <div className="flex flex-col">
            <div className="flex h-60 justify-center bg-base-color w-full overflow-clip">
                <motion.div
                    animate={{transform: "translateY(10rem)"}}
                    transition={{ease: "easeInOut", duration: 0.5}}
                    className="flex justify-center space-x-2"
                >
                    <GiGrass className="text-semi sm:text-title"/>
                    <span className="text-semi sm:text-title font-bold">Partner With Us!</span>
                </motion.div>
            </div>
            <div className="flex flex-col p-8">
                <h2 className="text-semi font-semibold text-base-textRev flex items-center space-x-1">
                    <FaFire/>
                    <span>Trending Bids</span></h2>
                <div className="flex flex-col">
                    <div className="flex flex-wrap">
                        <ListingCard/>
                        <ListingCard/>
                        <ListingCard/>
                    </div>
                    <div className="flex flex-wrap">
                        <ListingCard/>
                        <ListingCard/>
                        <ListingCard/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col p-8 bg-base-color">
                <h2 className="text-semi font-semibold flex items-center space-x-1">
                    <FaMoneyBill/>
                    <span>Cheap Deals</span></h2>
                <div className="flex flex-col">
                    <div className="flex flex-wrap">
                        <ListingCard/>
                        <ListingCard/>
                        <ListingCard/>
                    </div>
                    <div className="flex flex-wrap">
                        <ListingCard/>
                        <ListingCard/>
                        <ListingCard/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
