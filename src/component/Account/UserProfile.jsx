import React from 'react';
import images from '../../images';

const UserProfile = () => {
  return (
    <div className="relative w-full h-[1080px] bg-[#F4F7FA]">
      <div className="absolute w-[448px] h-[29px] left-[50px] top-[20px] font-inter font-bold text-sm leading-[29px] text-[#7D7D7D]">
        Thông Tin Cá Nhân/ Tài Khoản Của Tôi
      </div>
      <div className="absolute w-[1130px] h-[750px] left-[50px] top-[60px] bg-white rounded-[15px]"> 
        <button className="absolute left-[30px] top-[20px]">
          <img src={images['icon_profile.png']} alt="User" className="w-[50px] h-[50px]" />
        </button>
        <div className="absolute w-[264px] h-[39px] left-[100px] top-[30px] font-inter font-bold text-xl leading-[39px] text-black">
          Tài khoản của tôi
        </div>
        <button className="absolute right-[20px] top-[20px]">
          <img src={images['icon_edit.png']} alt="Edit" className="w-[20px] h-[20px]" />
        </button>

        <div className="absolute left-[180px] top-[100px] flex items-center">
          <button className="w-full h-full">
            <img src={images['icon_account2.png']} alt="Icon" className="w-[80px] h-[80px]" />
          </button>
          <div className="w-full h-full ml-[250px]">
            <label className="block text-[#A09696] font-inter font-bold text-[16px] leading-[24px]">Email</label>
            <input
              type="text"
              placeholder="Nhập email..."
              className="box-border w-[450px] h-[35px] bg-white border border-[#525050] rounded-[10px] pl-5"
            />
          </div>
        </div>

        <div className="absolute left-[80px] top-[250px]">
          <div className="w-[110px] h-[29px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            Họ và tên
          </div>
          <input type="text" placeholder="Nhập họ và tên..." className="box-border w-[450px] h-[35px] mt-[15px] bg-white border border-[#525050] rounded-[10px] pl-5" />
        </div>

        <div className="absolute left-[710px] top-[250px]">
          <div className="w-[110px] h-[29px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            Role
          </div>
          <div className="relative mt-[15px]">
            <input
              type="text"
              className="box-border w-[250px] h-[35px] bg-[#EEEEEE] border border-[#525050] rounded-[10px] pl-5"
            />
            <img
              src={images['icon_down_arrow_black.png']}
              alt="Icon"
              className="absolute w-[20px] h-[20px] right-[10px] top-[7px]"
            />
          </div>
        </div>

        <div className="absolute left-[80px] top-[380px]">
          <div className="w-[200px] h-[29px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            Ngày tạo hồ sơ
          </div>
          <input type="text" placeholder="Nhập ngày tạo..." className="box-border w-[450px] h-[35px] mt-[15px] bg-white border border-[#525050] rounded-[10px] pl-5" />
        </div>

        <div className="absolute left-[710px] top-[380px]">
          <div className="w-[110px] h-[29px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            Giới tính
          </div>
          <div className="relative mt-[15px]">
            <input
              type="text"
              placeholder="Chọn giới tính..."
              className="box-border w-[250px] h-[35px] bg-white border border-[#525050] rounded-[10px] pl-5"
            />
            <img
              src={images['icon_down_arrow_black.png']}
              alt="Icon"
              className="absolute w-[20px] h-[20px] right-[10px] top-[7px]"
            />
          </div>
        </div>

        <div className="absolute left-[80px] top-[510px]">
          <div className="w-[200px] h-[29px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            Địa chỉ
          </div>
          <input type="text" placeholder="Nhập địa chỉ của bạn..." className="box-border w-[450px] h-[35px] mt-[15px] bg-white border border-[#525050] rounded-[10px] pl-5" />
        </div>

        <button className="absolute w-[120px] h-[40px] right-[40px] bottom-[30px] bg-[#64C860] rounded-[15px] flex items-center justify-center">
          <img src={images['icon_save.png']} alt="Icon" className="w-[25px] h-[25px] mr-2" />
          <div className="font-inter font-medium text-base leading-[29px] text-white">
            Lưu
          </div>
        </button>
      </div>
    </div>
  );
};

export default UserProfile;