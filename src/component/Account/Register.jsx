import React, { useState } from 'react';
import images from '../../images';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
      navigate(path);
    };
    
  return (
    <div className="relative w-full h-[1080px] bg-white">
      <h1 className="absolute left-[154px] top-[65px] text-[#1A73E8] font-bold text-4xl leading-[44px]">
        Chào mừng bạn đến với Thack
      </h1>
      <p className="absolute left-[154px] top-[123px] text-[#A2A2A2] font-normal text-xl leading-[34px]">
        Vui lòng đăng ký để bắt đầu quản lý kho một cách hiệu quả
      </p>

      <label htmlFor="fullName" className="absolute left-[154px] top-[200px] text-[#868585] font-normal text-2xl leading-[29px]">
        Họ và tên
      </label>
      <div className="absolute left-[154px] top-[240px] w-[827px] h-[60px] bg-white border border-[#A3A3A3] rounded-[5px] flex items-center">
        <img src={images['icon_account.png']} alt="Icon" className="w-[35px] h-[35px] ml-[15px]" />
        <input
          id="fullName"
          type="text"
          placeholder="Nhập họ tên..."
          className="ml-[15px] placeholder-[#A2A2A2] text-[20px] leading-[24px] outline-none w-full pr-[45px]"
        />
      </div>

      <label htmlFor="email" className="absolute left-[154px] top-[340px] text-[#868585] font-normal text-2xl leading-[29px]">
        Email
      </label>
      <div className="absolute left-[154px] top-[380px] w-[827px] h-[60px] bg-white border border-[#A3A3A3] rounded-[5px] flex items-center">
        <img src={images['icon_email.png']} alt="Icon" className="w-[30px] h-[30px] ml-[15px]" />
        <input
          id="email"
          type="email"
          placeholder="Nhập email..."
          className="ml-[15px] placeholder-[#A2A2A2] text-[20px] leading-[24px] outline-none w-full pr-[45px]"
        />
      </div>

      <label htmlFor="password" className="absolute left-[154px] top-[480px] text-[#868585] font-normal text-2xl leading-[29px]">
        Mật khẩu
      </label>
      <div className="absolute left-[154px] top-[520px] w-[827px] h-[60px] bg-white border border-[#A3A3A3] rounded-[5px] flex items-center">
        <img src={images['icon_pass.png']} alt="Icon" className="w-[30px] h-[30px] ml-[15px]" />
        <input
          id="password"
          type="password"
          placeholder="Nhập mật khẩu..."
          className="ml-[15px] placeholder-[#A2A2A2] text-lg leading-[24px] outline-none w-full pr-[45px]"
        />
      </div>

      <label htmlFor="confirmPassword" className="absolute left-[154px] top-[620px] text-[#868585] font-normal text-2xl leading-[29px]">
        Nhập lại mật khẩu
      </label>
      <div className="absolute left-[154px] top-[660px] w-[827px] h-[60px] bg-white border border-[#A3A3A3] rounded-[5px] flex items-center">
        <img src={images['icon_pass.png']} alt="Icon" className="w-[30px] h-[30px] ml-[15px]" />
        <input
          id="confirmPassword"
          type="password"
          placeholder="Nhập lại mật khẩu..."
          className="ml-[15px] placeholder-[#A2A2A2] text-lg leading-[24px] outline-none w-full pr-[45px]"
        />
      </div>

      <div className="absolute left-[154px] top-[760px] flex items-center">
        <input
          type="checkbox"
          className="w-[24px] h-[24px] mr-[10px]"
        />
        <span className="text-[#868585] text-lg leading-[24px]">Tôi đã đọc và đồng ý với Điều khoản dịch vụ và Chính sách bảo mật của Thack</span>
      </div>

      <button
        className="absolute left-[154px] top-[820px] w-[827px] h-[60px] bg-[#1A73E8] text-white text-[24px] font-bold leading-[29px] rounded-[5px]"
      >
        Đăng ký
      </button>

      <button className="absolute left-[398px] top-[900px] text-[#A2A2A2] font-normal text-[20px] leading-[24px]" 
        onClick={() => navigate('/dangnhap')} >Bạn đã có tài khoản? Đăng nhập ngay</button>
      <p className="absolute left-[350px] top-[1000px] text-[#A2A2A2] font-normal text-[20px] leading-[24px]">Vui lòng gọi tới số 0123456789 (giờ hành chính).</p>
    </div>
  );
};

export default Register;
