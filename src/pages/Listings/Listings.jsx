import ListingCardFull from "../../components/ListingCardFull/ListingCardFull.jsx";
import { motion } from "framer-motion";
import Dropdown from "../../components/Dropdown/Dropdown.jsx";
import Search from "../../components/Search/Search.jsx";
import listingService from "../../services/ListingService.js";
import { useEffect, useState } from "react";

const Listings = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    listingService.getListing({ page: 0, pageSize: 3 }).then((res) => {
      setProductList(res.data);
    });
  }, []);

  return (
    <div className="flex flex-col w-full">
      <motion.div
        initial={{ y: -100, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="h-[4rem] bg-gray-100 p-2 space-x-2 items-center flex"
      >
        <Dropdown title="Categories">
          <button>Apples</button>
          <button>Oranges</button>
          <button>Vegetables</button>
        </Dropdown>
        <Search placeholder="Search by name..." />
      </motion.div>
      <div className="flex flex-col h-[52rem] mt-2 p-4 w-full space-y-4">
        <div className="flex text-base-textRev flex-col">
          <h1 className="font-bold text-semi">Active Listings</h1>
          <h2 className=" font-light text-paragraph text-gray-200">
            Click on a listing to bid on it.
          </h2>
        </div>
        <div className="flex flex-col space-y-2">
          {productList.map((item, id) => {
            return (
              <ListingCardFull
                key={id}
                id={item.id}
                title={item.name}
                thumbnail={item.thumbnail}
                expiryDate={item.expiryDate}
                topBid={item.topBid}
                weight={item.weight}
                startingBid={item.startingBid}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Listings;
