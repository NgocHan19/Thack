import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import images from '../../images';

function Danhmuc_QL_Sua() {
  const navigate = useNavigate(); 
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isOverlayVisible1, setIsOverlayVisible1] = useState(false);
  const [isOverlayVisible2, setIsOverlayVisible2] = useState(false);
  const [selectedCell1, setSelectedCell1] = useState(null);
  const [selectedCell2, setSelectedCell2] = useState(null);
  const [filterText1, setFilterText1] = useState('');
  const [filterText2, setFilterText2] = useState('');
  const [selectButtonClicked, setSelectButtonClicked] = useState(false);

  const handleClick = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  const toggleOverlay1 = () => {
    setIsOverlayVisible1(!isOverlayVisible1);
    setSelectedCell1(null);
  };

  const toggleOverlay2 = () => {
    setIsOverlayVisible2(!isOverlayVisible2);
    setSelectedCell2(null);
  };

  const handleCellClick1 = (rowIndex, colIndex) => {
    setSelectedCell1({ row: rowIndex, col: colIndex });
  };

  const handleCellClick2 = (rowIndex, colIndex) => {
    setSelectedCell2({ row: rowIndex, col: colIndex });
  };

  const handleSelect1 = () => {
    if (selectedCell1) {
      setFilterText1(`Row ${selectedCell1.row + 1}, Column ${selectedCell1.col + 1}`);
      setIsOverlayVisible1(false);
      setSelectButtonClicked(true);
      setTimeout(() => setSelectButtonClicked(false), 300); // Reset after animation
    }
  };

  const handleSelect2 = () => {
    if (selectedCell2) {
      setFilterText2(`Row ${selectedCell2.row + 1}, Column ${selectedCell2.col + 1}`);
      setIsOverlayVisible2(false);
      setSelectButtonClicked(true);
      setTimeout(() => setSelectButtonClicked(false), 300); // Reset after animation
    }
  };

  return (
    <div className="relative w-full h-[1080px] bg-[#F4F7FA]">
      <div className="w-[1150px] h-[981px] left-[50px] top-[49px] absolute bg-white rounded-[15px] shadow-lg" />
      <div className="left-[50px] top-[16px] absolute text-[#7d7d7d] text-2xl font-bold font-['Inter']" onClick={() => navigate('/danhmuc-ql')}>Kho Linh Kiện/Chỉnh Sửa</div>
      <div className="left-[150px] top-[84px] absolute text-black text-[32px] font-bold font-['Inter']">Chỉnh Sửa Thông Tin Danh Mục</div>
      <div className="left-[100px] top-[197px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Số hiệu danh mục</div>
      <div className="left-[100px] top-[289px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Số hiệu danh mục cha</div>
      <div className="absolute left-[100px] top-[228px]">
        <input 
          className="w-[480px] h-[35px] bg-white rounded-[10px] border border-[#525050] px-2" 
        />
      </div>  
      <div className="left-[700px] top-[197px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Tên danh mục</div>
      <div className="absolute left-[700px] top-[228px]">
        <input 
          type="text" 
          className="w-[480px] h-[35px] bg-white rounded-[10px] border border-[# 525050] px-2" 
          placeholder="Nhập thông tin tại đây" 
        />
      </div>  
      <div className="left-[100px] top-[387px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Mô tả</div>
      <div className="absolute left-[100px] top-[426px]">
        <textarea 
          className="w-[480px] h-[100px] bg-white rounded-[10px] border border-[#525050] p-2 resize-none" 
          placeholder="Nhập thông tin tại đây" 
        />
      </div>  
      <div className="left-[100px] top-[539px] absolute text-[#a09696] text-2xl font-bold font-['Inter']">Ghi chú</div>
      <div className="absolute left-[100px] top-[578px]">
        <textarea 
          className="w-[950px] h-[200px] bg-white rounded-[10px] border border-[#525050] p-2 resize-none" 
          placeholder="Nhập thông tin tại đây" 
        />
      </div>  
      <div className="w-[480px] h-[35px] left-[100px] top-[326px] absolute bg-white rounded-[10px] border border-[#525050]" />
      <div className="w-[300px] h-[55px] left-[100px] top-[890px] absolute bg-[#f39c12] rounded-[5px]" />
      <div className="left-[180px] top-[905px] absolute text-white text-2xl font-bold font-['Inter']" onClick={handleClick}>Lưu thay đổi</div>
      {showSuccessMessage && (
        <div className="absolute left-[393px] top-[950px] bg-green-500 text-white p-3 rounded-md">
          Thành công
        </div>
      )}
      <img className="w-[25px] h-[25px] left-[550px] top-[233px] absolute" src={images['icon_drop.png']} onClick={toggleOverlay1} />
      <img className="w-[25px] h-[25px] left-[550px] top-[331px] absolute" src={images['icon_drop.png']} onClick={toggleOverlay2} />
      <img className="w-[50px] h-[50px] left-[90px] top-[79px] absolute" src={images['icon_dmlk.png']} />
      {isOverlayVisible1 && (
        <div className="absolute left-[100px] top-[300px] bg-white border border-gray-300 p-4">
          <table>
            <tbody>
              {[...Array(5)].map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {[...Array(3)].map((_, colIndex) => (
                    <td key={colIndex} onClick={() => handleCellClick1(rowIndex, colIndex)} className="border p-2 cursor-pointer">
                      Cell {rowIndex + 1}, {colIndex + 1}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <button 
            onClick={handleSelect1} 
            className={`mt-2 p-2 rounded ${selectButtonClicked ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          >
            Select
          </button>
        </div>
      )}
      {isOverlayVisible2 && (
        <div className="absolute left-[100px] top-[300px] bg-white border border-gray-300 p-4">
          <table>
            <tbody>
              {[...Array(5)].map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {[...Array(3)].map((_, colIndex) => (
                    <td key={colIndex} onClick={() => handleCellClick2(rowIndex, colIndex)} className="border p-2 cursor-pointer">
                      Cell {rowIndex + 1}, {colIndex + 1}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <button 
            onClick={handleSelect2} 
            className={`mt-2 p-2 rounded ${selectButtonClicked ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          >
            Select
          </button>
        </div>
      )}
    </div>
  );
}

export default Danhmuc_QL_Sua;