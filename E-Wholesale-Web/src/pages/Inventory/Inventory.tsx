import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SearchBar from '../../components/SearchBar/SearchBar';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import DeleteOption from '../../components/DeleteOption/DeleteOption';
import ViewOption from '../../components/ViewOption/ViewOption';

function Inventory() {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isViewItemModalOpen, setIsViewItemModalOpen] = useState(false);
    const [currentOpenItem, setCurrentOpenItem] = useState(-1);

    const navigate = useNavigate();

    const data = [
        { Id: 0, Name: 'Apples, 1KG', Quantity: 10, Price: '$1.05' },
        { Id: 1, Name: 'Bananas, 1KG', Quantity: 15, Price: '$1.50' },
        { Id: 2, Name: 'Milk, Al Marai', Quantity: 10, Price: '$3.05' },
    ];
    return (
        <>
            <div className="mt-10 flex justify-center">
                <h1 className="text-[40px] text-[#004956]">Inventory</h1>
            </div>
            <div className="flex justify-between items-center mt-10">
                <SearchBar />
                <Button onClick={() => navigate('add')}>
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
                                <tr key={item.Id}>
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
                                        <ViewOption
                                            onClick={() => {
                                                setIsViewItemModalOpen(true);
                                                setCurrentOpenItem(item.Id);
                                            }}
                                        />
                                        , Update,{' '}
                                        <DeleteOption
                                            onClick={() => {
                                                setIsDeleteModalOpen(true);
                                                setCurrentOpenItem(item.Id);
                                            }}
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                {isViewItemModalOpen && (
                    <Modal setIsOpen={setIsViewItemModalOpen}>
                        <div className="m-0 p-[10px] text-[#2c3e50] font-bold text-[20  px] text-center">
                            {
                                data.find(
                                    (item) => item.Id === currentOpenItem,
                                )!.Name
                            }
                        </div>
                        <div className="p-[10px] text-[#2c3e50] text-[16px] text-center">
                            Price: {data[currentOpenItem].Price}
                        </div>
                        <div className="p-[10px] text-[#2c3e50] text-[16px] text-center">
                            Quantity: {data[currentOpenItem].Quantity}
                        </div>
                    </Modal>
                )}

                {isDeleteModalOpen && (
                    <Modal setIsOpen={setIsDeleteModalOpen}>
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
                                    onClick={() => setIsDeleteModalOpen(false)}
                                >
                                    Delete
                                </button>
                                <button
                                    className="mt-2.5 cursor-pointer font-medium py-2.5 px-7 rounded-lg text-sm text-gray-700 bg-gray-200 transition-all duration-300 hover:bg-gray-300"
                                    onClick={() => setIsDeleteModalOpen(false)}
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
