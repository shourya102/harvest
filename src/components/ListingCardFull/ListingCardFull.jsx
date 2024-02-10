import apples from "../../assets/apples.png";
import {IconContext} from "react-icons";
import {BiSolidStar, BiSolidStarHalf} from "react-icons/bi";

const ListingCardFull = () => {
    return (
        <div className="flex shadow-md bg-base-color border-2 border-gray-100 rounded-lg w-full">
            <div className="w-52 h-60 bg-gray-100 p-2 flex justify-center items-center">
                <img className="bg-cover drop-shadow-2xl" src={apples} alt="product"/>
            </div>
            <div className="flex w-full flex-col p-2 justify-between">
                <div className="flex flex-col space-y-1">
                    <h1 className="text-mid">Fresh Apples</h1>
                    <div className="flex space-x-1">
                        <IconContext.Provider value={{color: "gold"}}>
                            <BiSolidStar/>
                            <BiSolidStar/>
                            <BiSolidStar/>
                            <BiSolidStar/>
                            <BiSolidStarHalf/>
                        </IconContext.Provider>
                    </div>
                    <div className="text-paragraph font-semibold text-red-600">24:00:00</div>
                </div>
                <div className="flex flex-col space-y-1">
                    <div className="font-semibold text-paragraph">Current bid</div>
                    <div className="text-semi font-serif">$500</div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="text-paragraph p-1 bg-slate-700 font-serif  text-white rounded-lg">50 kg</div>
                </div>
            </div>
        </div>
    );
};

export default ListingCardFull;