import { useState } from 'react';

function DropdownSearch({ data, onSelect, placeholder = "Search..." }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // Lọc danh sách dựa trên từ khóa nhập vào
  const filteredData = data.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Xử lý sự kiện chọn mục từ dropdown
  const handleSelect = (item) => {
    onSelect(item);
    setIsOpen(false);
    setSearchTerm(''); // Xóa từ khóa tìm kiếm sau khi chọn
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsOpen(true)} // Mở dropdown khi focus vào input
        className="w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        placeholder={placeholder}
      />
      {isOpen && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 max-h-60 overflow-auto">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <li
                key={index}
                onClick={() => handleSelect(item)}
                className="cursor-pointer px-4 py-2 hover:bg-gray-200"
              >
                {item}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default DropdownSearch;
