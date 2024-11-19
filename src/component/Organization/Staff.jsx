import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import images from '../../images';
import Staff_Delete from './Staff_Delete';
import axios from 'axios';

const Staff = () => {
    const navigate = useNavigate();
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // State for current page
    const itemsPerPage = 10; // Number of items per page

    const handleDeleteClick = () => {
        setDeleteModalOpen(true);
    };

    const handleCloseModal = () => {
        setDeleteModalOpen(false);
    };

    const handleNavigate = (path) => {
        navigate(path);
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/nhanvien');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(users.length / itemsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
<div className="relative w-full min-h-[1080px] bg-[#F4F7FA] p-4 md:p-8">
    <button className="block text-left text-sm md:text-base font-bold text-[#7D7D7D]">
        Quản lý nhân viên
    </button>

    {/* Thông tin nhân viên */}
    <div className="w-full bg-white rounded-lg shadow-lg p-4 mt-4 md:p-6">
        <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center">
                <img src={images['icon_info_staff.png']} alt="Icon" className="mr-4 w-10 h-10 md:w-12 md:h-12" />
                <h2 className="text-lg md:text-xl font-bold text-black">Thông Tin Nhân Viên</h2>
            </div>
            <p className="text-sm md:text-base text-[#3498DB] mt-2 md:mt-0">
                Tổng số nhân viên: {users.length}
            </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-end mt-4">
            <button
                onClick={() => handleNavigate('/suathongtinnhanvien')}
                className="bg-yellow-500 rounded-lg px-4 py-2 text-sm md:text-base flex items-center"
            >
                <img src={images['icon_edit_white.png']} alt="Chỉnh sửa" className="mr-2 w-5 h-5" />
                <span className="text-white font-semibold">Chỉnh sửa</span>
            </button>

            <button
                onClick={() => handleNavigate('/taonhanvien')}
                className="bg-blue-500 rounded-lg px-4 py-2 text-sm md:text-base flex items-center"
            >
                <img src={images['icon_create_white.png']} alt="Tạo mới" className="mr-2 w-5 h-5" />
                <span className="text-white font-semibold">Tạo mới</span>
            </button>

            <button
                onClick={handleDeleteClick}
                className="bg-red-600 rounded-lg px-4 py-2 flex items-center justify-center"
            >
                <img src={images['icon_delete_white.png']} alt="Xóa" className="w-5 h-5" />
            </button>
        </div>
    </div>

    {/* Bảng danh sách nhân viên */}
    <div className="w-full bg-white rounded-lg shadow-lg p-4 mt-6 overflow-x-auto">
        <div className="relative w-full max-w-full overflow-x-auto">
            <div className="bg-gray-200 flex text-sm md:text-base">
                {['ID', 'Ảnh nhân viên', 'Họ tên nhân viên', 'Ngày sinh', 'Giới tính', 'Địa chỉ', 'Ngày tạo hồ sơ'].map((header, index) => (
                    <div key={index} className="flex-1 py-2 px-4 text-center font-semibold border-r last:border-none">
                        {header}
                    </div>
                ))}
            </div>
            {currentUsers.map((user, index) => (
                <div key={index} className="flex text-sm md:text-base">
                    <div className="flex-1 py-2 px-4 text-center border-r last:border-none">
                        {user.UserID}
                    </div>
                    <div className="flex-1 py-2 px-4 text-center border-r last:border-none">
                        <img src={user.AnhDaiDien} alt="Avatar" className="w-8 h-8 rounded-full mx-auto" />
                    </div>
                    <div className="flex-1 py-2 px-4 text-center border-r last:border-none">
                        {user.HoTen}
                    </div>
                    <div className="flex-1 py-2 px-4 text-center border-r last:border-none">
                        {new Date(user.NgaySinh).toLocaleDateString()}
                    </div>
                    <div className="flex-1 py-2 px-4 text-center border-r last:border-none">
                        {user.GioiTinh}
                    </div>
                    <div className="flex-1 py-2 px-4 text-center border-r last:border-none">
                        {user.DiaChi}
                    </div>
                    <div className="flex-1 py-2 px-4 text-center">
                        {new Date(user.NgayTaoHoSo).toLocaleDateString()}
                    </div>
                </div>
            ))}
        </div>
    </div>

    {/* Phân trang */}
    <div className="flex justify-center items-center gap-4 mt-6">
        <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`w-8 h-8 flex items-center justify-center ${
                currentPage === 1 ? 'bg-gray-300' : 'bg-white'
            } rounded-full`}
        >
            <img src={images['icon_prev.png']} alt="Previous" className="w-5 h-5" />
        </button>
        <span className="font-semibold text-sm md:text-base">
            Trang {currentPage} / {totalPages}
        </span>
        <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`w-8 h-8 flex items-center justify-center ${
                currentPage === totalPages ? 'bg-gray-300' : 'bg-white'
            } rounded-full`}
        >
            <img src={images['icon_next.png']} alt="Next" className="w-5 h-5" />
        </button>
    </div>

    {/* Modal xóa */}
    {isDeleteModalOpen && <Staff_Delete onClose={handleCloseModal} />}
</div>
    );
};

export default Staff;