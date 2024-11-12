import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import images from '../../images';

const Caidat_Admin = () => {
    const navigate = useNavigate(); 
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

    const handleDeleteClick = () => {
        setDeleteModalOpen(true); // Mở modal khi nhấn nút xóa
    };

    const handleCloseModal = () => {
        setDeleteModalOpen(false); // Đóng modal khi nhấn "Quay lại"
    };

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className="relative w-full h-[1080px] bg-[#FFFFFF]">
  <div className="w-[1120px] h-[130px] left-[70px] top-[102px] absolute bg-[#d9d9d9] rounded-[25px]" />
  <div className="w-[1120px] h-[130px] left-[70px] top-[254px] absolute bg-[#d9d9d9] rounded-[25px]" />
  <div className="w-[1120px] h-[130px] left-[70px] top-[406px] absolute bg-[#d9d9d9] rounded-[25px]" />
  <div className="w-[1120px] h-[130px] left-[70px] top-[558px] absolute bg-[#d9d9d9] rounded-[25px]" />
  <div className="left-[70px] top-[24px] absolute text-black text-3xl font-bold font-['Inter']">Cài đặt</div>
</div>
    );
};

export default Caidat_Admin;