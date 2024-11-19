import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import images from '../../images';

const Staff_Edit = () => {
    const navigate = useNavigate(); 

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className="relative w-full min-h-[1080px] bg-[#F4F7FA]">
            {/* Breadcrumb */}
            <div className="p-4">
                <button
                    onClick={() => handleNavigate('/nhanvien')}
                    className="font-inter font-bold text-sm md:text-base text-[#7D7D7D]">
                    Quản lý nhân viên/
                </button>
                <span className="font-inter font-bold text-sm md:text-base text-[#7D7D7D]">
                    Chỉnh sửa thông tin nhân viên
                </span>
            </div>

            {/* Main Container */}
            <div className="mx-auto max-w-6xl bg-white rounded-[15px] shadow-lg p-6">
                {/* Header */}
                <div className="flex items-center mb-6">
                    <img
                        src={images['icon_info_staff.png']}
                        alt="Icon"
                        className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] mr-4"
                    />
                    <h2 className="text-lg md:text-xl font-bold text-black">
                        Chỉnh Sửa Thông Tin Nhân Viên
                    </h2>
                </div>

                {/* Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Row 1 */}
                    <div className="flex flex-col">
                        <label className="text-sm md:text-base font-bold text-[#A09696]">
                            Họ và tên
                        </label>
                        <input
                            type="text"
                            placeholder="Nhập họ và tên..."
                            className="w-full mt-2 p-2 bg-white border border-[#525050] rounded-[10px] focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm md:text-base font-bold text-[#A09696]">
                            Ngày sinh
                        </label>
                        <input
                            type="date"
                            className="w-full mt-2 p-2 bg-white border border-[#525050] rounded-[10px] focus:outline-none"
                        />
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col">
                        <label className="text-sm md:text-base font-bold text-[#A09696]">
                            Địa chỉ
                        </label>
                        <input
                            type="text"
                            placeholder="Nhập địa chỉ..."
                            className="w-full mt-2 p-2 bg-white border border-[#525050] rounded-[10px] focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm md:text-base font-bold text-[#A09696]">
                            Giới tính
                        </label>
                        <select
                            className="w-full mt-2 p-2 bg-white border border-[#525050] rounded-[10px] focus:outline-none">
                            <option value="">Chọn giới tính</option>
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                            <option value="Khác">Khác</option>
                        </select>
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-col">
                        <label className="text-sm md:text-base font-bold text-[#A09696]">
                            Email
                        </label>
                        <input
                            type="text"
                            readOnly
                            className="w-full mt-2 p-2 bg-[#EEEEEE] border border-[#525050] rounded-[10px] focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm md:text-base font-bold text-[#A09696]">
                            Ngày tạo
                        </label>
                        <input
                            type="date"
                            className="w-full mt-2 p-2 bg-white border border-[#525050] rounded-[10px] focus:outline-none"
                        />
                    </div>

                    {/* Row 4 */}
                    <div className="flex flex-col md:col-span-2">
                        <label className="text-sm md:text-base font-bold text-[#A09696]">
                            Vai trò
                        </label>
                        <select
                            className="w-full mt-2 p-2 bg-[#EEEEEE] border border-[#525050] rounded-[10px] focus:outline-none">
                            <option value="">Chọn vai trò</option>
                            <option value="Nhân viên kho">Nhân viên kho</option>
                            <option value="Quản lý kho">Quản lý kho</option>
                        </select>
                    </div>
                </div>

                {/* Save Button */}
                <div className="mt-6">
                    <button className="w-full md:w-[180px] h-[45px] bg-[#F39C12] rounded-[5px] flex items-center justify-center">
                        <span className="font-inter font-bold text-white text-lg">
                            Lưu thay đổi
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Staff_Edit;