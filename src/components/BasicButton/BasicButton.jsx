const BasicButton = ({children, onClick}) => {
    return (
        <button onClick={(e) => {
            e.preventDefault();
            onClick();
        }} className="border border-base-border shadow-sm bg-base-secondaryColor p-2 rounded-xl">
            {children}
        </button>
    );
};

export default BasicButton;
