import { useState } from 'react';

function AddItem() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState<number>();
    const [quantity, setQuantity] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(
            `The name you entered was: "${name}", price: $${price}, quantity: ${quantity}`,
        );
    };

    return (
        <>
            <div className="mt-10 flex justify-center">
                <h1 className="text-[40px] text-[#004956]">Add an Item</h1>
            </div>

            <div className="flex flex-col gap-10 items-center w-full mt-10">
                <form
                    onSubmit={handleSubmit}
                    className="w-1/2 flex justify-center items-center flex-col "
                >
                    <div className="w-full flex justify-center items-center flex-col">
                        <label htmlFor="itemName">Name of Product:</label>
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
                        <label>Price of Product:</label>
                        <input
                            className="bg-[#EAE6E6] h-[30px] p-2 rounded-xl flex flex-row gap-2 items-center w-full"
                            type="number"
                            placeholder="Price, e.g. $10"
                            value={price}
                            onChange={(e) => setPrice(parseInt(e.target.value))}
                        />
                    </div>
                    <div className="w-full flex justify-center items-center flex-col">
                        <label>Quantity:</label>
                        <input
                            className="bg-[#EAE6E6] h-[30px] p-2 rounded-xl flex flex-row gap-2 items-center w-full"
                            type="text"
                            placeholder="Quantity, e.g. 10"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
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

export default AddItem;
