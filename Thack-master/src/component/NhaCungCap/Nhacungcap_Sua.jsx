import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import images from '../../images';

function Nhacungcap_Sua() {
  const navigate = useNavigate(); 
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null);
  const [statusText, setStatusText] = useState('');

  const handleClick = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
    setSelectedCell(null);
  };

  const handleCellClick = (rowIndex, colIndex) => {
    setSelectedCell({ row: rowIndex, col: colIndex });
  };

  const handleSelect = () => {
    if (selectedCell) {
      setStatusText(`Row ${selectedCell.row + 1}, Column ${selectedCell.col + 1}`);
      setIsOverlayVisible(false);
    }
  };

  return (
    <div className="relative w-full h-[1080px] bg-[#EEEEEE]">
      <div className="w-[1150px] h-[981px] left-[50px] top-[49px] absolute bg-white rounded-[15px]" />
      <div className="left-[50px] top-[15px] absolute text-[#7d7d7d] text-2xl font-bold font-['Inter']" onClick={() => navigate('/nhacungcap')}>Nhà cung cấp/Chỉnh Sửa</div>
      <div className="left-[70px] top-[190px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Tên nhà cung cấp</div>
      <div className="left-[70px] top-[282px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Địa chỉ</div>
      <div className="absolute w-[300px] h-[35px] left-[70px] top-[230px]">
        <div className="w-full h-full bg-white rounded-[10px] border border-[#525050] flex items-center">
          <input
            type="text"
            placeholder="Nhập dữ liệu..."
            className="w-full h-full bg-transparent text-[#525050] font-semibold text-[14px] placeholder-[#A2A2A2] focus:outline-none px-[10px]"
          />
        </div>
      </div>
      <div className="left-[400px] top-[190px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Ngày bắt đầu hợp tác</div>
      <div className="absolute w-[300px] h-[35px] left-[400px] top-[230px]">
        <div className="w-full h-full bg-white rounded-[10px] border border-[#525050] flex items-center">
          <input
            type="text"
            placeholder="Nhập dữ liệu..."
            className="w-full h-full bg-transparent text-[#525050] font-semibold text-[14px] placeholder-[#A2A2A2] focus:outline-none px-[10px]"
          />
        </div>
      </div>
      <div className="left-[70px] top-[380px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Số điện thoại</div>
      <div className="absolute w-[300px] h-[35px] left-[70px] top-[419px]">
        <div className="w-full h-full bg-white rounded-[10px] border border-[#525050] flex items-center">
          <input
            type="text"
            placeholder="Nhập dữ liệu..."
            className="w-full h-full bg-transparent text-[#525050] font-semibold text-[14px] placeholder-[#A2A2A2] focus:outline-none px-[10px]"
          />
        </div>
      </div>
      <div className="left-[70px] top-[480px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Contact</div>
 <div className="absolute w-[300px] h-[50px] left-[70px] top-[519px]">
        <div className="w-full h-full bg-white rounded-[10px] border border-[#525050] flex items-center">
          <input
            type="text"
            placeholder="Nhập dữ liệu..."
            className="w-full h-full bg-transparent text-[#525050] font-semibold text-[16px] placeholder-[#A2A2A2] focus:outline-none px-[10px]"
          />
        </div>
      </div>
      <div className="left-[70px] top-[595px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Ghi chú</div>
      <div className="absolute w-[600px] h-[200px] left-[70px] top-[634px]">
        <div className="w-full h-full bg-white rounded-[10px] border border-[#525050] flex items-center">
          <textarea
            placeholder="Nhập nội dung ở đây..."
            className="w-full h-full bg-transparent text-[#525050] font-semibold text-[16px] placeholder-[#A2A2A2] focus:outline-none p-[10px] resize-none"
          />
        </div>
      </div>
      <div className="absolute w-[300px] h-[35px] left-[70px] top-[319px]">
        <div className="w-full h-full bg-white rounded-[10px] border border-[#525050] flex items-center">
          <input
            type="text"
            placeholder="Nhập dữ liệu..."
            className="w-full h-full bg-transparent text-[#525050] font-semibold text-[14px] placeholder-[#A2A2A2] focus:outline-none px-[10px]"
          />
        </div>
      </div>
      <div className="left-[400px] top-[282px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Email</div>
      <div className="absolute w-[300px] h-[35px] left-[400px] top-[319px]">
        <div className="w-full h-full bg-white rounded-[10px] border border-[#525050] flex items-center">
          <input
            type="text"
            placeholder="Nhập dữ liệu..."
            className="w-full h-full bg-transparent text-[#525050] font-semibold text-[14px] placeholder-[#A2A2A2] focus:outline-none px-[10px]"
          />
        </div>
      </div>
      <div className="left-[400px] top-[380px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Trạng thái</div>
      <div className="w-[300px] h-[35px] left-[400px] top-[417px] absolute bg-white rounded-[10px] border border-[#525050]" onClick={toggleOverlay}>
        <div className="flex items-center justify-between px-2">
          <span className="text-[#525050]">{statusText || "Chọn trạng thái"}</span>
          <img className="w-5 h-5" src={images['icon_drop.png']} alt="dropdown" />
        </div>
      </div>
      {isOverlayVisible && (
        <div className="absolute left-[400px] top-[450px] bg-white border border-gray-300 p-4">
          <table>
            <tbody>
              {[...Array(5)].map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {[...Array(3)].map((_, colIndex) => (
                    <td key={colIndex} onClick={() => handleCellClick(rowIndex, colIndex)} className="border p-2 cursor-pointer">
                      Cell {rowIndex + 1}, {colIndex + 1}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <button 
            onClick={handleSelect} 
            className="mt-2 p-2 rounded bg-blue-500 text-white"
          >
            Chọn
          </button>
        </div>
      )}
      <div className="w-[180px] h-[55px] left-[396px] top-[860px] absolute bg-[#F39C12] rounded-[5px]" />
      <div className="left-[425px] top-[875px] absolute text-white text-xl font-bold font-['Inter']" onClick={handleClick}>Lưu thay đổi</div>
      { showSuccessMessage && (
        <div className="absolute left-[393px] top-[950px] bg-green-500 text-white p-3 rounded-md">
          Thành công
        </div>
      )}
      <img className="w-[450px] h-[590px] left-[730px] top-[221px] absolute" src="https://via.placeholder.com/450x590" />
      <img className="w-[50px] h-[50px] left-[90px] top-[79px] absolute" src={images['iconttncc.png']} />
      <div className="left-[150px] top-[84px] absolute text-black text-[32px] font-bold font-['Inter']">Chỉnh Sửa Nhà Cung Cấp </div>
    </div>
  );
}

export default Nhacungcap_Sua;