import React from 'react';
import images from '../../images';

function Login() {
  return (
    <div className="relative w-full h-[800px]">
      {/* Menu*/}
      <div className="absolute w-[280px] h-full left-0 top-0">
        <div className="absolute w-full h-full bg-gradient-to-r from-[#4B4E55] to-[#62656B] rounded-r-[15px]"></div>
        {/* Logo*/}
        <div className="absolute w-[180px] h-[60px] left-[30px] top-0">
          <img src={images['logo.png']} alt="Logo" className="w-full h-full object-cover rounded-r-[15px]" />
        </div>
        {/* Tìm kiếm */}
        <div className="absolute w-[250px] h-[45px] left-[15px] top-[85px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px_10px_15px_10px] flex items-center transition duration-200 hover:bg-[#4B4E55]">
          <img src={images['search.png']} alt="icon_search" className="w-[25px] h-[25px] ml-[15px]" />
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="ml-[15px] w-full h-full bg-transparent text-white font-bold text-[14px] placeholder-[#A2A2A2] focus:outline-none"
          />
        </div>
        {/* btn Trang chủ */}
        <div className="absolute w-[250px] h-[45px] left-[15px] top-[150px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px_10px_15px_10px]">
          <button className="absolute left-[20px] top-[8px] text-[#FFFFFF] font-bold text-[17px]">Trang chủ</button>
        </div>
        {/* Giới thiệu về hệ thống */}
        <div className="absolute w-[250px] h-[45px] left-[15px] top-[215px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px_10px_15px_10px]">
          <button className="absolute left-[20px] top-[8px] text-[#FFFFFF] font-bold text-[17px]">Giới thiệu về hệ thống</button>
        </div>
        {/* Liên hệ */}
        <div className="absolute w-[250px] h-[45px] left-[15px] top-[280px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px_10px_15px_10px]">
          <button className="absolute left-[20px] top-[8px] text-[#FFFFFF] font-bold text-[17px]">Liên hệ</button>
        </div>
      </div>

      <div className="absolute left-[400px] top-[50px]">
        <h1 className="text-[#3498DB] font-bold text-[36px] leading-[44px]">Chào mừng bạn đã quay trở lại</h1>
        <p className="text-[#A2A2A2] font-normal text-[24px] leading-[34px]">Vui lòng đăng nhập để tiếp tục quản lý kho hiệu quả!</p>
      </div>
      {/* Email */}
      <div className="absolute left-[400px] top-[180px]">
        <span className="text-[#868585] text-[24px] font-normal">Email</span>
        <div className="mt-[10px] relative w-[827px] h-[60px] bg-[#FFFFFF] border border-[#A3A3A3] rounded-[5px] flex items-center hover:border-[#3498DB] transition duration-200">
          <img src={images['icon_email.png']} alt="icon_email" className="w-[30px] h-[30px] ml-[15px]" />
          <input
            type="text"
            className="ml-[15px] w-full h-full bg-transparent text-black text-[20px] placeholder-[#A2A2A2] focus:outline-none"
            placeholder="Nhập email..."
          />
        </div>
      </div>
      {/* Mật khẩu */}
      <div className="absolute left-[400px] top-[330px]">
        <span className="text-[#868585] text-[24px] font-normal">Mật khẩu</span>
        <div className="mt-[10px] relative w-[827px] h-[60px] bg-[#FFFFFF] border border-[#A3A3A3] rounded-[5px] flex items-center hover:border-[#3498DB] transition duration-200">
          <img src={images['icon_pass.png']} alt="Password Icon" className="w-[30px] h-[30px] ml-[15px]" />
          <input
            type="password"
            className="ml-[15px] w-full h-full bg-transparent text-black text-[20px] placeholder-[#A2A2A2] focus:outline-none"
            placeholder="Nhập mật khẩu..."
          />
        </div>
      </div>

      {/* Đăng nhập button */}
      <div className="absolute left-[400px] top-[480px] w-[827px] h-[60px] bg-[#3498DB] rounded-[5px] flex items-center justify-center">
        <span className="text-[#FFFBFB] text-[24px] font-bold">Đăng nhập</span>
      </div>

      <div className="absolute left-[600px] top-[580px]">
        <p className="text-[#5E5D5D] text-[20px] font-bold">Bạn gặp khó khăn khi tạo tài khoản?</p>
      </div>

      <div className="absolute left-[560px] top-[605px]">
        <p className="mt-[10px] text-[#A2A2A2] text-[20px] font-normal">Vui lòng gọi tới số 0123456789 (giờ hành chính).</p>
      </div>
    </div>
  );
}

export default Login;