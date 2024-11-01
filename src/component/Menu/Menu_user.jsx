import React from 'react';
import images from '../../images';

function Menu_user() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute w-[280px] h-[1080px] left-0 top-0">
        <div className="absolute w-full h-full bg-gradient-to-r from-[#4B4E55] to-[#62656B] rounded-r-[15px]">
          <div className="absolute w-[180px] h-[60px] left-[30px] top-0">
            <img src={images['logo.png']} alt="Logo" className="w-full h-full object-cover rounded-r-[15px]" />
          </div>

          <div className="absolute w-[250px] h-[45px] left-[15px] top-[85px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] flex items-center transition duration-200 hover:bg-[#4B4E55]">
            <img src={images['search.png']} alt="icon_search" className="w-[25px] h-[25px] ml-[15px]" />
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="ml-[15px] w-full h-full bg-transparent text-white font-bold text-[14px] placeholder-[#A2A2A2] focus:outline-none"
            />
          </div>

          <div className="absolute w-[250px] h-[45px] left-[15px] top-[150px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px]">
            <button className="absolute left-[20px] top-[8px] text-[#FFFFFF] font-bold text-[17px]">Trang chủ</button>
          </div>

          <div className="absolute w-[250px] h-[45px] left-[15px] top-[215px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px]">
            <button className="absolute left-[20px] top-[8px] text-[#FFFFFF] font-bold text-[17px]">Giới thiệu về hệ thống</button>
          </div>

          <div className="absolute w-[250px] h-[45px] left-[15px] top-[280px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px]">
            <button className="absolute left-[20px] top-[8px] text-[#FFFFFF] font-bold text-[17px]">Liên hệ</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu_user;