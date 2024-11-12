import React from 'react';
import images from '../../images';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="relative w-full h-auto">
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
      <div className="absolute left-[400px] top-[300px]">
        <span className="text-[#868585] text-[24px] font-normal">Mật khẩu</span>
        <div className="mt-[10px] relative w-[827px] h-[60px] bg-[#FFFFFF] border border-[#A3A3A3] rounded-[5px] flex items-center hover:border-[#3498DB] transition duration-200">
          <img src={images['icon_email.png']} alt="icon_email" className="w-[30px] h-[30px] ml-[15px]" />
          <input
            type="text"
            className="ml-[15px] w-full h-full bg-transparent text-black text-[20px] placeholder-[#A2A2A2] focus:outline-none"
            placeholder="Nhập mật khẩu..."
          />
        </div>
      </div>

      {/* Đăng nhập button */}
      <div className="absolute left-[400px] top-[445px] w-[827px] h-[60px] bg-[#3498DB] rounded-[5px] flex items-center justify-center">
        <span className="text-[#FFFBFB] text-[24px] font-bold">Đăng nhập</span>
      </div>

      {/* Đăng nhập bằng Gmail button */}
      <div className="absolute left-[400px] top-[530px] w-[827px] h-[60px] bg-[#DB4437] rounded-[5px] flex items-center justify-center cursor-pointer transition duration-200 hover:bg-[#c13528]">
        <span className="text-[#FFFFFF] text-[24px] font-bold">Đăng nhập bằng Gmail</span>
      </div>

      <button className="absolute left-[600px] top-[610px] flex items-center">
        <span className="text-[#A2A2A2] text-[20px] font-normal"
          onClick={() => navigate('/dangky')}>Bạn chưa có tài khoản? Đăng ký ngay</span>
      </button>
      
      <div className="absolute left-[500px] top-[650px] w-[630px] border-b border-[#A2A2A2]"></div>

      <div className="absolute left-[600px] top-[660px]">
        <p className="text-[#5E5D5D] text-[20px] font-bold">Bạn gặp khó khăn khi tạo tài khoản?</p>
      </div>

      <div className="absolute left-[560px] top-[690px]">
        <p className="mt-[10px] text-[#A2A2A2] text-[20px] font-normal">Vui lòng gọi tới số 0123456789 (giờ hành chính).</p>
      </div>
    </div>
  );
}

export default Login;