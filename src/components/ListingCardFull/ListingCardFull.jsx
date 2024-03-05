import { IconContext } from "react-icons";
import { BiSolidStar, BiSolidStarHalf } from "react-icons/bi";
import { useEffect, useState } from "react";
import { updateTime } from "../../utils/timeUpdater.js";
import { Link } from "react-router-dom";

const ListingCardFull = ({
  id,
  title,
  expiryDate,
  topBid,
  weight,
  thumbnail,
  startingBid,
}) => {
  const [formattedExpiryDate, setFormattedExpiryDate] = useState("");
  useEffect(() => {
    setFormattedExpiryDate(updateTime(expiryDate));
    const interval = setInterval(() => {
      setFormattedExpiryDate(updateTime(expiryDate));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex shadow-md bg-base-color border-2 border-gray-100 rounded-lg w-full">
      <div className="w-52 h-60 overflow-clip bg-gray-100 p-2 flex justify-center items-center">
        <img
          className="bg-cover w-48 h-56 drop-shadow-2xl"
          src={thumbnail}
          alt="product"
        />
      </div>
      <div className="flex w-full flex-col p-2 justify-between">
        <div className="flex flex-col space-y-1">
          <Link to={`/listings/${id}`} className="text-mid">
            {title}
          </Link>
          <div className="flex space-x-1">
            <IconContext.Provider value={{ color: "gold" }}>
              <BiSolidStar />
              <BiSolidStar />
              <BiSolidStar />
              <BiSolidStar />
              <BiSolidStarHalf />
            </IconContext.Provider>
          </div>
          <div className="text-paragraph font-semibold text-red-600">
            {formattedExpiryDate}
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="font-semibold text-paragraph">Current bid</div>
          <div className="text-semi font-serif">
            ₹ {topBid ? topBid : startingBid}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-paragraph p-1 bg-slate-700 font-serif  text-white rounded-lg">
            {weight} kg
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCardFull;
