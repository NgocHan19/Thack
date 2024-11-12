import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import images from '../../images';

const QLLK = () => {
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
  <div className="w-[250px] h-[350px] left-[50px] top-[63px] absolute bg-gradient-to-b from-[#9786ba] to-[#443c54] rounded-[20px]" />
  <div className="w-[250px] h-[350px] left-[340px] top-[63px] absolute bg-gradient-to-b from-[#509fcc] to-[#285066] rounded-[20px]" />
  <div className="w-[250px] h-[350px] left-[630px] top-[63px] absolute bg-gradient-to-b from-[#da4f4f] to-[#742a2a] rounded-[20px]" />
  <div className="w-[250px] h-[350px] left-[920px] top-[66px] absolute bg-gradient-to-b from-[#b93775] via-[#531935] to-[#531834] rounded-[20px]" />
  <div className="w-[250px] h-[350px] left-[50px] top-[450px] absolute bg-gradient-to-b from-[#31d0b4] to-[#196a5c] rounded-[20px]" />
  <div className="left-[70px] top-[90px] absolute text-black text-[24px] font-normal font-['Inter']">Tổng giá trị tồn kho</div>
  <div className="left-[70px] top-[300px] absolute text-white text-[24px] font-normal font-['Inter']">56.000.000đ</div>
  <div className="left-[70px] top-[470px] absolute text-black text-[24px] font-normal font-['Inter']">Hàng cận hạn</div>
  <div className="left-[70px] top-[700px] absolute text-white text-[24px] font-normal font-['Inter']">120 sản phẩm</div>
  <div className="left-[360px] top-[86px] absolute text-black text-[24px] font-normal font-['Inter']">Lịch sử cập nhật</div>
  <div className="left-[360px] top-[300px] absolute text-white text-[24px] font-normal font-['Inter']">Lần cuối: 11/11/2024</div>
  <div className="left-[660px] top-[86px] absolute text-black text-[24px] font-normal font-['Inter']">Báo cáo tồn kho</div>
  <div className="left-[950px] top-[90px] absolute text-black text-[24px] font-normal font-['Inter']">Cảnh báo tự động</div>
        </div>
    );
};

export default QLLK;