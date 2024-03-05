import { AiFillEdit, AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import { updateTime } from "../../utils/timeUpdater.js";
import { Link } from "react-router-dom";
import listingService from "../../services/ListingService.js";

const SellCard = ({
  id,
  border = true,
  title,
  expiryDate,
  topBid,
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

  const deleteListing = () => {
    listingService.deleteListing(id).then(res => {
      window.location.reload();
    })
  }

  return (
    <div
      className={`flex p-4 ${border ? "border-b" : ""} border-base-border w-full space-x-4`}
    >
      <div className="bg-cover w-40 h-40 justify-center items-center flex">
        <img className="bg-cover drop-shadow-2xl" src={thumbnail} alt="" />
      </div>
      <div className="flex flex-col justify-between space-y-4 w-full">
        <div className="flex flex-col space-y-2">
          <div className="flex text-mid space-x-1">
            <Link to={`/listings/${id}`}>{title}</Link>
            <AiFillEdit className="text-red-600" />
          </div>
          <div className="flex text-red-600 font-bold">
            {formattedExpiryDate}
          </div>
        </div>
        <div className="font-bold flex flex-col space-y-2">
          <span>Current Bid</span>
          <span className="text-semi font-medium font-serif">
            ₹ {topBid ? topBid : startingBid}
          </span>
        </div>
        <div className="flex w-full justify-end space-x-4">
          <button className="p-3 bg-base-color rounded-lg text-slate-600 hover:text-black">
            Edit Listing
          </button>
          <button onClick={deleteListing} className="flex space-x-1 p-3 items-center bg-red-600 rounded-lg text-white hover:bg-red-700 shadow-sm">
            <AiOutlineClose />
            <span>Delete Listing</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellCard;
