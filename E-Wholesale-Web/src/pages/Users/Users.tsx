import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import useFetch from '../../hooks/useFetch';

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

    const { data, error, isLoading } = useFetch(
        'http://localhost:39051/api/representative',
    );

    // if (data != null && data.list != null) {
    //     setRepresentatives(data!.list);
    // }

    const navigate = useNavigate();

    if (error) {
        return (
            <p className="text-red-500 text-xl flex justify-center items-center">
                An error occured while fetching representatives.
            </p>
        );
    }

    if (isLoading) {
        return (
            <div role="status" className="flex justify-center items-center">
                <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                    />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                    />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        );
    }

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
                {representatives.length > 0 && (
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
