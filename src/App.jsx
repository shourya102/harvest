import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import NoPage from "./pages/NoPage/NoPage.jsx";
import Header from "./components/Header/Header.jsx";
import {useSelector} from "react-redux";
import {selectTheme} from "./features/themeSlice.js";
import Footer from "./components/Footer/Footer.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import Listings from "./pages/Listings/Listings.jsx";

const App = () => {
    const theme = useSelector(selectTheme);
    return (
        <div className={`${theme} App`}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="sign-in" element={<SignIn/>}/>
                    <Route path="sign-up" element={<SignUp/>}/>
                    <Route path="listings" element={<Listings/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default App;
