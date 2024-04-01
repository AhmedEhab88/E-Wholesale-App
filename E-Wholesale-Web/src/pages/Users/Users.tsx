import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';
import SearchBar from '../../components/SearchBar/SearchBar';

function Users() {
    const navigate = useNavigate();

    const data = [
        { Id: 1, Name: 'Ahmed', OrdersCompleted: 13 },
        { Id: 2, Name: 'Omar', OrdersCompleted: 25 },
        { Id: 3, Name: 'Mahmoud', OrdersCompleted: 20 },
        { Id: 4, Name: 'Khalid', OrdersCompleted: 37 },
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

export default Users;
