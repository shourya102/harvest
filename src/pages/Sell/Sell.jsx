import SellCard from "../../components/SellCard/SellCard.jsx";
import { useEffect, useState } from "react";
import userService from "../../services/UserService.js";
import { useDispatch, useSelector } from "react-redux";
import { refreshFarmer, selectIsFarmer } from "../../features/userSlice.js";
import BasicLink from "../../components/BasicLink/BasicLink.jsx";

const Sell = () => {
  const [enablingFarmerAccount, setEnablingFarmerAccount] = useState(false);
  const dispatch = useDispatch();
  const isFarmer = useSelector(selectIsFarmer);
  const [yourListingsList, setYourListingsList] = useState([]);

  useEffect(() => {
    userService.getYourListings().then((res) => {
      setYourListingsList(res.data);
    });
  }, []);

  const enableFarmerAccount = () => {
    userService.enableFarmerAccount().then((res) => {
      dispatch(refreshFarmer());
    });
    setEnablingFarmerAccount(false);
  };

  return (
    <div className="flex flex-col md:p-10">
      {enablingFarmerAccount && (
        <div className="absolute top-0 left-0 flex justify-center items-center z-50 w-screen h-screen bg-black bg-opacity-50">
          <div className="flex flex-col bg-base-color space-y-4 rounded-lg shadow-sm border-base-border border p-4">
            <div className="border-b text-mid pb-4 border-base-border">
              Would you like to enable your farmer account?
            </div>
            <div className="flex justify-end items-center pb-4">
              <button
                onClick={enableFarmerAccount}
                className="text-mid p-2 w-20 hover:text-gray-500"
              >
                Yes
              </button>
              <button
                onClick={() =>
                  setEnablingFarmerAccount((prevState) => !prevState)
                }
                className="text-mid bg-red-600 text-white p-2 rounded-lg w-20"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="bg-white m-4 md:m-0 md:my-4 p-3 flex items-center justify-between rounded-lg text-blue-600">
        {!isFarmer && (
          <span
            onClick={() => setEnablingFarmerAccount((prevState) => !prevState)}
            className="cursor-pointer hover:text-blue-900"
          >
            Don't have a farmer account enabled? Enable it now!
          </span>
        )}
        <BasicLink to="/post-listing">Post a Listing</BasicLink>
      </div>
      <div className="flex flex-col min-h-[43.5rem] p-4 bg-white md:rounded-lg">
        <h1 className="text-semiTitle font-bold border-b border-base-border pb-2 mb-6">
          Your Listings
        </h1>
        <div className="flex flex-col space-y-4">
          {yourListingsList.map((item, id) => {
            return (
              <SellCard
                key={id}
                id={item.id}
                title={item.name}
                expiryDate={item.expiryDate}
                startingBid={item.startingBid}
                topBid={item.topBid}
                thumbnail={item.thumbnail}
                border={id !== yourListingsList.length - 1}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sell;
