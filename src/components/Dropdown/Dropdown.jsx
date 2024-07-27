import { AnimatePresence, motion } from "framer-motion";
import React, {useEffect, useState} from "react";
import { AiFillCaretDown } from "react-icons/ai";
import BasicButton from "../BasicButton/BasicButton.jsx";

const Dropdown = ({ title, children, visibleFromParent, setVisibleFromParent}) => {
  const [isVisible, setIsVisible] = useState(false);
  const modifiedChildren = React.Children.map(children, (child, index) => {
    const isLast = index === children.length - 1;
    const className = isLast ? "p-2" : "border-b p-2 border-base-border";

    return React.cloneElement(child, {
      className: child.props.className
        ? `${child.props.className} ${className}`
        : `${className}`,
      onClick: child.props.onClick ? child.props.onClick : null,
    });
  });

  useEffect(() => {
    if (!visibleFromParent) {
      setIsVisible(false);
    }
  }, [visibleFromParent]);

  return (
    <div className="flex flex-col z-10">
      <BasicButton onClick={() => { setVisibleFromParent(prevState => !prevState); setIsVisible((prevState) => !prevState)}}>
        <span>{title}</span>
        <motion.div
          animate={{ rotate: isVisible ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <AiFillCaretDown />
        </motion.div>
      </BasicButton>
      <div className="relative">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.2 }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
              className="absolute overflow-clip w-full z-10 border border-base-border bg-gray-100 rounded-xl translate-y-3 p-2 flex flex-col "
            >
              {modifiedChildren}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Dropdown;
