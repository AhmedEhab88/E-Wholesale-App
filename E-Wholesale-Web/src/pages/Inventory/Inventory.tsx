import { useState } from 'react';

import SearchBar from '../../components/SearchBar/SearchBar';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';

function Inventory() {
    const [isOpen, setIsOpen] = useState(false);

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
                <Button>
                    <p className="text-sm px-5">Add Item</p>
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
                                Quanity
                            </th>
                            <th className="border border-[#004956] border-solid text-center">
                                Unit Price
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
                                        {item.Quantity}
                                    </td>
                                    <td className="border border-[#004956] border-solid text-center">
                                        {item.Price}
                                    </td>
                                    <td className="border border-[#004956] border-solid text-center">
                                        <span className="hover:cursor-pointer hover:text-[#52a895]">
                                            View
                                        </span>
                                        , Update,
                                        <span
                                            className="hover:cursor-pointer hover:text-red-500"
                                            onClick={() => setIsOpen(true)}
                                        >
                                            {' '}
                                            Delete{' '}
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                {isOpen && (
                    <Modal setIsOpen={setIsOpen}>
                        <div className="h-12 bg-white overflow-hidden rounded-t-2xl">
                            <h5 className="m-0 p-[10px] text-[#2c3e50] font-medium text-[18px] text-center">
                                Dialog
                            </h5>
                        </div>
                        <div className="p-[10px] text-[#2c3e50] text-[14px] text-center">
                            Are you sure you want to delete the item?
                        </div>
                        <div className="absolute bottom-[2px] mb-[10px] w-full">
                            <div className="flex justify-around items-center">
                                <button
                                    className="mt-2.5 cursor-pointer font-medium py-2.5 px-7 rounded-lg text-sm text-white bg-red-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-red-500"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Delete
                                </button>
                                <button
                                    className="mt-2.5 cursor-pointer font-medium py-2.5 px-7 rounded-lg text-sm text-gray-700 bg-gray-200 transition-all duration-300 hover:bg-gray-300"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </Modal>
                )}
            </div>
        </>
    );
}

export default Inventory;
