import BasicInput from "../../components/BasicInput/BasicInput.jsx";
import {Link} from "react-router-dom";

const SignUp = () => {
    return (
        <div className="flex justify-center items-center h-screen px-2">
            <div className="sm:bg-base-color rounded-lg sm:shadow-md flex flex-col sm:p-6">
                <h1 className="text-title my-5 text-base-textRevnpm sm:text-blue-600 font-bold">Register</h1>
                <div className="flex flex-col space-y-4">
                    <div className="flex space-x-2">
                        <BasicInput validation={false} placeholder="First Name"/>
                        <BasicInput validation={false} placeholder="Last Name"/>
                    </div>
                    <BasicInput placeholder="Username"/>
                    <BasicInput type="email" placeholder="Email"/>
                    <BasicInput type="password" placeholder="Password"/>
                    <BasicInput type="password" placeholder="Confirm Password"/>
                </div>
                <button
                    className="bg-gradient-to-r shadow-md from-blue-600 to-blue-800 p-3 text-white font-bold rounded-full mt-8">Sign
                    up!
                </button>
                <div className="text-center mt-5 space-x-1"><span>Already have an account?</span>
                    <Link className="text-blue-600" to="/sign-in">Sign in</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;