interface SummariesProps {
    children: React.ReactNode;
}

function Summaries({ children }: SummariesProps) {
    return (
        <div className="shadow-xl my-5 border-2 border-sky-300 w-[30%] h-36 rounded-xl flex flex-col items-center gap-3">
            {children}
        </div>
    );
}

export default Summaries;
