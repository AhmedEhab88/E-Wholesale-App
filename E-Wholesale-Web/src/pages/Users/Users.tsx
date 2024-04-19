import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Button from '../../components/Button/Button';
import SearchBar from '../../components/SearchBar/SearchBar';
import ViewOption from '../../components/ViewOption/ViewOption';
import Modal from '../../components/Modal/Modal';
import DeleteOption from '../../components/DeleteOption/DeleteOption';

type Representative = {
    id: number;
    name: string;
    ordersCompleted: boolean;
    email: string;
    phoneNumber: string;
};

function Users() {
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [currentOpenItem, setCurrentOpenItem] = useState(-1);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [representatives, setRepresentatives] = useState<
        Array<Representative>
    >([]);

    useEffect(() => {
        fetch('http://localhost:39051/api/representative')
            .then((res) => {
                return res.json();
            })
            .then((data) => setRepresentatives(data.list));
    }, []);

    const navigate = useNavigate();

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
                {representatives.length > 0 ? (
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
                            {representatives.map((representative) => {
                                return (
                                    <tr key={representative.id}>
                                        <td className="border border-[#004956] border-solid text-center">
                                            {representative.id}
                                        </td>
                                        <td className="border border-[#004956] border-solid text-center">
                                            {representative.name}
                                        </td>
                                        <td className="border border-[#004956] border-solid text-center">
                                            {representative.ordersCompleted}
                                        </td>
                                        <td className="border border-[#004956] border-solid text-center">
                                            <ViewOption
                                                onClick={() => {
                                                    setIsViewModalOpen(true);
                                                    setCurrentOpenItem(
                                                        representative.id,
                                                    );
                                                }}
                                            />
                                            , Update,
                                            <DeleteOption
                                                onClick={() => {
                                                    setIsDeleteModalOpen(true);
                                                    setCurrentOpenItem(
                                                        representative.id,
                                                    );
                                                }}
                                            />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                ) : (
                    <p className="flex justify-center items-center text-red-500">
                        There are currently no Representatives.
                    </p>
                )}
            </div>

            {isViewModalOpen && (
                <Modal setIsOpen={setIsViewModalOpen}>
                    <div className="m-0 p-[10px] text-[#2c3e50] font-bold text-[20  px] text-center">
                        {
                            representatives.find(
                                (item) => item.id === currentOpenItem,
                            )!.name
                        }
                    </div>
                    <div className="p-[10px] text-[#2c3e50] te/xt-[16px] text-center">
                        Orders Completed:{' '}
                        {
                            representatives.find(
                                (item) => item.id === currentOpenItem,
                            )!.ordersCompleted
                        }
                    </div>
                    <div className="p-[10px] text-[#2c3e50] text-[16px] text-center">
                        Email:{' '}
                        {
                            representatives.find(
                                (item) => item.id === currentOpenItem,
                            )!.email
                        }
                    </div>
                    <div className="p-[10px] text-[#2c3e50] text-[16px] text-center">
                        Phone Number:{' '}
                        {
                            representatives.find(
                                (item) => item.id === currentOpenItem,
                            )!.phoneNumber
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
