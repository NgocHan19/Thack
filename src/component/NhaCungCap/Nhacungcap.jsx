import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import images from '../../images';

function Nhacungcap() {
  const navigate = useNavigate(); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOrganizationDropdownOpen, setIsOrganizationDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleOrganizationDropdown = () => {
    setIsOrganizationDropdownOpen(!isOrganizationDropdownOpen);
  };

  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleNavigate = (path) => {
    navigate(path);
};

  return (
    <div className="relative w-full h-[1080px] bg-[#F4F7FA]">


<div className="left-[50px] top-[37px] absolute left-[70px] top-[20px] font-inter font-bold text-base leading-[29px] text-[#7D7D7D]">Quản lí nhà cung cấp</div>
<div className="w-[1150px] h-[170px] left-[50px] top-[86px] absolute bg-white rounded-[15px] shadow-lg" />
<div className="w-[1150px] h-[753px] left-[50px] top-[276px] absolute bg-white rounded-[15px] shadow-lg" />
  <img className="w-[50px] h-[50px] left-[90px] top-[113px] absolute" src={images['iconttncc.png']} />
  <div className="left-[150px] top-[118px] absolute text-[24px] font-bold text-black">Thông Tin Nhà Cung Cấp</div>
  <div className="left-[100px] top-[206px] absolute text-base text-[#3498DB]">Tổng số nhà cung cấp:</div>
  <div className="left-[500px] top-[205px] absolute text-base text-[#3498DB]">Số nhà cung cấp đang hợp tác:</div>
  <div className="absolute w-[279px] h-[50px] left-[70px] top-[299px]">
  <div className="w-[279px] h-[50px] left-0 top-0 absolute bg-[#d9d9d9]/60 rounded-[20px] flex items-center transition duration-200 hover:bg-[#c0c0c0]">
    <img src={images['icon_search.png']} alt="icon_search" className="w-[25px] h-[25px] ml-[15px]" />
    <input
      type="text"
      placeholder="Tìm kiếm..."
      className="ml-[15px] w-full h-full bg-transparent text-[#7f8089] font-semibold text-[14px] placeholder-[#A2A2A2] focus:outline-none"
    />
  </div>
</div>
  <div className="w-[1150px] h-[203px] left-[50px] top-[385px] absolute bg-white flex-col justify-start items-start inline-flex">
    <div className="self-stretch bg-[#f4f4f4] border-b border-[#e0e0e0] justify-start items-center inline-flex">
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch text-black text-xs font-semibold font-['Inter']">Trạng thái</div>
      </div>
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch text-black text-xs font-semibold font-['Inter']">Tên nhà cung cấp</div>
      </div>
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch text-black text-xs font-semibold font-['Inter']">Liên hệ</div>
      </div>
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch text-black text-xs font-semibold font-['Inter']">Địa chỉ</div>
      </div>
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch text-black text-xs font-semibold font-['Inter']">Số điện thoại</div>
      </div>
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch text-black text-xs font-semibold font-['Inter']">Email</div>
      </div>
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch text-black text-xs font-semibold font-['Inter']">Ngày bắt đầu hợp tác</div>
      </div>
    </div>
    <div className="self-stretch border-b border-[#e0e0e0] justify-start items-center inline-flex">
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch text-black text-xs font-normal font-['Inter']">1</div>
      </div>
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex" />
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch"></div>
      </div>
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch"></div>
      </div>
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch"></div>
      </div>
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch"></div>
      </div>
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch"></div>
      </div>
    </div>
    <div className="self-stretch border-b border-[#e0e0e0] justify-start items-center inline-flex">
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch text-black text-xs font-normal font-['Inter']">2</div>
      </div>
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch"></div>
      </div>
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch"></div>
      </div>
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch"></div>
      </div>
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch"></div>
      </div>
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch"></div>
      </div>
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch"></div>
      </div>
    </div>
    <div className="self-stretch border-b border-[#e0e0e0] justify-start items-center inline-flex">
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch text-black text-xs font-normal font-['Inter']">3</div>
      </div>
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch"></div>
      </div>
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch"></div>
      </div>
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch"></div>
      </div>
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch"></div>
      </div>
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch"></div>
      </div>
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch"></div>
      </div>
    </div>
    <div className="self-stretch border-b border-[#e0e0e0] justify-start items-center inline-flex">
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch text-black text-xs font-normal font-['Inter']">4</div>
      </div>
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch"></div>
      </div>
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch"></div>
      </div>
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch"></div>
      </div>
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch"></div>
      </div>
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch"></div>
      </div>
      <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
        <div className="self-stretch"></div>
      </div>
    </div>
  </div>
  <div  className="w-[135px] h-[40px] left-[950px] top-[124px] absolute bg-[#f39c12] rounded-[15px]" />

<div className="w-[135px] h-[60px] left-[800px] top-[124px] absolute" >
  <div className="w-[120px] h-[40px] left-0 top-0 absolute bg-[#3498db] rounded-[15px]" />
  <div className="w-[50px] h-[15px] left-[47px] top-[15px] absolute text-white text-xs font-semibold font-['Inter']"onClick={() => navigate('/nhacungcap-tao')}>Tạo mới</div>
  <img className="w-[15px] h-[15px] left-[20px] top-[15px] absolute" src={images['Plus.png']} />
</div>
<div className="w-[50px] h-[15px] left-[1000px] top-[140px] absolute text-white text-xs font-semibold font-['Inter']"onClick={() => navigate('/nhacungcap-sua')}>Chỉnhsửa</div>
<img src={images['Sua.png']} className="w-[15px] h-[15px] left-[970px] top-[140px] absolute"  />

  
  <div className="w-[119px] h-5 left-[1050px] top-[987px] absolute">
        <button>
        <img className="w-5 h-5 left-[99px] top-[20px] absolute origin-top-left -rotate-90" src={images['left.png']}/>
        </button>
        <button>
        <img className="w-5 h-5 left-[94px] top-0 absolute origin-top-left rotate-90" src={images['right.png']} />
        </button>
        <div className="left-0 top-[2px] absolute text-[#b1b1b1] text-xs font-bold font-['Inter']">1/ 10 trang</div>
      </div>
    </div>
  );
}
export default Nhacungcap;