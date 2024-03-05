import { BsPerson } from "react-icons/bs";
import { AiFillEdit, AiFillLock, AiOutlineUpload } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { selectProfile, updatedFlagSet } from "../../features/userSlice.js";
import userService from "../../services/UserService.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import BasicButton from "../../components/BasicButton/BasicButton.jsx";

const Profile = () => {
  const profile = useSelector(selectProfile);
  const [balance, setBalance] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [addedBalance, setAddedBalance] = useState(0);
  const dispatch = useDispatch();
  const [profileImage, setProfileImage] = useState();
  const profileImageRef = useRef();

  useEffect(() => {
    if (profile) {
      setFirstName(profile.firstName);
      setLastName(profile.lastName);
      setEmail(profile.email);
      setUsername(profile.username);
      setAddress1(profile.address1);
      setAddress2(profile.address2);
      setCity(profile.city);
      setState(profile.state);
    }
  }, [profile]);

  useEffect(() => {
    userService.getMoney().then((res) => {
      setBalance(res.data);
    });
  }, []);

  const addMoney = () => {
    userService.updateMoney(parseFloat(addedBalance)).then((res) => {
      setBalance(res.data);
      setAddedBalance(0.0);
    });
  };

  const updateProfile = () => {
    userService
      .updateProfile({
        email,
        firstName,
        lastName,
        address1,
        address2,
        city,
        state,
      })
      .then((res) => {
        dispatch(updatedFlagSet());
      });
  };

  const handleUploadProfileImage = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        profileImageRef.current.src = reader.result;
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    setProfileImage(e.target.files[0]);
    if (profileImage) {
      const formData = new FormData();
      formData.append("profilePic", profileImage);
      userService.updateProfileImage(formData).then((res) => {
        dispatch(updatedFlagSet());
      });
    }
  };

  return (
    <div className="flex w-full justify-center items-center p-6">
      <div className="bg-white p-3 flex flex-col w-full md:w-5/6 lg:w-2/3 rounded-lg min-h-[52rem] ">
        <div className="flex space-x-4 p-2 border-b border-base-border h-[10rem]">
          <div className="flex justify-center items-center">
            <label
              htmlFor="profileimg"
              className={`w-36 h-36 text-mid overflow-clip justify-center ${profile && profile.profileImage ? "items-stretch" : "items-center"} hover:bg-gray-50 flex cursor-pointer border border-base-borderColored rounded-full bg-white`}
            >
              <AiOutlineUpload />
              <input
                onChange={handleUploadProfileImage}
                id="profileimg"
                type="file"
                className="hidden"
              />
              <img
                src={profile.profileImage}
                ref={profileImageRef}
                className="bg-cover"
                alt=""
              />
            </label>
          </div>
          <div className="flex flex-col">
            <h1 className="flex space-x-1 items-center text-semi font-bold text-slate-800">
              <BsPerson />
              <span>
                {profile.firstName} {profile.lastName}
              </span>
            </h1>
            <h2 className="ml-8 text-blue-600">{profile.username}</h2>
          </div>
        </div>
        <div className="border-b border-base-border py-3 space-y-4">
          <h1 className="text-mid font-bold">Wallet</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2 bg-gray-50 p-3 rounded-lg">
              <h2 className="font-bold">Balance</h2>
              <div className="font-serif text-green-600 text-semi">
                ₹ {balance}
              </div>
            </div>
            <div className="flex flex-col space-y-2 bg-gray-50 p-3 rounded-lg">
              <h2 className="font-bold">Add Money</h2>
              <div className="flex space-x-1 border border-base-borderColored rounded-lg items-center p-3 bg-base-color">
                <BiRupee />
                <input
                  className="w-full"
                  value={addedBalance}
                  onChange={(e) => setAddedBalance(parseFloat(e.target.value.length > 0 ? e.target.value : "0"))}
                  type="text"
                />
              </div>
              <BasicButton onClick={addMoney}>Proceed</BasicButton>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-3 space-y-4">
          <div className="flex flex-col space-y-1">
            <label htmlFor="" className="font-semibold">
              Email
            </label>
            <div className="flex shadow-sm overflow-clip border border-base-borderColored rounded-lg items-center">
              <AiFillLock className="ml-3" />
              <input
                disabled={true}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="w-full bg-gray-100 p-3"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="" className="font-semibold">
              Username
            </label>
            <div className="flex shadow-sm overflow-clip border border-base-borderColored rounded-lg items-center">
              <AiFillLock className="ml-3" />
              <input
                disabled={true}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                className="w-full bg-gray-100 p-3"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="" className="font-semibold">
              First Name
            </label>
            <div className="flex shadow-sm overflow-clip border border-base-borderColored rounded-lg items-center">
              <AiFillEdit className="ml-3" />
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                className="w-full p-3"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="" className="font-semibold">
              Last Name
            </label>
            <div className="flex shadow-sm overflow-clip border border-base-borderColored rounded-lg items-center">
              <AiFillEdit className="ml-3" />
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                className="w-full p-3"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="" className="font-semibold">
              Address 1
            </label>
            <div className="flex shadow-sm overflow-clip border border-base-borderColored rounded-lg items-center">
              <AiFillEdit className="ml-3" />
              <input
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
                type="text"
                className="w-full p-3"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="" className="font-semibold">
              Address 2
            </label>
            <div className="flex shadow-sm overflow-clip border border-base-borderColored rounded-lg items-center">
              <AiFillEdit className="ml-3" />
              <input
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
                type="text"
                className="w-full p-3"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="" className="font-semibold">
              City
            </label>
            <div className="flex shadow-sm overflow-clip border border-base-borderColored rounded-lg items-center">
              <AiFillEdit className="ml-3" />
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                type="text"
                className="w-full p-3"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="" className="font-semibold">
              State
            </label>
            <div className="flex shadow-sm overflow-clip border border-base-borderColored rounded-lg items-center">
              <AiFillEdit className="ml-3" />
              <input
                value={state}
                onChange={(e) => setState(e.target.value)}
                type="text"
                className="w-full p-3"
              />
            </div>
          </div>
          <BasicButton
            onClick={updateProfile}
            className="inline-flex w-[12rem] rounded-lg self-end"
          >
            Save
          </BasicButton>
        </div>
      </div>
    </div>
  );
};

export default Profile;
