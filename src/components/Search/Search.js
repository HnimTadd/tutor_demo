import React, {useState} from "react";
import SearchList from "./SearchList";
const items = [

    { name: "Belgium", content: "Europe" },
    { name: "India", content: "Asia" },
    { name: "Bolivia", content: "South America" },
    { name: "Ghana", content: "Africa" },
    { name: "Japan", content: "Asia" },
    { name: "Canada", content: "North America" },
    { name: "New Zealand", content: "Australasia" },
    { name: "Italy", content: "Europe" },
    { name: "South Africa", content: "Africa" },
    { name: "China", content: "Asia" },
    { name: "Paraguay", content: "South America" },
    { name: "Usa", content: "North America" },
    { name: "France", content: "Europe" },
    { name: "Botswana", content: "Africa" },
    { name: "Spain", content: "Europe" },
    { name: "Senegal", content: "Africa" },
    { name: "Brazil", content: "South America" },
    { name: "Denmark", content: "Europe" },
    { name: "Mexico", content: "South America" },
    { name: "Australia", content: "Australasia" },
    { name: "Tanzania", content: "Africa" },
    { name: "Bangladesh", content: "Asia" },
    { name: "Portugal", content: "Europe" },
    { name: "Pakistan", content: "Asia" },
  
  ];
const Search = (props) => {
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) =>{
        e.preventDefault();
        setSearchInput(e.target.value)
    }
    const list = () => {
        if (searchInput.length > 0) {
            const listItems = items.filter((item) => {
                return item.content.includes(searchInput)
            })
            return <SearchList items={listItems}></SearchList>
        }
    }
    return (
        <form className="max-w-sm px-4">
            <div className="relative rounded-[30%]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    type="search"
                    placeholder={props.placeholder}
                    className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-[20px] outline-none bg-gray-50 focus:bg-white"
                    onChange={handleChange}
                    value={searchInput}
                />
            </div>
                {list()}
        </form>
    ) 
}
export default Search