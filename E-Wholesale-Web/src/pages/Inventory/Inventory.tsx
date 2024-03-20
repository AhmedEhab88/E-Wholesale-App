import SearchBar from '../../components/SearchBar/SearchBar';

function Inventory() {
    const data = [
        { Name: 'Apples, 1KG', Quantity: 10, Price: '$1.05' },
        { Name: 'Bananas, 1KG', Quantity: 15, Price: '$1.50' },
        { Name: 'Milk, Al Marai', Quantity: 10, Price: '$3.05' },
    ];
    return (
        <>
            <div className="mt-10 flex justify-center">
                <h1 className="text-[40px] text-[#004956]">Inventory</h1>
            </div>
            <div className="flex justify-between items-center mt-10">
                <SearchBar />

                <button className="bg-[#D8F8F1] p-2 rounded-xl hover:bg-[#004956] hover:text-white">
                    <p className="text-sm px-5">Add Item</p>
                </button>
            </div>
            <div className="mt-10">
                <table className="w-full border-[#004956] border-solid border">
                    <tr>
                        <th className="border border-[#004956] border-solid text-center">
                            Name
                        </th>
                        <th className="border border-[#004956] border-solid text-center">
                            Quanity
                        </th>
                        <th className="border border-[#004956] border-solid text-center">
                            Unit Price
                        </th>
                        <th className="border border-[#004956] border-solid text-center">
                            Actions
                        </th>
                    </tr>
                    {data.map((item) => {
                        return (
                            <tr>
                                <td className="border border-[#004956] border-solid text-center">
                                    {item.Name}
                                </td>
                                <td className="border border-[#004956] border-solid text-center">
                                    {item.Price}
                                </td>
                                <td className="border border-[#004956] border-solid text-center">
                                    {item.Quantity}
                                </td>
                                <td className="border border-[#004956] border-solid text-center">
                                    View, Update, Delete
                                </td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        </>
    );
}

export default Inventory;
