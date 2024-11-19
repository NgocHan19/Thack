import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import images from '../../images';

const Staff_New = () => {
    const navigate = useNavigate(); 

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className="relative w-full min-h-[1080px] bg-[#F4F7FA] flex flex-col items-center">
            {/* Breadcrumb */}
            <div className="w-full px-4 mt-4 flex justify-start">
                <button
                    onClick={() => handleNavigate('/nhanvien')}
                    className="font-inter font-bold text-base leading-[29px] text-[#7D7D7D]">
                    Quản lý nhân viên/
                </button>
                <button className="ml-2 font-inter font-bold text-base leading-[29px] text-[#7D7D7D]">
                    Thêm nhân viên
                </button>
            </div>

            {/* Main Container */}
            <div className="w-full max-w-5xl bg-white rounded-[15px] shadow-lg mt-6 p-6">
                <div className="flex items-center mb-6">
                    <img
                        src={images['icon_info_staff.png']}
                        alt="Icon"
                        className="mr-4 w-[50px] h-[50px]"
                    />
                    <h2 className="text-[24px] font-bold text-black">Tạo Thông Tin Nhân Viên</h2>
                </div>

                {/* Profile Image */}
                <div className="flex justify-center mb-8">
                    <button>
                        <img
                            src={images['icon_account2.png']}
                            alt="Icon"
                            className="w-[80px] h-[80px]"
                        />
                    </button>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <label className="block text-[#A09696] font-inter font-bold text-[20px] mb-2">
                            Họ và tên
                        </label>
                        <input
                            type="text"
                            placeholder="Nhập họ và tên..."
                            className="w-full h-[35px] bg-white border border-[#525050] rounded-[10px] pl-5"
                        />
                    </div>
                    <div>
                        <label className="block text-[#A09696] font-inter font-bold text-[20px] mb-2">
                            Ngày sinh
                        </label>
                        <input
                            type="date"
                            className="w-full h-[35px] bg-white border border-[#525050] rounded-[10px] pl-5 pr-5"
                        />
                    </div>
                    <div>
                        <label className="block text-[#A09696] font-inter font-bold text-[20px] mb-2">
                            Địa chỉ
                        </label>
                        <input
                            type="text"
                            placeholder="Nhập địa chỉ..."
                            className="w-full h-[35px] bg-white border border-[#525050] rounded-[10px] pl-5"
                        />
                    </div>
                    <div>
                        <label className="block text-[#A09696] font-inter font-bold text-[20px] mb-2">
                            Giới tính
                        </label>
                        <select
                            className="w-full h-[35px] bg-white border border-[#525050] rounded-[10px] pl-5 pr-5">
                            <option value="">Chọn giới tính</option>
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                            <option value="Khác">Khác</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-[#A09696] font-inter font-bold text-[20px] mb-2">
                            Email
                        </label>
                        <input
                            type="text"
                            placeholder="Nhập email..."
                            className="w-full h-[35px] bg-white border border-[#525050] rounded-[10px] pl-5"
                        />
                    </div>
                    <div>
                        <label className="block text-[#A09696] font-inter font-bold text-[20px] mb-2">
                            Ngày tạo
                        </label>
                        <input
                            type="date"
                            className="w-full h-[35px] bg-white border border-[#525050] rounded-[10px] pl-5 pr-5"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-[#A09696] font-inter font-bold text-[20px] mb-2">
                            Vai trò
                        </label>
                        <select
                            className="w-full h-[35px] bg-white border border-[#525050] rounded-[10px] pl-5 pr-5">
                            <option value="">Chọn vai trò</option>
                            <option value="Nhân viên kho">Nhân viên kho</option>
                            <option value="Quản lý kho">Quản lý kho</option>
                        </select>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-start mt-6">
                    <button className="bg-[#3498DB] text-white font-inter font-bold text-lg px-6 py-2 rounded-[5px]">
                        Tạo mới
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Staff_New;