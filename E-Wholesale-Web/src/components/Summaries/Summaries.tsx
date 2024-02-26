interface SummariesProps {
    title: string;
    value: number;
}

function Summaries({ title, value }: SummariesProps) {
    return (
        <div className="shadow-xl my-5 border-2 border-purple-300 w-[30%] h-36 rounded flex flex-col items-center">
            <p>{title}</p>
            <p>{value}</p>
        </div>
    );
}

export default Summaries;
