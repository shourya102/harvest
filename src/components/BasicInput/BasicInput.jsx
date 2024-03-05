import React from "react";
import { AiFillExclamationCircle, AiOutlineCheck } from "react-icons/ai";

const BasicInput = ({
  placeholder,
  id,
  className,
  type,
  validated = false,
  validation = true,
  value,
  onChange,
}) => {
  return (
    <div className="flex w-full items-center rounded-xl overflow-clip shadow-sm border border-base-borderColored">
      <input
        id={id}
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        className={`${className} ${validation ? "" : "rounded-xl"} p-3 w-full flex`}
        type={type ? type : "text"}
      />
      {validation && validated && (
        <div className="text-green-600 p-3">
          <AiOutlineCheck />
        </div>
      )}
      {validation && !validated && (
        <div className="text-red-600 p-3">
          <AiFillExclamationCircle />
        </div>
      )}
    </div>
  );
};

export default BasicInput;
