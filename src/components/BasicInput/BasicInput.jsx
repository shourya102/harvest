import React from 'react';
import {AiOutlineCheck} from "react-icons/ai";

const BasicInput = ({placeholder, type, validation = true}) => {
    return (
        <div
            className="flex items-center bg-base-color rounded-xl p-3 overflow-clip shadow-sm border border-base-border">
            <input
                placeholder={placeholder}
                className={`${validation ? "" : "rounded-xl"} w-full flex  `}
                type={type ? type : "text"}/>
            {validation && <div><AiOutlineCheck/></div>}
        </div>

    );
};

export default BasicInput;