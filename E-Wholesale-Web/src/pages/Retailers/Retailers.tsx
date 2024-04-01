import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useState } from 'react';
import ViewOption from '../../components/ViewOption/ViewOption';
import Modal from '../../components/Modal/Modal';
import DeleteOption from '../../components/DeleteOption/DeleteOption';

function Retailers() {
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [currentOpenItem, setCurrentOpenItem] = useState<number>(-1);
    const navigate = useNavigate();

    const data = [
        {
            Id: 0,
            Name: 'Al Morshedy Supermarket',
            Location: 'Smouha, Alexandria',
            Orders: 23,
        },
        {
            Id: 1,
            Name: 'Fathallah',
            Location: 'Gleem, Alexandria',
            Orders: 150,
        },
        {
            Id: 2,
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
                <Button onClick={() => navigate('add')}>
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
                                        <ViewOption
                                            onClick={() => {
                                                setIsViewModalOpen(true);
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
            </div>

            {isViewModalOpen && (
                <Modal setIsOpen={setIsViewModalOpen}>
                    <div className="m-0 p-[10px] text-[#2c3e50] font-bold text-[20  px] text-center">
                        {data.find((item) => item.Id === currentOpenItem)!.Name}
                    </div>
                    <div className="p-[10px] text-[#2c3e50] text-[16px] text-center">
                        Location: {data[currentOpenItem].Location}
                    </div>
                    <div className="p-[10px] text-[#2c3e50] text-[16px] text-center">
                        Orders: {data[currentOpenItem].Orders}
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
        </>
    );
}

export default Retailers;
