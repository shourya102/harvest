import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BasicLink = ({ to, children }) => {
  return (
    <motion.div
      whileHover={{ background: "rgb(28, 128, 61)" }}
      className="border border-base-border text-white shadow-sm bg-base-secondaryColor p-3 rounded-xl"
    >
      <Link to={to}>{children}</Link>
    </motion.div>
  );
};

export default BasicLink;
