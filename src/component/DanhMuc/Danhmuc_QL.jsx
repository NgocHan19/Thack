import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import images from '../../images';

function Danhmuc_QL() {
  const navigate = useNavigate(); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOrganizationDropdownOpen, setIsOrganizationDropdownOpen] = useState(false);
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

  // Function to toggle the table visibility
  const toggleTable = () => {
      setIsTableVisible((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleOrganizationDropdown = () => {
    setIsOrganizationDropdownOpen(!isOrganizationDropdownOpen);
  };

  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleNavigate = (path) => {
    navigate(path);
};

  return (
    <div className="relative w-full h-[1080px] bg-[#F4F7FA]">
  
      
<div className="left-[50px] top-[37px] absolute text-[#7d7d7d] text-2xl font-bold font-['Inter']">Kho Linh Kiện</div>
<div className="w-[1150px] h-[170px] left-[50px] top-[86px] absolute bg-white rounded-[15px] shadow-lg" />
<div className="w-[1150px] h-[753px] left-[50px] top-[276px] absolute bg-white rounded-[15px] shadow-lg" />
<div className="left-[150px] top-[118px] absolute text-black text-[32px] font-bold font-['Inter']">Danh mục Linh Kiện</div>
<img src={images['icon_dmlk.png']} alt="icon_lh" className="w-[50px] h-[50px] left-[90px] top-[113px] absolute"  />
<div className="left-[100px] top-[207px] absolute text-[#3498db] text-base font-bold font-['Inter']">Tổng số danh mục:</div>
        <div className="left-[350px] top-[208px] absolute text-[#3498db] text-base font-bold font-['Inter']">Danh mục cha:</div>
        <div className="left-[650px] top-[208px] absolute text-[#3498db] text-base font-bold font-['Inter']">Danh mục con:</div>

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
  <div className="w-[184px] h-[50px] left-[950px] top-[150px] absolute">
    <div className="w-[184px] h-[50px] left-0 top-0 absolute bg-[#3498db] rounded-[15px]" />
    <div className="w-[126px] h-[21px] left-[43px] top-[12px] absolute text-white text-lg font-semibold font-['Inter']"onClick={() => navigate('/danhmuc-ql-tao')}>Tạo danh mục</div>
  </div>
  <img className="w-[25px] h-[25px] left-[960px] top-[162px] absolute" src={images['Plus.png']} 
        alt="Plus" />
  <div className="w-[1150px] h-[482px] left-[46px] top-[399px] absolute">
    <div className="left-[370px] top-[3px] absolute text-black text-sm font-normal font-['Inter']">Tên danh mục</div>
    <div className="left-[160px] top-[3px] absolute text-black text-sm font-normal font-['Inter']">Số hiệu danh mục</div>
    <div className="left-[80px] top-[3px] absolute text-black text-sm font-normal font-['Inter']">ID</div>
    <div className="w-full h-[0px] left-[3px] top-[32px] absolute border-2 border-[#7f7e7e]"></div>
    <div className="left-[70px] top-[50px] absolute text-black text-sm font-normal font-['Inter']">DM01</div>
    <div className="left-[180px] top-[50px] absolute text-black text-sm font-normal font-['Inter']">SH001</div>
    <div className="left-[360px] top-[50px] absolute text-black text-sm font-normal font-['Inter']">Điện tử</div>
    <div className="left-[570px] top-[50px] absolute text-black text-sm font-normal font-['Inter']">Mô tả 1</div>
    <div className="left-[850px] top-[50px] absolute text-black text-sm font-normal font-['Inter']">DMC01</div>
    <div className="left-[1050px] top-[50px] absolute text-black text-sm font-normal font-['Inter']">Ghi chú 1</div>
    <div className="w-full h-[0px] left-[3px] top-[81px] absolute border-2 border-[#cdcdcd]"></div>
    <div className="w-full h-[0px] left-[3px] top-[131px] absolute border-2 border-[#7f7e7e]"></div>
    <div className="w-full h-[0px] left-[3px] top-[180px] absolute border-2 border-[#7f7e7e]"></div>
    <div className="w-full h-[0px] left-[3px] top-[131px] absolute border-2 border-[#cdcdcd]"></div>
    <div className="w-full h-[0px] left-[3px] top-[180px] absolute border-2 border-[#cdcdcd]"></div>
    <div className="w-[25px] h-[0px] left-[120px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="w-[25px] h-[0px] left-[300px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="w-[25px] h-[0px] left-[520px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="w-[25px] h-[0px] left-[60px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="left-[620px] top-[3px] absolute text-black text-sm font-normal font-['Inter']">Mô tả</div>
    <div className="w-[25px] h-[0px] left-[740px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
    <div className="left-[800px] top-[3px] absolute text-black text-sm font-normal font-['Inter']">Số hiệu danh mục cấp cha</div>
    <div className="left-[1050px] top-[3px] absolute text-black text-sm font-normal font-['Inter']">Ghi chú</div>
    <div className="w-[25px] h-[0px] left-[1000px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>

    <img
        className="w-5 h-5 left-[6px] top-[48px] absolute cursor-pointer"
        src={images['icon_barcode.png']}
        alt="Toggle Dropdown"
        onClick={toggleTable}
        
      />
{isTableVisible && (
    <div className="w-full h-[252px] left-0 top-[230px] absolute">
      <div className="w-full h-[252px] left-0 top-0 absolute bg-[#eeeeee] rounded-[5px]" />
      <div className="w-full h-[0px] left-0 top-[45px] absolute border-2 border-[#cdcdcd]"></div>
      <div className="w-full h-[0px] left-0 top-[116px] absolute border-2 border-[#cdcdcd]"></div>
      <div className="w-full h-[0px] left-0 top-[184px] absolute border-2 border-[#cdcdcd]"></div>
      <div className="left-[400px] top-[13px] absolute text-black text-sm font-normal font-['Inter']">Tên danh mục</div>
      <div className="left-[150px] top-[13px] absolute text-black text-sm font-normal font-['Inter']">Số hiệu danh mục con</div>
      <div className="left-[60px] top-[13px] absolute text-black text-sm font-normal font-['Inter']">ID</div>
      <div className="left-[650px] top-[13px] absolute text-black text-sm font-normal font-['Inter']">Mô tả</div>
      <div className="left-[900px] top-[13px] absolute text-black text-sm font-normal font-['Inter']">Ghi chú</div>
      <div className="left-[400px] top-[80px] absolute text-black text-sm font-normal font-['Inter']">Điện tử</div>
      <div className="left-[200px] top-[80px] absolute text-black text-sm font-normal font-['Inter']">SHC01</div>
      <div className="left-[60px] top-[80px] absolute text-black text-sm font-normal font-['Inter']">DM01</div>
      <div className="left-[650px] top-[80px] absolute text-black text-sm font-normal font-['Inter']">Mô tả 1</div>
      <div className="left-[900px] top-[80px] absolute text-black text-sm font-normal font-['Inter']">Ghi chú 1</div>

      <div className="left-[400px] top-[150px] absolute text-black text-sm font-normal font-['Inter']">Hoá học</div>
      <div className="left-[200px] top-[150px] absolute text-black text-sm font-normal font-['Inter']">SHC02</div>
      <div className="left-[60px] top-[150px] absolute text-black text-sm font-normal font-['Inter']">DM01</div>
      <div className="left-[650px] top-[150px] absolute text-black text-sm font-normal font-['Inter']">Mô tả 2</div>
      <div className="left-[900px] top-[150px] absolute text-black text-sm font-normal font-['Inter']">Ghi chú 2</div>
          <div className="w-full h-[0px] left-0 top-[45px] absolute border-2 border-[#cdcdcd]"></div>
          {/* Các dòng khác của bảng */}
        </div>
      )}
<img
        className="w-5 h-5 left-[6px] top-[96px] absolute cursor-pointer"
        src={images['icon_barcode.png']}
        alt="Toggle Dropdown"
        onClick={toggleTable}
        
      />
{isTableVisible && (
    <div className="w-full h-[252px] left-0 top-[230px] absolute">
      <div className="w-full h-[252px] left-0 top-0 absolute bg-[#eeeeee] rounded-[5px]" />
      <div className="w-full h-[0px] left-0 top-[45px] absolute border-2 border-[#cdcdcd]"></div>
      <div className="w-full h-[0px] left-0 top-[116px] absolute border-2 border-[#cdcdcd]"></div>
      <div className="w-full h-[0px] left-0 top-[184px] absolute border-2 border-[#cdcdcd]"></div>
      <div className="left-[400px] top-[13px] absolute text-black text-sm font-normal font-['Inter']">Tên danh mục</div>
      <div className="left-[150px] top-[13px] absolute text-black text-sm font-normal font-['Inter']">Số hiệu danh mục con</div>
      <div className="left-[60px] top-[13px] absolute text-black text-sm font-normal font-['Inter']">ID</div>
      <div className="left-[650px] top-[13px] absolute text-black text-sm font-normal font-['Inter']">Mô tả</div>
      <div className="left-[900px] top-[13px] absolute text-black text-sm font-normal font-['Inter']">Ghi chú</div>
      <div className="left-[400px] top-[80px] absolute text-black text-sm font-normal font-['Inter']">Điện tử</div>
      <div className="left-[200px] top-[80px] absolute text-black text-sm font-normal font-['Inter']">SHC01</div>
      <div className="left-[60px] top-[80px] absolute text-black text-sm font-normal font-['Inter']">DM01</div>
      <div className="left-[650px] top-[80px] absolute text-black text-sm font-normal font-['Inter']">Mô tả 1</div>
      <div className="left-[900px] top-[80px] absolute text-black text-sm font-normal font-['Inter']">Ghi chú 1</div>

      <div className="left-[400px] top-[150px] absolute text-black text-sm font-normal font-['Inter']">Hoá học</div>
      <div className="left-[200px] top-[150px] absolute text-black text-sm font-normal font-['Inter']">SHC02</div>
      <div className="left-[60px] top-[150px] absolute text-black text-sm font-normal font-['Inter']">DM01</div>
      <div className="left-[650px] top-[150px] absolute text-black text-sm font-normal font-['Inter']">Mô tả 2</div>
      <div className="left-[900px] top-[150px] absolute text-black text-sm font-normal font-['Inter']">Ghi chú 2</div>
          <div className="w-full h-[0px] left-0 top-[45px] absolute border-2 border-[#cdcdcd]"></div>
          {/* Các dòng khác của bảng */}
        </div>
      )}
          
          <img
        className="w-5 h-5 left-[6px] top-[48px] absolute cursor-pointer"
        src={images['icon_barcode.png']}
        alt="Toggle Dropdown"
        onClick={toggleTable}
        
      />
{isTableVisible && (
    <div className="w-full h-[252px] left-0 top-[230px] absolute">
      <div className="w-full h-[252px] left-0 top-0 absolute bg-[#eeeeee] rounded-[5px]" />
      <div className="w-full h-[0px] left-0 top-[45px] absolute border-2 border-[#cdcdcd]"></div>
      <div className="w-full h-[0px] left-0 top-[116px] absolute border-2 border-[#cdcdcd]"></div>
      <div className="w-full h-[0px] left-0 top-[184px] absolute border-2 border-[#cdcdcd]"></div>
      <div className="left-[400px] top-[13px] absolute text-black text-sm font-normal font-['Inter']">Tên danh mục</div>
      <div className="left-[150px] top-[13px] absolute text-black text-sm font-normal font-['Inter']">Số hiệu danh mục con</div>
      <div className="left-[60px] top-[13px] absolute text-black text-sm font-normal font-['Inter']">ID</div>
      <div className="left-[650px] top-[13px] absolute text-black text-sm font-normal font-['Inter']">Mô tả</div>
      <div className="left-[900px] top-[13px] absolute text-black text-sm font-normal font-['Inter']">Ghi chú</div>
      <div className="left-[400px] top-[80px] absolute text-black text-sm font-normal font-['Inter']">Điện tử</div>
      <div className="left-[200px] top-[80px] absolute text-black text-sm font-normal font-['Inter']">SHC01</div>
      <div className="left-[60px] top-[80px] absolute text-black text-sm font-normal font-['Inter']">DM01</div>
      <div className="left-[650px] top-[80px] absolute text-black text-sm font-normal font-['Inter']">Mô tả 1</div>
      <div className="left-[900px] top-[80px] absolute text-black text-sm font-normal font-['Inter']">Ghi chú 1</div>

      <div className="left-[400px] top-[150px] absolute text-black text-sm font-normal font-['Inter']">Hoá học</div>
      <div className="left-[200px] top-[150px] absolute text-black text-sm font-normal font-['Inter']">SHC03</div>
      <div className="left-[60px] top-[150px] absolute text-black text-sm font-normal font-['Inter']">DM03</div>
      <div className="left-[650px] top-[150px] absolute text-black text-sm font-normal font-['Inter']">Mô tả 3</div>
      <div className="left-[900px] top-[150px] absolute text-black text-sm font-normal font-['Inter']">Ghi chú 3</div>
          <div className="w-full h-[0px] left-0 top-[45px] absolute border-2 border-[#cdcdcd]"></div>
          {/* Các dòng khác của bảng */}
        </div>
      )}
<img
        className="w-5 h-5 left-[6px] top-[145px] absolute cursor-pointer"
        src={images['icon_barcode.png']}
        alt="Toggle Dropdown"
        onClick={toggleTable}
        
      />
{isTableVisible && (
    <div className="w-full h-[252px] left-0 top-[230px] absolute">
      <div className="w-full h-[252px] left-0 top-0 absolute bg-[#eeeeee] rounded-[5px]" />
      <div className="w-full h-[0px] left-0 top-[45px] absolute border-2 border-[#cdcdcd]"></div>
      <div className="w-full h-[0px] left-0 top-[116px] absolute border-2 border-[#cdcdcd]"></div>
      <div className="w-full h-[0px] left-0 top-[184px] absolute border-2 border-[#cdcdcd]"></div>
      <div className="left-[400px] top-[13px] absolute text-black text-sm font-normal font-['Inter']">Tên danh mục</div>
      <div className="left-[150px] top-[13px] absolute text-black text-sm font-normal font-['Inter']">Số hiệu danh mục con</div>
      <div className="left-[60px] top-[13px] absolute text-black text-sm font-normal font-['Inter']">ID</div>
      <div className="left-[650px] top-[13px] absolute text-black text-sm font-normal font-['Inter']">Mô tả</div>
      <div className="left-[900px] top-[13px] absolute text-black text-sm font-normal font-['Inter']">Ghi chú</div>
      <div className="left-[400px] top-[80px] absolute text-black text-sm font-normal font-['Inter']">Điện tử</div>
      <div className="left-[200px] top-[80px] absolute text-black text-sm font-normal font-['Inter']">SHC01</div>
      <div className="left-[60px] top-[80px] absolute text-black text-sm font-normal font-['Inter']">DM01</div>
      <div className="left-[650px] top-[80px] absolute text-black text-sm font-normal font-['Inter']">Mô tả 1</div>
      <div className="left-[900px] top-[80px] absolute text-black text-sm font-normal font-['Inter']">Ghi chú 1</div>

      <div className="left-[400px] top-[150px] absolute text-black text-sm font-normal font-['Inter']">Hoá học</div>
      <div className="left-[200px] top-[150px] absolute text-black text-sm font-normal font-['Inter']">SHC04</div>
      <div className="left-[60px] top-[150px] absolute text-black text-sm font-normal font-['Inter']">DM04</div>
      <div className="left-[650px] top-[150px] absolute text-black text-sm font-normal font-['Inter']">Mô tả 4</div>
      <div className="left-[900px] top-[150px] absolute text-black text-sm font-normal font-['Inter']">Ghi chú 4</div>
          <div className="w-full h-[0px] left-0 top-[45px] absolute border-2 border-[#cdcdcd]"></div>
          {/* Các dòng khác của bảng */}
        </div>
      )}
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
  <img className="w-[30px] h-[30px] left-[800px] top-[308px] absolute" src={images['icon_canhloc.png']} 
        alt="icon_canhloc" onClick={() => navigate('/danhmuc-ql-sua')}/>
</div>


  );
}
export default Danhmuc_QL;