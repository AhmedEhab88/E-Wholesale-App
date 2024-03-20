interface ButtonProps {
    children: React.ReactNode;
}

function Button({ children }: ButtonProps) {
    return (
        <button className="bg-[#D8F8F1] p-2 rounded-xl hover:bg-[#004956] hover:text-white">
            {children}
        </button>
    );
}

export default Button;
