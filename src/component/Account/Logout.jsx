import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Xóa thông tin người dùng khỏi sessionStorage
    sessionStorage.removeItem('accountData');

    // Điều hướng về trang chủ ('/')
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-[350px] h-[150px] bg-gradient-to-r from-[#4B4E55] to-[#62656B] border-2 border-[#D8D8D8] rounded-[25px] flex flex-col items-center justify-center">
        <h1 className="absolute top-4 text-white font-bold text-[24px] leading-[29px]">
          Đăng Xuất
        </h1>
        <p className="absolute top-[54px] text-white font-normal text-[12px] leading-[17px]">
          Bạn chắc chắn muốn đăng xuất?
        </p>
        <div className="absolute bottom-5 flex space-x-4"> {/* Điều chỉnh bottom ở đây */}
          <button
            className="w-[100px] h-[40px] bg-[#FF8C00] rounded-[10px] text-white font-bold text-[16px] leading-[19px]"
            onClick={() => navigate('/')}  // Quay lại trang chủ
          >
            Quay lại
          </button>
          
          <button
            className="w-[100px] h-[40px] bg-[#FF8C00] rounded-[10px] text-white font-bold text-[16px] leading-[19px]"
            onClick={handleLogout}  // Đăng xuất và chuyển về trang chủ
          >
            Đăng xuất
          </button>
        </div>
      </div>
    </div>
  );
}

export default Logout;