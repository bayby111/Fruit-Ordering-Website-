import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { districtsData, provincesData } from './data_location';

const LocationSelector = ({onLocationChange = {}}) => {
  // Dữ liệu mẫu cho tỉnh, huyện, phường
  
  const [provinces] = useState(provincesData);
  const [districts, setDistricts] = useState([]);
//   const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

//   // Gọi hàm từ component cha khi người dùng chọn đủ tỉnh, huyện, phường
  useEffect(() => {
    if (selectedProvince && selectedDistrict ) {
      onLocationChange({
        province: provincesData.find(p => p.id === selectedProvince)?.name,
        district: districtsData[selectedProvince].find(d => d.id === selectedDistrict)?.name,
        // ward: wardsData[selectedDistrict].find(w => w.id === selectedWard)?.name
      });
    }
  }, [selectedProvince, selectedDistrict]);

  const handleProvinceChange = (selectedOption) => {
    const provinceId = selectedOption ? selectedOption.id : '';
    setSelectedProvince(provinceId);
    setDistricts(districtsData[provinceId] || []);
    // setWards([]); // Reset wards khi thay đổi tỉnh
  };

  const handleDistrictChange = (selectedOption) => {
    const districtId = selectedOption ? selectedOption.id : '';
    setSelectedDistrict(districtId);
    // setWards(wardsData[districtId] || []);
  };
  return (
    <div className="space-y-6">
      <div className="flex flex-col">
        <label className="font-semibold mb-2">Tỉnh:</label>
        <Select
          name="ls_province"
          options={provinces.map(province => ({ id: province.id, value: province.id, label: province.name }))}
          onChange={handleProvinceChange}
          isClearable
          className="basic-select"
          classNamePrefix="select"
          placeholder="Chọn tỉnh"
          styles={{
            control: (base) => ({
              ...base,
              padding: '6px',
              border: '1px solid #E5E7EB', // Tailwind color: border-gray-300
              borderRadius: '0.375rem', // Tailwind border-radius: rounded-lg
            }),
          }}
        />
      </div>

      <div className="flex flex-col">
        <label className="font-semibold mb-2">Quận/Huyện:</label>
        <Select
          name="ls_district"
          options={districts.map(district => ({ id: district.id, value: district.id, label: district.name }))}
          onChange={handleDistrictChange}
          isClearable
          isDisabled={!selectedProvince}
          className="basic-select"
          classNamePrefix="select"
          placeholder="Chọn huyện"
          styles={{
            control: (base, state) => ({
              ...base,
              padding: '6px',
              border: state.isDisabled ? '1px solid #D1D5DB' : '1px solid #E5E7EB', // Tailwind: disabled:bg-gray-200 and border-gray-300
              backgroundColor: state.isDisabled ? '#F3F4F6' : '#FFFFFF', // Tailwind: bg-gray-100
              borderRadius: '0.375rem', // Tailwind border-radius: rounded-lg
            }),
          }}
        />
      </div>

      {/* <div className="flex flex-col">
        <label className="font-semibold mb-2">Phường/Xã:</label>
        <Select
          name="ls_ward"
          options={wards.map(ward => ({ id: ward.id, value: ward.id, label: ward.name }))}
          isClearable
          isDisabled={!selectedDistrict}
          className="basic-select"
          classNamePrefix="select"
          placeholder="Chọn phường"
          styles={{
            control: (base, state) => ({
              ...base,
              padding: '6px',
              border: state.isDisabled ? '1px solid #D1D5DB' : '1px solid #E5E7EB', // Tailwind: disabled:bg-gray-200 and border-gray-300
              backgroundColor: state.isDisabled ? '#F3F4F6' : '#FFFFFF', // Tailwind: bg-gray-100
              borderRadius: '0.375rem', // Tailwind border-radius: rounded-lg
            }),
          }}
        />
      </div> */}

    </div>
  );
};

export default LocationSelector;
