/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import SearchList from './SearchList';

const items = [

  { name: 'Toán 11', content: 'Thủ Đức' },
  { name: 'Ngữ văn 11', content: 'Bình Thạnh' },
  { name: 'Lập trình', content: 'Gò Vấp' },
  { name: 'Toán 12', content: 'Thủ Đức' },
  { name: 'Vật lý 10', content: 'Gò Vấp' },
  { name: 'Giải tích', content: 'Quận 9' },
  { name: 'Hoá học 11', content: 'Quận 2' },
  { name: 'Guitar', content: 'Tân Bình' },
  { name: 'Lập trình', content: 'Quận 10' },
  { name: 'Vật lý 8', content: 'Thủ Đức' },
  { name: 'Toán 10', content: 'Dĩ An, Bình Dương' },
  { name: 'Ngữ văn 12', content: 'Thủ Đức' },
  { name: 'Toán, Lý, Hoá 8', content: 'Thủ Đức' },
  { name: 'Anh Văn 8', content: 'Thủ Đức' },
  { name: 'Anh văn 9', content: 'Gò Vấp' },
  { name: 'Ngữ văn 8', content: 'Gò Vấp' },
  { name: 'Vật Lý 10', content: 'Thủ Đức' },
  { name: 'Toán 11', content: 'Gò Vấp' },
  { name: 'Ôn thi đại học', content: 'Thủ Đức' },
  { name: 'Báo bài', content: 'Gò Vấp' },
  { name: 'Lập trình hướng đối tượng', content: 'Gò Vấp' },
  { name: 'Ôn thi đại học', content: 'Thủ Đức' },
  { name: 'Lập trình OOP', content: 'Gò Vấp' },
  { name: 'Toán nâng cao 11', content: 'Gò Vấp' },
  { name: 'Lý, Hoá 12', content: 'Gò Vấp' },

];
function Search(props) {
  const { placeholder = 'Search job' } = props;
  const [searchInput, setSearchInput] = useState('');
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  const list = () => {
    if (searchInput.length > 0) {
      const listItems = items.filter((item) => item.content.includes(searchInput));
      return <SearchList items={listItems} />;
    }
    return null;
  };
  return (
    <form className="max-w-[400px] min-w-[500px] relative">
      <div className="relative rounded-[30%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6  my-auto text-gray-400 left-3"
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
          placeholder={placeholder}
          className="w-full py-2 pl-12 pr-4 text-gray-500 border rounded-[20px] outline-none bg-gray-50 focus:bg-white"
          onChange={handleChange}
          value={searchInput}
        />
      </div>
      {list()}
    </form>
  );
}
export default Search;
