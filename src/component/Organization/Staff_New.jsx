import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import images from '../../images';

const Staff_New = () => {
    const navigate = useNavigate(); 

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className="relative w-full h-[1080px] bg-[#EEEEEE]">
            <button onClick={() => handleNavigate('/nhanvien')}
                className="absolute left-[70px] top-[20px] font-inter font-bold text-base leading-[29px] text-[#7D7D7D]">
                Quản lý nhân viên/
            </button>
            <button className="absolute left-[220px] top-[20px] font-inter font-bold text-base leading-[29px] text-[#7D7D7D]">Thêm nhân viên</button>
            <div className="absolute w-[1130px] h-[750px] left-[50px] top-[60px] bg-white rounded-[15px]">
                <div className="absolute left-[40px] top-[15px] flex items-center">
                    <img src={images['icon_info_staff.png']} alt="Icon" className="mr-4 w-[50px] h-[50px]" />
                    <h2 className="text-[24px] font-bold text-black">Tạo Thông Tin Nhân Viên</h2>
                </div>

                <div className="absolute left-[240px] top-[100px] flex items-center">
                    <button className="w-full h-full">
                        <img src={images['icon_account2.png']} alt="Icon" className="w-[80px] h-[80px]" />
                    </button>
                </div>

                <div className="absolute left-[50px] top-[240px] flex items-center">
                    <div className="ml-[20px] flex flex-col">
                        <div className="w-[100px] h-[25px] font-inter font-bold text-[20px] leading-[29px] text-[#A09696]">
                            Họ và tên
                        </div>
                        <input type="text" placeholder="Nhập họ và tên..." className="box-border w-[400px] h-[35px] mt-[5px] bg-white border border-[#525050] rounded-[10px] pl-5" />
                    </div>
                    <div className="ml-[180px] flex flex-col">
                        <div className="w-[100px] h-[25px] font-inter font-bold text-[20px] leading-[29px] text-[#A09696]">
                            Ngày sinh
                        </div>
                        <input className="box-border w-[400px] h-[35px] mt-[5px] bg-white border border-[#525050] rounded-[10px] pl-5 pr-5" type="date" />
                    </div>
                </div>

                <div className="absolute left-[50px] top-[340px] flex items-center">
                    <div className="ml-[20px] flex flex-col">
                        <div className="w-[100px] h-[25px] font-inter font-bold text-[20px] leading-[29px] text-[#A09696]">
                            Địa chỉ
                        </div>
                        <input type="text" placeholder="Nhập địa chỉ..." className="box-border w-[400px] h-[35px] mt-[5px] bg-white border border-[#525050] rounded-[10px] pl-5" />
                    </div>
                    <div className="ml-[180px] flex flex-col">
                        <div className="w-[100px] h-[25px] font-inter font-bold text-[20px] leading-[29px] text-[#A09696]">
                            Giới tính
                        </div>
                        <select className="box-border w-[400px] h-[35px] mt-[5px] bg-white border border-[#525050] rounded-[10px] pl-5 pr-5">
                            <option value="">Chọn giới tính</option>
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                            <option value="Khác">Khác</option>
                        </select>
                    </div>
                </div>

                <div className="absolute left-[50px] top-[440px] flex items-center">
                    <div className="ml-[20px] flex flex-col">
                        <div className="w-[100px] h-[25px] font-inter font-bold text-[20px] leading-[29px] text-[#A09696]">
                            Email
                        </div>
                        <input type="text" placeholder="Nhập email..." className="box-border w-[400px] h-[35px] mt-[5px] bg-white border border-[#525050] rounded-[10px] pl-5" />
                    </div>
                    <div className="ml-[180px] flex flex-col">
                        <div className="w-[100px] h-[25px] font-inter font-bold text-[20px] leading-[29px] text-[#A09696]">
                            Ngày tạo
                        </div>
                        <input className="box-border w-[400px] h-[35px] mt-[5px] bg-white border border-[#525050] rounded-[10px] pl-5 pr-5" type="date" />
                    </div>
                </div>

                <div className="absolute left-[50px] top-[540px] ml-[20px] flex flex-col">
                    <div className="w-[100px] h-[25px] font-inter font-bold text-[20px] leading-[29px] text-[#A09696]">
                        Vai trò
                    </div>
                    <select className="box-border w-[400px] h-[35px] mt-[5px] bg-white border border-[#525050] rounded-[10px] pl-5 pr-5">
                        <option value="">Chọn vai trò</option>
                        <option value="Nhân viên kho">Nhân viên kho</option>
                        <option value="Quản lý kho">Quản lý kho</option>
                    </select>
                </div>

                <button className="absolute w-[150px] h-[45px] left-[40px] top-[675px] bg-[#3498DB] rounded-[5px] flex items-center justify-center">
                    <span className="font-inter font-bold text-white text-lg">Tạo mới</span>
                </button>

            </div>
        </div>
    );
};

export default Staff_New;