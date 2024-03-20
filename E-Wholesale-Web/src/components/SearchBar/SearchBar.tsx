import { SearchOutline } from 'react-ionicons';

function SearchBar() {
    return (
        <div className="bg-[#EAE6E6] w-[40%] h-[30px] rounded-xl flex flex-row gap-2 items-center">
            <span className="pl-2">
                <SearchOutline />
            </span>
            <input
                placeholder="Search"
                className="bg-inherit pl-3 w-[90%] focus:outline-none"
            ></input>
        </div>
    );
}

export default SearchBar;
