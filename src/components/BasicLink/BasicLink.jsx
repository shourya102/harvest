import {Link} from "react-router-dom";

const BasicLink = ({to, children}) => {
    return (
        <Link className="border border-base-border shadow-sm bg-base-secondaryColor p-3 rounded-xl" to={to}>
            {children}
        </Link>
    );
};

export default BasicLink;