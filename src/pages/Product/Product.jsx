import { useEffect, useState } from "react";
import listingService from "../../services/ListingService.js";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { updateTime } from "../../utils/timeUpdater.js";
import { motion } from "framer-motion";
import { BiRupee } from "react-icons/bi";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [timeLeft, setTimeLeft] = useState("");
  const [bid, setBid] = useState(0);

  useEffect(() => {
    listingService.getSingleListing(id).then((res) => {
      setProduct(res.data);
      setBid(
        product
          ? product.topBid
            ? product.topBid + product.increment
            : product.startingBid + product.increment
          : "",
      );
    });
  }, []);

  useEffect(() => {
    if (product) {
      setTimeLeft(updateTime(product.expiryDate));
      const interval = setInterval(() => {
        setTimeLeft(updateTime(product.expiryDate));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [product]);

  const placeBid = () => {
    listingService.postBid(bid, id).then((res) => {
      setBid(0);
      window.location.reload();
    });
  };

  return (
    <div className="flex justify-center p-4">
      <div className="flex flex-col p-2 rounded-lg w-full md:w-5/6 bg-base-color min-h-[50rem]">
        <div className="flex flex-col border-b border-base-border space-y-4 md:flex-row  md:space-x-4 p-8">
          <div className="flex flex-col space-y-2">
            <div className="w-full h-60 shadow-sm rounded-2xl border border-base-borderColored flex justify-center items-center p-2">
              <img
                className="w-24 drop-shadow-2xl bg-cover"
                src={product ? product.thumbnail : ""}
                alt="thumbnail"
              />
            </div>
            <div className="flex space-x-1">
              <div className="flex justify-center items-center border border-blue-600 p-2 rounded-lg h-16 w-16">
                <img
                  className="w-8 drop-shadow-2xl bg-cover"
                  src={product ? product.thumbnail : ""}
                  alt=""
                />
              </div>
              <div className="flex justify-center items-center border border-base-borderColored p-2 rounded-lg h-16 w-16">
                <img
                  className="w-8 drop-shadow-2xl bg-cover"
                  src={product ? product.displayPic1 : ""}
                  alt=""
                />
              </div>
              <div className="flex justify-center items-center border border-base-borderColored p-2 rounded-lg h-16 w-16">
                <img
                  className="w-8 drop-shadow-2xl bg-cover"
                  src={product ? product.displayPic2 : ""}
                  alt=""
                />
              </div>
              <div className="flex justify-center items-center border border-base-borderColored p-2 rounded-lg h-16 w-16">
                <img
                  className="w-8 drop-shadow-2xl bg-cover"
                  src={product ? product.displayPic3 : ""}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full p-2 space-y-8">
            <div className="flex flex-col w-full border-b border-base-borderColored pb-2 space-y-1">
              <h1 className="text-semiTitle font-semibold">
                {product ? product.name : ""}
              </h1>
              <h2 className="text-blue-600">
                Posted by:{" "}
                <span>{product ? product.farmer.user.username : ""}</span>
              </h2>
              <div className="flex space-x-1 text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
            <div>
              <div className="p-3 inline-flex bg-red-600 text-white font-bold rounded-lg">
                Ends in {timeLeft}
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <h2 className="flex justify-end font-medium text-mid">
                Current Bid
              </h2>
              <span className="flex justify-end rounded-md text-semiTitle font-bold p-2 border border-green-600 ">
                ₹{" "}
                {product
                  ? product.topBid
                    ? product.topBid
                    : product.startingBid
                  : ""}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4 p-8 border-b border-base-border">
          <h1 className="text-semiTitle pb-2 font-bold border-b border-base-borderColored">
            Place a bid now
          </h1>
          <div className="flex items-center p-2 bg-gray-50 border border-base-borderColored rounded-lg text-semi space-x-2">
            <span className="text-green-600 font-bold">Current:</span>
            <span className="font-bold">
              ₹{" "}
              {product
                ? product.topBid
                  ? product.topBid
                  : product.startingBid
                : ""}
            </span>
          </div>
          <div>
            * Minimum Increment of {product ? product.increment : 0} is required
          </div>
          <div className="flex justify-between items-center space-x-2">
            <div className="flex w-full space-x-1 overflow-clip border border-base-borderColored rounded-lg items-center bg-base-color">
              <BiRupee className="ml-2" />
              <input
                value={bid}
                onChange={(e) => setBid(parseInt(e.target.value))}
                className="p-3 w-full font-bold"
                type="text"
              />
            </div>
            <motion.button
              whileHover={{ background: "rgb(234, 179, 8)" }}
              whileTap={{ filter: "contrast(250%)" }}
              onClick={placeBid}
              className="p-3 w-full md:w-60 rounded-lg bg-yellow-400"
            >
              Place your bid
            </motion.button>
          </div>
        </div>
        <div className="flex flex-col space-y-4 p-8 border-b border-base-border">
          <h1 className="text-semiTitle pb-2 font-bold border-b border-base-borderColored">
            Product Details
          </h1>
          <div className="grid grid-cols-2">
            <div className="font-bold mb-2">Weight</div>
            <div>{product ? product.weight : ""}</div>
            <div className="font-bold mb-2">Crop Type</div>
            <div>{product ? product.type : ""}</div>
            <div className="font-bold mb-2">Harvest Date</div>
            <div>
              {product && product.harvestDate
                ? new Date(product.harvestDate).toDateString()
                : "00"}
            </div>
            <div className="font-bold mb-2">City</div>
            <div>{product ? product.city : ""}</div>
            <div className="font-bold mb-2">State</div>
            <div>{product ? product.state : ""}</div>
            <div className="font-bold mb-2">Season</div>
            <div>{product ? product.season : ""}</div>
            <div className="font-bold mb-2">Temperature</div>
            <div>{product ? product.temperature : ""}</div>
            <div className="font-bold mb-2">Soil Type</div>
            <div>{product ? product.soilType : ""}</div>
          </div>
        </div>
        <div className="flex flex-col space-y-4 p-8">
          <h1 className="text-semiTitle pb-2 font-bold border-b border-base-borderColored">
            Description
          </h1>
          <p>{product ? product.description : ""}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
