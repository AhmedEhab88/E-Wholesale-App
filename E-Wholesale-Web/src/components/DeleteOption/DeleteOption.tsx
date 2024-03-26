interface DeleteOptionProps {
    onClick: () => void;
}

function DeleteOption({ onClick }: DeleteOptionProps) {
    return (
        <span
            className="hover:cursor-pointer hover:text-red-500"
            onClick={onClick}
        >
            Delete
        </span>
    );
}

export default DeleteOption;
