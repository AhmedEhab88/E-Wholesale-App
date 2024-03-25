interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}

function Button({ children, onClick }: ButtonProps) {
    return (
        <button
            className="bg-[#D8F8F1] p-2 rounded-xl hover:bg-[#004956] hover:text-white"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
