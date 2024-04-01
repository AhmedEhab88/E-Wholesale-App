import React, { useState } from 'react';

function AddRetailer() {
    const [name, setName] = useState<string>('');
    const [location, setLocation] = useState<string>('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(
            `The name you entered was: "${name}", location: ${location}`,
        );
        setName('');
        setLocation('');
    };
    return (
        <>
            <div className="mt-10 flex justify-center">
                <h1 className="text-[40px] text-[#004956]">Add a Retailer</h1>
            </div>

            <div className="flex flex-col gap-10 items-center w-full mt-10">
                <form
                    onSubmit={handleSubmit}
                    className="w-1/2 flex justify-center items-center flex-col "
                >
                    <div className="w-full flex justify-center items-center flex-col">
                        <label htmlFor="itemName">Name of Retailer:</label>
                        <input
                            name="itemName"
                            className="bg-[#EAE6E6] h-[30px] p-2 rounded-xl flex flex-row gap-2 items-center w-full"
                            type="text"
                            placeholder="Name of item"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="w-full flex justify-center items-center flex-col">
                        <label>Location:</label>
                        <input
                            className="bg-[#EAE6E6] h-[30px] p-2 rounded-xl flex flex-row gap-2 items-center w-full"
                            type="text"
                            placeholder="Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <input
                        type="submit"
                        className="bg-[#D8F8F1] p-2 rounded-xl hover:bg-[#004956] hover:text-white mt-10 w-1/2"
                    />
                </form>
            </div>
        </>
    );
}

export default AddRetailer;
