const BasicButton = ({children, onClick}) => {
    return (
        <button onClick={(e) => {
            e.preventDefault();
            onClick();
        }}
                className="flex items-center space-x-1 text-base-textRev p-3 border border-base-border shadow-sm bg-base-secondaryColor rounded-xl">
            {children}
        </button>
    );
};

export default BasicButton;
