import {BiSearch} from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai";

const Search = ({placeholder, value, setValue, onClear}) => {
    return (
        <search
            className="flex items-center p-2 space-x-1 text-paragraph border border-base-border rounded-xl overflow-clip">
            <div>
                <BiSearch/>
            </div>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder={placeholder}
            />
            <button onClick={onClear}>
                <AiOutlineClose/>
            </button>
        </search>
    );
};

export default Search;
