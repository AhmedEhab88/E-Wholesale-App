interface SummariesProps {
    children: React.ReactNode;
}

function Summaries({ children }: SummariesProps) {
    return (
        <div className="font-oxanium my-5 w-[30%] bg-[#D8F8F1] h-36 rounded-xl flex flex-col items-center justify-center gap-3">
            {children}
        </div>
    );
}

export default Summaries;
