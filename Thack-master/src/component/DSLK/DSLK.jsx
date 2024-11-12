import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import hook điều hướng
import images from '../../images';
import axios from 'axios';
function DSLK_NV() {
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

  const [linhKien, setLinhKien] = useState([])
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products')
      setLinhKien(response.data)
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu', error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="relative w-full h-[1080px] bg-[#EEEEEE]">
 
        
 <div className="left-[50px] top-[37px] absolute text-[#7d7d7d] text-2xl font-bold font-['Inter']">Kho Linh Kiện</div>
 <div className="w-[1150px] h-[170px] left-[50px] top-[86px] absolute bg-white rounded-[15px]" />
 <div className="left-[150px] top-[118px] absolute text-black text-[32px] font-bold font-['Inter']">Thông Tin Linh Kiện</div>
        <img src={images['icon_dslk.png']} alt="icon_lh" className="w-[50px] h-[50px] left-[90px] top-[113px] absolute"   />
        <div className="left-[100px] top-[207px] absolute text-[#3498db] text-base font-bold font-['Inter']">Tổng số linh kiện:</div>
        <div className="left-[350px] top-[208px] absolute text-[#3498db] text-base font-bold font-['Inter']">Số linh kiện cận hạn:</div>
        <div className="left-[650px] top-[208px] absolute text-[#3498db] text-base font-bold font-['Inter']">Số linh kiện lỗi:</div>
        <div className="w-[1150px] h-[753px] left-[50px] top-[276px] absolute bg-white rounded-[15px]" />
        
        <div className="absolute w-[279px] h-[50px] left-[80px] top-[299px]">
  <div className="w-[279px] h-[50px] left-0 top-0 absolute bg-[#d9d9d9]/60 rounded-[20px] flex items-center transition duration-200 hover:bg-[#c0c0c0]">
    <img src={images['icon_search.png']} alt="icon_search" className="w-[25px] h-[25px] ml-[15px]" />
    <input
      type="text"
      placeholder="Tìm kiếm..."
      className="ml-[15px] w-full h-full bg-transparent text-[#7f8089] font-semibold text-[14px] placeholder-[#A2A2A2] focus:outline-none"
    />
  </div>
</div>
        <div className="w-[136px] h-[60px] left-[850px] top-[142px] absolute">
          <div className="w-[136px] h-[60px] left-0 top-0 absolute bg-[#3498db] rounded-[15px]" />
          <div className="w-[83px] h-[21.29px] left-[41px] top-[18px] absolute text-white text-lg font-semibold font-['Inter']">Nhập kho</div>
          <img className="w-[25px] h-[25px] left-[10px] top-[17px] absolute" src={images['Plus.png']} />
        </div>
        <div className="w-[129px] h-[60px] left-[1020px] top-[142px] absolute">
          <div className="w-[129px] h-[60px] left-0 top-0 absolute">
            <div className="w-[129px] h-[60px] left-0 top-0 absolute bg-[#cd4141] rounded-[15px]" />
            <div className="w-[79px] left-[13px] top-[17px] absolute text-white text-lg font-semibold font-['Inter']">Xuất kho</div>
          </div>
          <img className="w-[25px] h-[25px] left-[92px] top-[17px] absolute" src={images['Delete.png']} />
        </div>
        <div className="w-[330px] h-[55px] left-[850px] top-[296px] absolute">
        <div className="w-[330px] h-[55px] left-0 top-0 absolute bg-white rounded-[5px] border border-[#c2c2c2]/80" />
        <div className="left-[47px] top-[16px] absolute text-[#cbcbcb] text-lg font-bold font-['Inter']">
        Lọc theo: {filterText} {/* Hiển thị nội dung đã chọn */}
      </div>
              <img className="w-5 h-5 left-[12px] top-[18px] absolute" src={images['icon_loc.png']} alt="icon_loc" />
              <img
        className="w-[25px] h-[25px] left-[289px] top-[15px] absolute cursor-pointer"
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

        <table className="w-[1150px] h-[283px] left-[50px] top-[402px] absolute ">
          <thead>
            <tr>
              <>
              <div className="left-[200px] top-[3px] absolute text-black text-sm font-normal font-['Inter']">Tên linh kiện</div>
              <div className="left-[350px] top-[3px] absolute text-black text-sm font-normal font-['Inter']">Tên lô</div>
              <div className="left-[70px] top-[3px] absolute text-black text-sm font-normal font-['Inter']">Số hiệu linh kiện</div>
              <div className="w-full h-[0px] left-0 top-[34px] absolute border-2 border-[#7f7e7e]"></div>
              <div className="w-full h-[0px] left-0 top-[83px] absolute border-2 border-[#cdcdcd]"></div>
              <div className="w-full h-[0px] left-0 top-[133px] absolute border-2 border-[#7f7e7e]"></div>
              <div className="w-full h-[0px] left-0 top-[182px] absolute border-2 border-[#7f7e7e]"></div>
              <div className="w-full h-[0px] left-0 top-[133px] absolute border-2 border-[#cdcdcd]"></div>
              <div className="w-full h-[0px] left-0 top-[182px] absolute border-2 border-[#cdcdcd]"></div>
              <div className="w-[25px] h-[0px] left-[180px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
              <div className="w-[25px] h-[0px] left-[320px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
              <div className="left-[470px] top-[3px] absolute text-black text-sm font-normal font-['Inter']">Tên danh mục</div>
              <div className="w-[25px] h-[0px] left-[430px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
              <div className="w-[25px] h-[0px] left-[600px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
              <div className="w-[25px] h-[0px] left-[750px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
              <div className="left-[645px] top-[3px] absolute text-black text-sm font-normal font-['Inter']">Số lượng</div>
              <div className="w-[25px] h-[0px] left-[60px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
              <div className="left-[780px] top-[3px] absolute text-black text-sm font-normal font-['Inter']">Các biến thể</div>
              <div className="w-[25px] h-[0px] left-[880px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
              <div className="left-[920px] top-[3px] absolute text-black text-sm font-normal font-['Inter']">UOM</div>
              <div className="w-[25px] h-[0px] left-[1000px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
              <div className="left-[1050px] top-[3px] absolute text-black text-sm font-normal font-['Inter']">Giá</div>
              <div className="w-full h-[0px] left-0 top-[234px] absolute border-2 border-[#cdcdcd]"></div>
              <div className="w-full h-[0px] left-0 top-[283px] absolute border-2 border-[#cdcdcd]"></div>
              </>
            </tr>
          </thead>
          <tbody>
            {linhKien.map(products => (
                <tr className='"border-t-2 border-gray-400"' key={products.IDLK}>
                  <>
                    <td className="w-10 h-[35.24px] left-[8px] top-[39px] absolute"></td>
                    <td className="w-10 h-[35.24px] left-[70px] top-[30px] absolute">{products.CodeLK}</td>
                  </>
                </tr>
            ))}
          </tbody>
          <img className="w-10 h-[35.24px] left-[8px] top-[39px] absolute" src={images['icon_linhkien.png']} onClick={() => navigate('/dslk2')}/>
        </table>
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


export default DSLK_NV;