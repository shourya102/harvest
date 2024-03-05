import BasicInput from "../../components/BasicInput/BasicInput.jsx";
import { useRef, useState } from "react";
import BasicButton from "../../components/BasicButton/BasicButton.jsx";
import {
  AiFillCaretLeft,
  AiFillCaretRight,
  AiOutlineUpload,
} from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import listingService from "../../services/ListingService.js";
import { useNavigate } from "react-router-dom";

const PostListing = () => {
  const [selected, setSelected] = useState(1);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [weight, setWeight] = useState("");
  const [weightType, setWeightType] = useState("Kilogram");
  const [harvestDate, setHarvestDate] = useState(new Date());
  const [expiryDate, setExpiryDate] = useState(new Date());
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [season, setSeason] = useState("");
  const [temperature, setTemperature] = useState("");
  const [soilType, setSoilType] = useState("");
  const [startingBid, setStartingBid] = useState("");
  const [increment, setIncrement] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [pictures, setPictures] = useState([]);
  const thumbRef = useRef();
  const pictureRef1 = useRef();
  const pictureRef2 = useRef();
  const pictureRef3 = useRef();
  const navigate = useNavigate();
  const saveListing = () => {
    const json = JSON.stringify({
      name,
      type,
      weight,
      weightType,
      harvestDate,
      expiryDate,
      city,
      state,
      season,
      temperature,
      soilType,
      startingBid,
      increment,
      description,
    });
    const formData = new FormData();
    formData.append("ProductRequest", json);
    formData.append("thumbnail", thumbnail);
    pictures.forEach((i, index) => {
      formData.append(`displaypic${index + 1}`, i);
    });
    listingService.postListing(formData).then((res) => {
      navigate("/sell");
    });
  };

  const handleThumbnail = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        thumbRef.current.src = reader.result;
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    setThumbnail(e.target.files[0]);
  };

  const handlePictures = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (e.target.id === "picture1") pictureRef1.current.src = reader.result;
        else if (e.target.id === "picture2")
          pictureRef2.current.src = reader.result;
        else pictureRef3.current.src = reader.result;
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    setPictures((prevState) => [...prevState, e.target.files[0]]);
  };

  return (
    <div className="flex justify-center text-black w-full p-2 md:p-6">
      <div className="flex flex-col bg-base-color h-[52rem] p-4 rounded-lg w-full md:w-5/6 lg:w-2/3">
        <div className="flex mb-2 justify-center space-x-1">
          <div
            className={`rounded-full w-2 h-2 ${selected === 1 ? "bg-gray-600" : "bg-gray-200"}`}
          ></div>
          <div
            className={`rounded-full w-2 h-2 ${selected === 2 ? "bg-gray-600" : "bg-gray-200"}`}
          ></div>
          <div
            className={`rounded-full w-2 h-2 ${selected === 3 ? "bg-gray-600" : "bg-gray-200"}`}
          ></div>
        </div>
        <h1 className="text-semi font-bold border-b border-base-border pb-2">
          Post A Listing
        </h1>
        {selected === 1 && (
          <div className="flex flex-col">
            <div className="flex flex-col mt-4 space-y-2">
              <label className=" text-mid" htmlFor="">
                Title
              </label>
              <BasicInput
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col mt-4 space-y-2">
              <label className="text-mid" htmlFor="">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="resize-none border border-base-borderColored rounded-lg p-3"
                rows={10}
              />
            </div>
            <div className="grid grid-cols-2 mt-4 space-x-2">
              <div className="flex flex-col space-y-2">
                <label className=" text-mid" htmlFor="">
                  Starting Bid
                </label>
                <BasicInput
                  value={startingBid}
                  onChange={(e) => setStartingBid(e.target.value)}
                  validation={false}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className=" text-mid font-[0.8rem]" htmlFor="">
                  Minimum Increment
                </label>
                <BasicInput
                  value={increment}
                  onChange={(e) => setIncrement(e.target.value)}
                  validation={false}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 mt-4 space-x-2">
              <div className="flex flex-col space-y-2">
                <label className=" text-mid" htmlFor="">
                  City
                </label>
                <BasicInput
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  validation={false}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-mid font-[0.8rem]" htmlFor="">
                  State
                </label>
                <BasicInput
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  validation={false}
                />
              </div>
            </div>
          </div>
        )}
        {selected === 2 && (
          <div className="flex flex-col">
            <div className="flex flex-col mt-4 space-y-2">
              <label className=" text-mid" htmlFor="">
                Weight
              </label>
              <BasicInput
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                validation={false}
              />
            </div>
            <div className="flex flex-col mt-4 space-y-2">
              <label className=" text-mid" htmlFor="">
                Crop Type
              </label>
              <BasicInput
                value={type}
                onChange={(e) => setType(e.target.value)}
                validation={false}
              />
            </div>
            <div className="flex flex-col mt-4 space-y-2">
              <label className=" text-mid" htmlFor="">
                Harvest Date
              </label>
              <BasicInput
                value={harvestDate}
                onChange={(e) => setHarvestDate(e.target.value)}
                type="date"
                validation={false}
              />
            </div>
            <div className="flex flex-col mt-4 space-y-2">
              <label className=" text-mid" htmlFor="">
                Expiry Date
              </label>
              <BasicInput
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                type="date"
                validation={false}
              />
            </div>
            <div className="flex flex-col mt-4 space-y-2">
              <label className=" text-mid" htmlFor="">
                Harvested Season
              </label>
              <BasicInput
                value={season}
                onChange={(e) => setSeason(e.target.value)}
                type="text"
                validation={false}
              />
            </div>
            <div className="flex flex-col mt-4 space-y-2">
              <label className=" text-mid" htmlFor="">
                Harvested Temperature
              </label>
              <BasicInput
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
                type="text"
                validation={false}
              />
            </div>
          </div>
        )}
        {selected === 3 && (
          <div className="flex flex-col">
            <div className="flex flex-col mt-4 space-y-2">
              <label className=" text-mid" htmlFor="">
                Soil Type
              </label>
              <BasicInput
                value={soilType}
                onChange={(e) => setSoilType(e.target.value)}
                type="text"
                validation={false}
              />
            </div>
            <div className="flex flex-col mt-4 space-y-2">
              <label className=" text-mid" htmlFor="">
                Thumbnail
              </label>
              <label
                htmlFor="thumbnail"
                className="p-3 w-36 h-36 text-mid justify-center items-center hover:bg-gray-50 flex cursor-pointer border border-base-borderColored rounded-2xl bg-white"
              >
                <AiOutlineUpload />
                <input
                  onChange={handleThumbnail}
                  id="thumbnail"
                  type="file"
                  className="hidden"
                />
                <img
                  src=""
                  ref={thumbRef}
                  className="bg-cover w-fit h-24"
                  alt=""
                />
              </label>
            </div>
            <div className="flex flex-col mt-4 space-y-2">
              <label className=" text-mid" htmlFor="">
                Pictures
              </label>
              <div className="flex space-x-2">
                <label
                  htmlFor="picture1"
                  className="p-3 w-36 h-36 text-mid justify-center items-center hover:bg-gray-50 flex cursor-pointer border border-base-borderColored rounded-2xl bg-white"
                >
                  <AiOutlineUpload />
                  <input
                    onChange={handlePictures}
                    id="picture1"
                    type="file"
                    className="hidden"
                  />
                  <img
                    src=""
                    ref={pictureRef1}
                    className="bg-cover w-fit h-24"
                    alt=""
                  />
                </label>
                <label
                  htmlFor="picture2"
                  className="p-3 w-36 h-36 text-mid justify-center items-center hover:bg-gray-50 flex cursor-pointer border border-base-borderColored rounded-2xl bg-white"
                >
                  <AiOutlineUpload />
                  <input
                    onChange={handlePictures}
                    id="picture2"
                    type="file"
                    className="hidden"
                  />
                  <img
                    src=""
                    ref={pictureRef2}
                    className="bg-cover w-fit h-24"
                    alt=""
                  />
                </label>
                <label
                  htmlFor="picture3"
                  className="p-3 w-36 h-36 text-mid justify-center items-center hover:bg-gray-50 flex cursor-pointer border border-base-borderColored rounded-2xl bg-white"
                >
                  <AiOutlineUpload />
                  <input
                    onChange={handlePictures}
                    id="picture3"
                    type="file"
                    className="hidden"
                  />
                  <img
                    src=""
                    ref={pictureRef3}
                    className="bg-cover w-fit h-24"
                    alt=""
                  />
                </label>
              </div>
            </div>
          </div>
        )}
        <div className="flex mt-8 justify-center space-x-2">
          {selected > 1 && (
            <BasicButton
              onClick={() =>
                setSelected((prevState) =>
                  prevState > 0 ? prevState - 1 : prevState,
                )
              }
              width="10rem"
            >
              <AiFillCaretLeft />
              <span>Previous</span>
            </BasicButton>
          )}
          {selected < 3 && (
            <BasicButton
              onClick={() =>
                setSelected((prevState) =>
                  prevState <= 3 ? prevState + 1 : prevState,
                )
              }
              width="10rem"
            >
              <span>Next</span>
              <AiFillCaretRight />
            </BasicButton>
          )}
          {selected === 3 && (
            <BasicButton onClick={saveListing} width="10rem">
              <span>Submit</span>
              <CiLogin />
            </BasicButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostListing;
