import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import hook điều hướng
import images from '../../images';

function DSLK_NV2() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isTableVisible, setIsTableVisible] = useState(false);

  const toggleTable = () => {
    setIsTableVisible(!isTableVisible);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const navigate = useNavigate(); // Hook điều hướng

  const handleNavigate = (path) => {
      navigate(path); // Use navigate
  };
  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="relative w-full h-[1080px] bg-[#EEEEEE]">

  <div className="left-[50px] top-[37px] absolute text-[#7d7d7d] text-2xl font-bold font-['Inter']" onClick={() => navigate('/dslk')}>Kho Linh Kiện/ Chi Tiết Linh Kiện</div>
  <div className="w-[1150px] h-[170px] left-[50px] top-[86px] absolute bg-white rounded-[15px]" />
  <div className="w-[1150px] h-[753px] left-[50px] top-[276px] absolute bg-white rounded-[15px]" />
    <div className="left-[150px] top-[118px] absolute text-black text-[32px] font-bold font-['Inter']">Thông Tin Linh Kiện</div>
  <img src={images['icon_dslk.png']} alt="icon_lh" className="w-[50px] h-[50px] left-[90px] top-[113px] absolute"  />
  <div className="left-[100px] top-[208px] absolute text-[#3498db] text-base font-bold font-['Inter']">Tên lô:</div>
  <div className="left-[500px] top-[208px] absolute text-[#3498db] text-base font-bold font-['Inter']">Tên linh kiện:</div>
  
  <div className="w-[1150px] h-[284px] left-[50px] top-[299px] absolute">
    <div className="left-[250px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Số seri</div>
    <div className="left-[370px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Ngày sản xuất</div>
    <div className="left-[50px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Barcode</div>
    <div className="w-full h-[0px] left-0 top-[35px] absolute border-2 border-[#7f7e7e]"></div>
    <div className="left-[50px] top-[55px] absolute text-black text-sm font-normal font-['Inter']">BA01</div>
    <div className="left-[230px] top-[55px] absolute text-black text-sm font-normal font-['Inter']">01234567</div>
    <div className="left-[370px] top-[55px] absolute text-black text-sm font-normal font-['Inter']">06/07/2022</div>
    <div className="left-[580px] top-[55px] absolute text-black text-sm font-normal font-['Inter']">6 tháng</div>
    <div className="left-[800px] top-[55px] absolute text-black text-sm font-normal font-['Inter']">06/07/2022</div>
    <div className="left-[960px] top-[55px] absolute text-black text-sm font-normal font-['Inter']">Mô tả 1</div>
    <div className="w-full h-[0px] left-0 top-[84px] absolute border-2 border-[#cdcdcd]"></div>
    <div className="w-full h-[0px] left-0 top-[134px] absolute border-2 border-[#7f7e7e]"></div>
    <div className="w-full left-0 top-[183px] absolute border-2 border-[#7f7e7e]"></div>
    <div className="w-full h-[0px] left-0 top-[134px] absolute border-2 border-[#cdcdcd]"></div>
    <div className="w-full h-[0px] left-0 top-[183px] absolute border-2 border-[#cdcdcd]"></div>
    <div className="w-[25px] h-[0px] left-[180px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="w-[25px] h-[0px] left-[320px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="w-[25px] h-[0px] left-[500px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="left-[555px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Thời gian sử dụng</div>
    <div className="w-[25px] h-[0px] left-[750px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="left-[800px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Ngày hết hạn</div>
    <div className="w-[25px] h-[0px] left-[920px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="left-[1000px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Mô tả</div>
    <div className="w-full h-[0px] left-0 top-[235px] absolute border-2 border-[#cdcdcd]"></div>
    <div className="w-full h-[0px] left-0 top-[284px] absolute border-2 border-[#cdcdcd]"></div>
  </div>
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


export default DSLK_NV2;