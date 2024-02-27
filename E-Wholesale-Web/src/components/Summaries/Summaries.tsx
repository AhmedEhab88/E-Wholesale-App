import { TimeOutline } from 'react-ionicons';

interface SummariesProps {
    title: string;
    value: number;
}

function Summaries({ title, value }: SummariesProps) {
    return (
        <div className="shadow-xl my-5 border-2 border-purple-300 w-[30%] h-36 rounded-xl flex flex-col items-center gap-3">
            <TimeOutline
                color={'#00000'}
                title={'Time'}
                height="50px"
                width="50px"
            />
            <p>{title}</p>
            <p>{value}</p>
        </div>
    );
}

export default Summaries;
