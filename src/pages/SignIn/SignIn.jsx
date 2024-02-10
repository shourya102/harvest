import BasicInput from "../../components/BasicInput/BasicInput.jsx";
import {Link} from "react-router-dom";

const SignIn = () => {
    return (
        <div className="flex justify-center h-screen items-center py-36 px-2">
            <div className="sm:bg-base-color rounded-lg sm:shadow-md w-[30rem]  flex flex-col sm:p-6">
                <h1 className="text-title my-5 text-base-textRev sm:text-blue-600 font-bold">Login</h1>
                <div className="flex flex-col space-y-4">
                    <BasicInput validation={false} placeholder="Username"/>
                    <BasicInput validation={false} type="password" placeholder="Password"/>
                </div>
                <button
                    className="bg-gradient-to-r shadow-md from-blue-600 to-blue-800 p-3 text-white font-bold rounded-full mt-8">Sign
                    in!
                </button>
                <div className="text-center mt-5 space-x-1"><span>Don't have an account?</span>
                    <Link className="text-blue-600" to="/sign-up">Sign up</Link>
                </div>
            </div>
        </div>
    );
};

export default SignIn;