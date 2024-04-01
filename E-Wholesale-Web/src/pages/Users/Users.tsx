import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';
import SearchBar from '../../components/SearchBar/SearchBar';
import ViewOption from '../../components/ViewOption/ViewOption';
import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import DeleteOption from '../../components/DeleteOption/DeleteOption';

function Users() {
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [currentOpenItem, setCurrentOpenItem] = useState(-1);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const navigate = useNavigate();

    const data = [
        {
            Id: 1,
            Name: 'Ahmed',
            OrdersCompleted: 13,
            Email: 'ahmed@gmail.com',
            PhoneNumber: '01014417069',
        },
        {
            Id: 2,
            Name: 'Omar',
            OrdersCompleted: 25,
            Email: 'omar@gmail.com',
            PhoneNumber: '01014417069',
        },
        {
            Id: 3,
            Name: 'Mahmoud',
            OrdersCompleted: 20,
            Email: 'mahmoud@gmail.com',
            PhoneNumber: '01014417069',
        },
        {
            Id: 4,
            Name: 'Khalid',
            OrdersCompleted: 37,
            Email: 'khalid@gmail.com',
            PhoneNumber: '01014417069',
        },
    ];

    return (
        <>
            <div className="mt-10 flex justify-center">
                <h1 className="text-[40px] text-[#004956]">Users</h1>
            </div>
            <div className="flex justify-between items-center mt-10">
                <SearchBar />
                <Button onClick={() => navigate('add')}>
                    <p className="text-sm px-5">Add User</p>
                </Button>
            </div>

            <div className="mt-10">
                <table className="w-full border-[#004956] border-solid border">
                    <thead>
                        <tr>
                            <th className="border border-[#004956] border-solid text-center">
                                Id
                            </th>
                            <th className="border border-[#004956] border-solid text-center">
                                Name
                            </th>
                            <th className="border border-[#004956] border-solid text-center">
                                Orders Completed
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
                                        {item.Id}
                                    </td>
                                    <td className="border border-[#004956] border-solid text-center">
                                        {item.Name}
                                    </td>
                                    <td className="border border-[#004956] border-solid text-center">
                                        {item.OrdersCompleted}
                                    </td>
                                    <td className="border border-[#004956] border-solid text-center">
                                        <ViewOption
                                            onClick={() => {
                                                setIsViewModalOpen(true);
                                                setCurrentOpenItem(item.Id);
                                            }}
                                        />
                                        , Update,
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
                        Orders Completed:{' '}
                        {
                            data.find((item) => item.Id === currentOpenItem)!
                                .OrdersCompleted
                        }
                    </div>
                    <div className="p-[10px] text-[#2c3e50] text-[16px] text-center">
                        Email:{' '}
                        {
                            data.find((item) => item.Id === currentOpenItem)!
                                .Email
                        }
                    </div>
                    <div className="p-[10px] text-[#2c3e50] text-[16px] text-center">
                        Phone Number:{' '}
                        {
                            data.find((item) => item.Id === currentOpenItem)!
                                .PhoneNumber
                        }
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

export default Users;
