import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import images from '../../images';
import Staff_Delete from './Staff_Delete';
import axios from 'axios'; // Thêm thư viện axios để gọi API

const Staff = () => {
    const navigate = useNavigate(); 
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [users, setUsers] = useState([]); // State để lưu trữ dữ liệu người dùng

    const handleDeleteClick = () => {
        setDeleteModalOpen(true); // Mở modal khi nhấn nút xóa
    };

    const handleCloseModal = () => {
        setDeleteModalOpen(false); // Đóng modal khi nhấn "Quay lại"
    };

    const handleNavigate = (path) => {
        navigate(path);
    };

    useEffect(() => {
        // Gọi API để lấy dữ liệu người dùng
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/api/userprofile'); // Thay đổi đường dẫn nếu cần
                setUsers(response.data); // Lưu dữ liệu vào state
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers(); // Gọi hàm fetchUsers
    }, []); // Chạy một lần khi component mount

    return (
        <div className="relative w-full h-[1080px] bg-[#EEEEEE]">
            <button className="absolute left-[70px] top-[20px] font-inter font-bold text-base leading-[29px] text-[#7D7D7D]">Quản lý nhân viên</button>
            <div className="absolute w-[1130px] h-[170px] left-[50px] top-[60px] bg-white rounded-lg">
                <div className="absolute left-[40px] top-[15px] flex items-center">
                    <img src={images['icon_info_staff.png']} alt="Icon" className="mr-4 w-[50px] h-[50px]" />
                    <h2 className="text-[24px] font-bold text-black">Thông Tin Nhân Viên</h2>
                </div>
                <p className="absolute left-[50px] top-[120px] text-base text-[#3498DB]">
                    Tổng số nhân viên: {users.length} {/* Hiển thị số lượng nhân viên */}
                </p>

                <div className="absolute left-[760px] top-[40px] flex space-x-4">
                    <button onClick={() => handleNavigate('/taonhanvien')} className="bg-yellow-500 rounded-lg w-[140px] h-[40px] flex items-center justify-center px-2">
                        <img src={images['icon_edit_white.png']} alt="Chỉnh sửa" className="mr-2 w-6 h-6" />
                        <span className="text-white font-semibold text-base">Chỉnh sửa</span>
                    </button>

                    <button onClick={() => handleNavigate('/suathongtinnhanvien')} className="bg-blue-500 rounded-lg w-[120px] h-[40px] flex items-center justify-center px-2">
                        <img src={images['icon_create_white.png']} alt="Tạo mới" className="mr-2 w-6 h-6" />
                        <span className="text-white font-semibold text-base">Tạo mới</span>
                    </button>

                    <button onClick={handleDeleteClick} className="bg-red-600 rounded-lg w-[50px] h-[40px] flex items-center justify-center px-2">
                        <img src={images['icon_delete_white.png']} alt="Xóa" className="w-6 h-6" />
                    </button>
                </div>
            </div>

            <div className="absolute w-[1130px] h-[780px] left-[50px] top-[260px] bg-white rounded-lg">
                <div className="absolute w-[260px] h-[40px] left-[20px] top-[20px] bg-[#D9D9D9] rounded-[15px] flex items-center px-2">
                    <button className="flex items-center pl-4">
                        <input type="text" placeholder="Tìm kiếm..." className="flex-1 bg-transparent outline-none text-[#80808A] font-semibold text-sm" />
                        <img src={images['icon_search.png']} alt="Search" className="w-[25px] h-[38px] ml-4" />
                    </button>
                </div>

                <div className="absolute w-[1090px] h-[200px] left-[20px] top-[90px] bg-white flex flex-col">
                    <div className="flex w-full h-[40px] bg-gray-200 border-b border-gray-300">
                        {['ID', 'Ảnh nhân viên', 'Họ tên nhân viên', 'Ngày sinh', 'Giới tính', 'Địa chỉ', 'Ngày tạo hồ sơ'].map((header, index) => (
                            <div key={index} className="flex-1 border-r border-gray-300 flex items-center justify-center px-2">
                                <span className="text-black font-semibold text-sm">{header}</span>
                            </div>
                        ))}
                    </div>

                    {/* Hiển thị dữ liệu từ API */}
                    {users.map((user, index) => (
                        <div key={index} className="flex w-full h-[40px] border-b border-gray-300">
                            <div className="flex-1 border-r border-gray-300 flex items-center justify-center px-2">
                                <span className="text-black font-normal text-sm">{user.UserID}</span>
                            </div>
                            <div className="flex-1 border-r border-gray-300 flex items-center justify-center px-2">
                                <img src={user.AnhDaiDien} alt={user.AnhDaiDien} className="w-8 h-8 rounded-full" />
                            </div>
                            <div className="flex-1 border-r border-gray-300 flex items-center justify-center px-2">
                                <span className="text-black font-normal text-sm">{user.HoTen}</span>
                            </div>
                            <div className="flex-1 border-r border-gray-300 flex items-center justify-center px-2">
                                <span className="text-black font-normal text-sm">{user.NgaySinh}</span>
                            </div>
                            <div className="flex-1 border-r border-gray-300 flex items-center justify-center px-2">
                                <span className="text-black font-normal text-sm">{user.GioiTinh}</span>
                            </div>
                            <div className="flex-1 border-r border-gray-300 flex items-center justify-center px-2">
                                <span className="text-black font-normal text-sm">{user.DiaChi}</span>
                            </div>
                            <div className="flex-1 flex items-center justify-center px-2">
                                <span className="text-black font-normal text-sm">{user.NgayTaoHoSo}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                    <span className="font-bold text-base text-[#B2B2B2]">1/10 trang</span>
                    <button className="w-[30px] h-[30px] bg-white flex items-center justify-center">
                        <img src={images['icon_prev.png']} alt="Previous" className="w-6 h-6" />
                    </button>
                    <button className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center">
                        <img src={images['icon_next.png']} alt="Next" className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {isDeleteModalOpen && <Staff_Delete onClose={handleCloseModal} />}
        </div>
    );
};

export default Staff;