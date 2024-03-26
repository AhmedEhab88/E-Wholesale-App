interface ViewOptionProps {
    onClick: () => void;
}

function ViewOption({ onClick }: ViewOptionProps) {
    return (
        <span
            className="hover:cursor-pointer hover:text-[#52a895]"
            onClick={onClick}
        >
            View
        </span>
    );
}

export default ViewOption;
