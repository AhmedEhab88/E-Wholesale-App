import { TimeOutline } from 'react-ionicons';
import Summaries from '../../components/Summaries/Summaries';

function Home() {
    const items = [
        { title: 'Total Revenue Generated', value: '$1502.58' },
        { title: 'Total Retailers Registered', value: 53 },
        { title: 'Total Representatives', value: 26 },
        { title: 'Items in Inventory', value: 561 },
        { title: 'Orders Completed', value: 205 },
        { title: 'Pending Orders', value: 26 },
    ];
    return (
        <div>
            <h1 className="text-4xl mt-10 font-oxanium font-bold text-left text-[#004956]">
                Welcome, [User]!
            </h1>
            <h3 className="text-xl mt-10 text-[#004956] font-oxanium capitalize">
                Here's a summary of your wholesale shop.
            </h3>
            <div className="flex flex-row flex-wrap justify-between items-center w-full">
                {items.map((item) => (
                    <Summaries>
                        <TimeOutline
                            color={'#00000'}
                            title={'Time'}
                            height="40px"
                            width="40px"
                        />
                        <p>{item.title}</p>
                        <p className="text-[20px] font-medium">{item.value}</p>
                    </Summaries>
                ))}
            </div>
        </div>
    );
}

export default Home;
