import { motion } from "framer-motion";

const BasicButton = ({
  children,
  onClick,
  disabled,
  padding,
  width,
  className,
}) => {
  return (
    <motion.button
      whileHover={{ background: "rgb(28, 128, 61)" }}
      disabled={disabled}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      style={{ padding: padding, width: width }}
      className={`${className} flex items-center justify-center hover:bg-green-700 space-x-1 text-base-textRev p-3 border border-base-border shadow-sm bg-base-secondaryColor rounded-xl`}
    >
      {children}
    </motion.button>
  );
};

export default BasicButton;
