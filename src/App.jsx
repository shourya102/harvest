import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import NoPage from "./pages/NoPage/NoPage.jsx";
import Header from "./components/Header/Header.jsx";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/Footer/Footer.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import Listings from "./pages/Listings/Listings.jsx";
import Sell from "./pages/Sell/Sell.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import PostListing from "./pages/PostListing/PostListing.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import Product from "./pages/Product/Product.jsx";
import {
  selectLoggedIn,
  selectUpdated,
  setProfile,
  updatedFlagUnset,
} from "./features/userSlice.js";
import { useEffect } from "react";
import userService from "./services/UserService.js";
import Chatbot from "./components/Chatbot/Chatbot.jsx";

const App = () => {
  const loggedIn = useSelector(selectLoggedIn);
  const dispatch = useDispatch();
  const updated = useSelector(selectUpdated);

  useEffect(() => {
    if (loggedIn || updated) {
      userService.getProfile().then((res) => {
        localStorage.setItem("profile", JSON.stringify(res.data));
        dispatch(setProfile(res.data));
      });
      dispatch(updatedFlagUnset());
    }
  }, [loggedIn, updated]);

  return (
    <div className={`App`}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="listings" element={<Listings />} />
          <Route path="listings/:id" element={<Product />} />
          <Route
            path="sell"
            element={
              <PrivateRoute>
                <Sell />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="/post-listing" element={<PostListing />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <div className="fixed bottom-0 right-0">
        <Chatbot/>
      </div>
    </div>
  );
};

export default App;
