import { useState } from 'react';

function AddUser() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('func called');
        if (password.localeCompare(confirmPassword) != 0) {
            alert('Passwords do not match');
            return;
        }

        console.log(
            `The name you entered was: "${name}", email: ${email}, password: ${password}, phone number: ${phoneNumber}`,
        );
        setName('');
        setEmail('');
        setPhoneNumber('');
        setPassword('');
        setConfirmPassword('');
    };

    const checkPasswords = (confirmedPassword: string) => {
        if (password.localeCompare(confirmedPassword) != 0) {
            setPasswordsMatch(false);
        } else {
            setPasswordsMatch(true);
        }
    };

    return (
        <>
            <div className="mt-10 flex justify-center">
                <h1 className="text-[40px] text-[#004956]">Add a User</h1>
            </div>

            <div className="flex flex-col gap-10 items-center w-full mt-10">
                <form
                    onSubmit={handleSubmit}
                    className="w-1/2 flex justify-center items-center flex-col "
                >
                    <div className="w-full flex justify-center items-center flex-col">
                        <label htmlFor="itemName">Name of User:</label>
                        <input
                            name="itemName"
                            className="bg-[#EAE6E6] h-[30px] p-2 rounded-xl flex flex-row gap-2 items-center w-full"
                            type="text"
                            placeholder="Name of user"
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="w-full flex justify-center items-center flex-col">
                        <label>Email:</label>
                        <input
                            className="bg-[#EAE6E6] h-[30px] p-2 rounded-xl flex flex-row gap-2 items-center w-full"
                            type="email"
                            placeholder="E.g. test@test.com"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="w-full flex justify-center items-center flex-col">
                        <label>Password:</label>
                        <input
                            className="bg-[#EAE6E6] h-[30px] p-2 rounded-xl flex flex-row gap-2 items-center w-full"
                            type="password"
                            placeholder="Password"
                            value={password}
                            required
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                    <div className="w-full flex justify-center items-center flex-col">
                        <label>Confirm Password:</label>
                        <input
                            className="bg-[#EAE6E6] h-[30px] p-2 rounded-xl flex flex-row gap-2 items-center w-full"
                            type="password"
                            placeholder="Confirm Password"
                            required
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value.toString());
                                checkPasswords(e.target.value.toString());
                            }}
                        />
                    </div>
                    {!passwordsMatch && (
                        <p className="text-red-500 text-sm">
                            Passwords do not match!
                        </p>
                    )}
                    <div className="w-full flex justify-center items-center flex-col">
                        <label>Phone Number:</label>
                        <input
                            className="bg-[#EAE6E6] h-[30px] p-2 rounded-xl flex flex-row gap-2 items-center w-full"
                            type="text"
                            placeholder="11 digit phone number"
                            pattern="[0-9]{11}"
                            required
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
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

export default AddUser;
