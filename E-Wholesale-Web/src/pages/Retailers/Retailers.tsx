import Button from '../../components/Button/Button';
import SearchBar from '../../components/SearchBar/SearchBar';

function Retailers() {
    const data = [
        {
            Name: 'Al Morshedy Supermarket',
            Location: 'Smouha, Alexandria',
            Orders: 23,
        },
        {
            Name: 'Fathallah',
            Location: 'Gleem, Alexandria',
            Orders: 150,
        },
        {
            Name: 'Bim',
            Location: 'Victoria, Alexandria',
            Orders: 15,
        },
    ];

    return (
        <>
            <div className="mt-10 flex justify-center">
                <h1 className="text-[40px] text-[#004956]">Retailers</h1>
            </div>
            <div className="flex justify-between items-center mt-10">
                <SearchBar />
                <Button>
                    <p className="text-sm px-5">Add Retailer</p>
                </Button>
            </div>

            <div className="mt-10">
                <table className="w-full border-[#004956] border-solid border">
                    <thead>
                        <tr>
                            <th className="border border-[#004956] border-solid text-center">
                                Name
                            </th>
                            <th className="border border-[#004956] border-solid text-center">
                                Location
                            </th>
                            <th className="border border-[#004956] border-solid text-center">
                                Orders
                            </th>
                            <th className="border border-[#004956] border-solid text-center">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => {
                            return (
                                <tr key={item.Name}>
                                    <td className="border border-[#004956] border-solid text-center">
                                        {item.Name}
                                    </td>
                                    <td className="border border-[#004956] border-solid text-center">
                                        {item.Location}
                                    </td>
                                    <td className="border border-[#004956] border-solid text-center">
                                        {item.Orders}
                                    </td>
                                    <td className="border border-[#004956] border-solid text-center">
                                        View, Update, Delete
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Retailers;
