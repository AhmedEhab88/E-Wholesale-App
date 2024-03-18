import { TimeOutline } from 'react-ionicons';
import Summaries from '../../components/Summaries/Summaries';

function Home() {
    const items = [
        { title: 'Revenue Generated', value: 150 },
        { title: 'Retailers', value: 26 },
    ];
    return (
        <div className="ml-10 mr-10 w-[90%]">
            <h1 className="text-4xl mt-10 font-bold italic text-left text-sky-400">
                Welcome [User]!
            </h1>
            <h3 className="text-xl mt-10">
                Here is a summary of the wholesale application...
            </h3>
            <div className="flex flex-row flex-wrap justify-between items-center w-full">
                {items.map((item) => (
                    <Summaries>
                        <TimeOutline
                            color={'#00000'}
                            title={'Time'}
                            height="50px"
                            width="50px"
                        />
                        <p>{item.title}</p>
                        <p>{item.value}</p>
                    </Summaries>
                ))}
            </div>
        </div>
    );
}

export default Home;
