import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import hook điều hướng
import images from '../../images';

function DSLK() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isTableVisible, setIsTableVisible] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null); // State để lưu ô được chọn
  const [filterText, setFilterText] = useState(''); // State để lưu nội dung đã chọn

  const handleIconClick = () => {
    setIsOverlayVisible(true);
    setSelectedCell(null); // Reset ô được chọn khi mở overlay
  };

  const handleCloseOverlay = () => {
    setIsOverlayVisible(false);
  };

  const handleCellClick = (rowIndex, colIndex) => {
    setSelectedCell({ row: rowIndex, col: colIndex }); // Cập nhật ô được chọn
  };

  const handleSelect = () => {
    if (selectedCell) {
      setFilterText(`Row ${selectedCell.row + 1}, Column ${selectedCell.col + 1}`); // Cập nhật nội dung đã chọn
      handleCloseOverlay(); // Đóng overlay
    }
  };

  const toggleTable = () => {
    setIsTableVisible(!isTableVisible);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const navigate = useNavigate(); // Hook điều hướng

  const handleNavigate = (path) => {
      navigate(path); // Use navigate
  };
  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="relative w-full h-[1080px] bg-[#F4F7FA]">      
 <div className="absolute left-[70px] top-[20px] font-inter font-bold text-base leading-[29px] text-[#7D7D7D]">Kho Linh Kiện</div>
 <div className="w-[1150px] h-[170px] left-[50px] top-[86px] absolute bg-white rounded-[15px] shadow-lg" />
 <div className="left-[150px] top-[118px] absolute text-[24px] font-bold text-black">Thông Tin Linh Kiện</div>
        <img src={images['icon_dslk.png']} alt="icon_lh" className="w-[50px] h-[50px] left-[90px] top-[113px] absolute"   />
        <div className="left-[100px] top-[207px] absolute text-base text-[#3498DB]">Tổng số linh kiện:</div>
        <div className="left-[350px] top-[208px] absolute text-base text-[#3498DB]">Số linh kiện cận hạn:</div>
        <div className="left-[650px] top-[208px] absolute text-base text-[#3498DB]">Số linh kiện lỗi:</div>

        
        <div className="absolute w-[1130px] h-[780px] left-[50px] top-[260px] bg-white rounded-lg shadow-lg">
                <div className="absolute w-[260px] h-[40px] left-[20px] top-[20px] bg-[#D9D9D9] rounded-[15px] flex items-center px-2">
                    <button className="flex items-center pl-4">
                        <input type="text" placeholder="Tìm kiếm..." className="flex-1 bg-transparent outline-none text-[#80808A] font-semibold text-sm" />
                        <img src={images['icon_search.png']} alt="Search" className="w-[25px] h-[38px] ml-4" />
                    </button>
                </div>
</div>
        <div className="w-[136px] h-[60px] left-[850px] top-[142px] absolute" onClick={() => navigate('/nhapkhomoi')}>
          <div className="w-[136px] h-[40px] left-0 top-0 absolute bg-[#3498db] rounded-[15px]" />
          <div className="w-[83px] h-[21.29px] left-[45px] top-[9px] absolute text-white font-semibold text-base">Nhập kho</div>
          <img className="w-[20px] h-[20px] left-[14px] top-[12px] absolute" src={images['Plus.png']} />
        </div>
        <div className="w-[129px] h-[60px] left-[1020px] top-[142px] absolute">
          <div className="w-[129px] h-[40px] left-0 top-0 absolute">
            <div className="w-[129px] h-[40px] left-0 top-0 absolute bg-[#cd4141] rounded-[15px]" onClick={() => navigate('/xuatkho')}/>

            <div className="w-[79px] left-[16px] top-[9px] absolute text-white font-semibold text-base">Xuất kho</div>
          </div>
          <img className="w-[20px] h-[20px] left-[87px] top-[12px] absolute" src={images['Delete.png']} />
        </div>
        <div className="w-[330px] h-[40px] left-[850px] top-[296px] absolute">
        <div className="w-[300px] h-[40px] left-0 top-0 absolute bg-white rounded-[5px] border border-[#c2c2c2]/80" />
        <div className="left-[47px] top-[16px] absolute text-[#cbcbcb] text-xs font-bold font-['Inter']">
        Lọc theo: {filterText} {/* Hiển thị nội dung đã chọn */}
      </div>
              <img className="w-5 h-5 left-[12px] top-[14px] absolute" src={images['icon_loc.png']} alt="icon_loc" />
              <img
        className="w-[20px] h-[20px] left-[280px] top-[15px] absolute cursor-pointer"
        src={images['icon_drop.png']}
        alt="icon_drop"
        onClick={handleIconClick} // Show overlay on click
      />

      {isOverlayVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-md shadow-lg">
            {/* Nội dung bảng */}
            <table className="table-auto border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Column 1</th>
                  <th className="border px-4 py-2">Column 2</th>
                  <th className="border px-4 py-2">Column 3</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 4 }).map((_, rowIndex) => (
                  <tr key={rowIndex}>
                    <td
                      className={`border px-4 py-2 cursor-pointer ${selectedCell?.row === rowIndex && selectedCell?.col === 0 ? 'bg-blue-200' : ''}`}
                      onClick={() => handleCellClick(rowIndex, 0)}
                    >
                      Row {rowIndex + 1} Col 1
                    </td>
                    <td
                      className={`border px-4 py-2 cursor-pointer ${selectedCell?.row === rowIndex && selectedCell?.col === 1 ? 'bg-blue-200' : ''}`}
                      onClick={() => handleCellClick(rowIndex, 1)}
                    >
                      Row {rowIndex + 1} Col 2
                    </td>
                    <td
                      className={`border px-4 py-2 cursor-pointer ${selectedCell?.row === rowIndex && selectedCell?.col === 2 ? 'bg-blue-200' : ''}`}
                      onClick={() => handleCellClick(rowIndex, 2)}
                    >
                      Row {rowIndex + 1} Col 3
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={handleSelect} // Ẩn overlay khi nhấn
            >
              Select
            </button>
          </div>
        </div>
      )}
    </div>

        <div className="w-[1150px] h-[283px] left-[50px] top-[402px] absolute">
          <div className="left-[200px] top-[3px] absolute text-black text-xs font-normal font-['Inter']">Tên linh kiện</div>
          <div className="left-[350px] top-[3px] absolute text-black text-xs font-normal font-['Inter']">Tên lô</div>
          <div className="left-[70px] top-[3px] absolute text-black text-xs font-normal font-['Inter']">Số hiệu linh kiện</div>
          <div className="w-full h-[0px] left-0 top-[34px] absolute border-2 border-[#7f7e7e]"></div>
          <div className="left-[100px] top-[50px] absolute text-black text-sm font-normal font-['Inter']">LK001</div>
          <div className="w-full h-[0px] left-0 top-[83px] absolute border-2 border-[#cdcdcd]"></div>
          <div className="left-[200px] top-[50px] absolute text-black text-sm font-normal font-['Inter']">Linh kiện 001</div>
          <div className="w-full h-[0px] left-0 top-[133px] absolute border-2 border-[#7f7e7e]"></div>
          <div className="left-[350px] top-[50px] absolute text-black text-sm font-normal font-['Inter']">Lô 001</div>
          <div className="w-full h-[0px] left-0 top-[182px] absolute border-2 border-[#7f7e7e]"></div>
          <div className="left-[480px] top-[50px] absolute text-black text-sm font-normal font-['Inter']">Điện tử</div>
          <div className="w-full h-[0px] left-0 top-[133px] absolute border-2 border-[#cdcdcd]"></div>
          <div className="left-[665px] top-[50px] absolute text-black text-sm font-normal font-['Inter']">200</div>
          <div className="w-full h-[0px] left-0 top-[182px] absolute border-2 border-[#cdcdcd]"></div>
          <div className="left-[790px] top-[50px] absolute text-black text-sm font-normal font-['Inter']">Biến thể 1</div>
          <div className="left-[910px] top-[50px] absolute text-black text-sm font-normal font-['Inter']">#UOM1</div>
          <div className="left-[1030px] top-[50px] absolute text-black text-sm font-normal font-['Inter']">20.000.000đ</div>
          <div className="w-[25px] h-[0px] left-[180px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
          <div className="w-[25px] h-[0px] left-[320px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
          <div className="left-[470px] top-[3px] absolute text-black text-xs font-normal font-['Inter']">Tên danh mục</div>
          <div className="w-[25px] h-[0px] left-[430px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
          <div className="w-[25px] h-[0px] left-[600px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
          <div className="w-[25px] h-[0px] left-[750px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
          <div className="left-[645px] top-[3px] absolute text-black text-xs font-normal font-['Inter']">Số lượng</div>
          <div className="w-[25px] h-[0px] left-[60px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
          <div className="left-[780px] top-[3px] absolute text-black text-xs font-normal font-['Inter']">Các biến thể</div>
          <div className="w-[25px] h-[0px] left-[880px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
          <div className="left-[920px] top-[3px] absolute text-black text-xs font-normal font-['Inter']">UOM</div>
          <div className="w-[25px] h-[0px] left-[1000px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
          <div className="left-[1050px] top-[3px] absolute text-black text-xs font-normal font-['Inter']">Giá</div>
          <div className="w-full h-[0px] left-0 top-[234px] absolute border-2 border-[#cdcdcd]"></div>
          <div className="w-full h-[0px] left-0 top-[283px] absolute border-2 border-[#cdcdcd]"></div>
          <img className="w-10 h-[35.24px] left-[8px] top-[39px] absolute" src={images['icon_linhkien.png']} onClick={() => navigate('/dslk2')}/>
        </div>
        <div className="w-[119px] h-5 left-[1050px] top-[987px] absolute">
        <button>
        <img className="w-5 h-5 left-[99px] top-[20px] absolute origin-top-left -rotate-90" src={images['left.png']}/>
        </button>
        <button>
        <img className="w-5 h-5 left-[94px] top-0 absolute origin-top-left rotate-90" src={images['right.png']} />
        </button>
        <div className="left-0 top-[2px] absolute text-[#b1b1b1] text-xs font-bold font-['Inter']">1/ 10 trang</div>
      </div>
    </div>
  );
}


export default DSLK;