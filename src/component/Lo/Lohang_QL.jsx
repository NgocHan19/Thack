import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import images from '../../images';

function Lohang_QL() {
  const navigate = useNavigate(); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOrganizationDropdownOpen, setIsOrganizationDropdownOpen] = useState(false);
  const [isTableVisible, setIsTableVisible] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null); // Thêm trạng thái cho dòng được chọn
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null); // State để lưu ô được chọn
  const [filterText, setFilterText] = useState(''); // State để lưu nội dung đã chọn
  const [selectedStatus, setSelectedStatus] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [pendingStatus, setPendingStatus] = useState("");

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
  const handleRowClick = (rowIndex) => {
    setSelectedRow(rowIndex); // Cập nhật trạng thái dòng được chọn
  };
  const toggleTable = () => {
    setIsTableVisible(!isTableVisible);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
  };
  const toggleOrganizationDropdown = () => {
    setIsOrganizationDropdownOpen(!isOrganizationDropdownOpen);
  };

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleRadioChange = (status) => {
    setPendingStatus(status);
    setShowModal(true);  // Show modal when an option is selected
  };

  const confirmSelection = () => {
    setSelectedStatus(pendingStatus);
    setShowModal(false);
    // Additional actions based on the selected status can go here
  };

  const cancelSelection = () => {
    setPendingStatus("");
    setShowModal(false);
  };



  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleNavigate = (path) => {
    navigate(path);
};

  return (
<div className="relative w-full h-[1080px] bg-[#F4F7FA]">
     <div className="left-[50px] top-[37px] absolute text-[#7d7d7d] text-2xl font-bold font-['Inter']">Lô hàng</div>
      <div className="w-[1150px] h-[170px] left-[50px] top-[86px] absolute bg-white rounded-[15px] shadow-lg" />
      <div className="w-[1150px] h-[753px] left-[50px] top-[276px] absolute bg-white rounded-[15px] shadow-lg" />
      <div className="left-[150px] top-[118px] absolute text-black text-[32px] font-bold font-['Inter']">Thông Tin Lô Hàng</div>
      <div className="left-[100px] top-[207px] absolute text-[#3498db] text-base font-bold font-['Inter']">Tổng số lô hàng:</div>
      <div className="left-[600px] top-[207px] absolute text-[#3498db] text-base font-bold font-['Inter']">Số lô hàng cận hạn:</div>
      <img src={images['icon_lh.png']} alt="icon_lh" className="w-[50px] h-[50px] left-[90px] top-[113px] absolute"  />
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
<div className="relative">
      {/* Button */}
      <div
        className="w-[184px] h-[50px] absolute left-[1000px] top-[16px] cursor-pointer"
        onClick={toggleDropdown1}
      >
        <div className="w-[184px] h-[50px] absolute bg-[#64c860] rounded-[15px]" />
        <div className="w-[120.23px] h-[21.29px] absolute left-[48px] top-[14px] text-white text-lg font-semibold font-['Inter']">
          Duyệt lô hàng
        </div>
        <img
          className="w-5 h-5 absolute left-[17px] top-[15px]"
          src={images['icon_duyetlh.png']}
          alt="icon"
        />
      </div>

      {/* Dropdown */}
      {showDropdown1 && (
        <div className="w-[200px] h-[100px] absolute left-[1000px] top-[66px]">
          <div className="w-[200px] h-[220px] bg-white rounded-[15px] border-2 border-[#767676]" />
          <div className="absolute left-[40px] top-[10px] text-[#525050] text-l ">
            Trạng thái lô hàng
          </div>

          {["Đã duyệt", "Bị từ chối", "Chưa nhập kho", "Đã nhập kho", "Đã xuất kho"].map((status, index) => (
            <div key={index} className="absolute left-[25px] top-[35px] flex items-center" style={{ top: `${35 + index * 35}px` }}>
              <input 
                type="radio" 
                name="status" 
                value={status} 
                className="w-[20px] h-[20px] mr-2" 
                checked={selectedStatus === status}
                onChange={() => handleRadioChange(status)}
              />
              <label className="text-[#a1a1a1] text-l font-normal">
                {status}
              </label>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-[300px] text-center">
            <p className="text-lg font-semibold mb-4">
              Bạn có muốn chọn "{pendingStatus}"?
            </p>
            <div className="flex justify-around">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={confirmSelection}
              >
                Xác nhận
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={cancelSelection}
              >
                Huỷ
              </button>
            </div>
          </div>
        </div>
      )}
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
      <div className="w-[1150px] h-[282px] left-[50px] top-[401px] absolute">
        <div className="left-[280px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Ngày nhận</div>
        <div className="left-[120px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Số seri</div>
        <div className="left-[200px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Tên lô</div>
        <div className="left-[50px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Barcode </div>
        <div className="w-full h-[0px] left-0 top-[33px] absolute border-2 border-[#7f7e7e]"></div>
        <div className="w-full h-[0px] left-0 top-[82px] absolute border-2 border-[#cdcdcd]"></div>
        <div className="w-full h-[0px] left-0 top-[132px] absolute border-2 border-[#7f7e7e]"></div>
        <div className="w-full h-[0px] left-0 top-[181px] absolute border-2 border-[#7f7e7e]"></div>
        <div className="w-full h-[0px] left-0 top-[132px] absolute border-2 border-[#cdcdcd]"></div>
        <div className="w-full h-[0px] left-0 top-[181px] absolute border-2 border-[#cdcdcd]"></div>
        <div className="w-[25px] h-[0px] left-[180px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
        <div className="w-[25px] h-[0px] left-[250px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
        <div className="w-[25px] h-[0px] left-[100px] top-[26px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
        <div className="w-[25px] h-[0px] left-[33px] top-[26px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
        <div className="w-[25px] h-[0px] left-[380px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
        <div className="left-[400px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Ngày sản xuất</div>
        <div className="w-[25px] h-[0px] left-[520px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
        <div className="left-[550px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Ngày hết hạn lô</div>
        <div className="w-[25px] h-[0px] left-[650px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
        <div className="left-[670px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Số lượng lô hàng</div>
        <div className="w-[25px] h-[0px] left-[780px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
        <div className="left-[800px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Tổng giá</div>
        <div className="w-[25px] h-[0px] left-[880px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
        <div className="left-[900px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Trạng thái lô hàng</div>
        <div className="left-[1070px] top-[4px] absolute text-black text-sm font-normal font-['Inter']">Ghi chú</div>
        <div className="w-[25px] h-[0px] left-[1035px] top-[25px] absolute origin-top-left -rotate-90 border-2 border-[#cdcdcd]"></div>
        <div className="relative">
        {/* Hình ảnh kích hoạt bảng xổ */}
        <img
          className="w-5 h-5 left-[6px] top-[48px] absolute cursor-pointer"
          src={images['icon_barcode.png']}
          alt="Toggle Dropdown"
          onClick={toggleTable}
          
        />

        {/* Bảng xổ xuống */}
        
        {isTableVisible && (
          <div className="w-[1080px] h-[252px] left-10 top-[300px] absolute z-10"> // Thêm z-index để bảng xổ xuống nằm trên các phần tử khác
            <div className="w-full h-[252px] left-0 top-0 absolute bg-[#eeeeee] rounded-[5px]" />
            <div className="left-[550px] top-[14px] absolute text-black text-sm font-normal font-['Inter']">Giá</div>
            <div className="left-[350px] top-[14px] absolute text-black text-sm font-normal font-['Inter']">Đơn vị</div>
            <div className="left-[100px] top-[14px] absolute text-black text-sm font-normal font-['Inter']">Tên linh kiện</div>
            <div className="left-[700px] top-[14px] absolute text-black text-sm font-normal font-['Inter']">Ngày sản xuất</div>
          <img className="w-[40px] h-[50px] left-[20px] top-[54px] absolute" src={images['icon_linhkien.png']} alt="item" />
          <div className="w-full h-[0px] left-0 top-[45px] absolute border-2 border-[#cdcdcd]"></div>
          <img className="w-[40px] h-[50px] left-[20px] top-[125px] absolute" src={images['icon_linhkien.png']} alt="item" />
          <div className="w-full h-[0px] left-0 top-[116px] absolute border-2 border-[#cdcdcd]"></div>
          <img className="w-[40px] h-[50px] left-[20px] top-[193px] absolute" src={images['icon_linhkien.png']} alt="item" />
          <div className="w-full h-[0px] left-0 top-[184px] absolute border-2 border-[#cdcdcd]"></div>
          <div className="left-[920px] top-[14px] absolute text-[#3498db] text-sm font-bold font-['Inter']"onClick={() => navigate('/lohang-ql2')}>Xem chi tiết</div>
        </div>
      )}
    </div>         
      <img className="w-5 h-5 left-[6px] top-[97px] absolute" src={images['icon_barcode.png']} 
        alt="Toggle Dropdown" />
        <img className="w-5 h-5 left-[6px] top-[146px] absolute" src={images['icon_barcode.png']} 
        alt="Toggle Dropdown" />
        <img className="w-5 h-5 left-[6px] top-[197px] absolute" src={images['icon_barcode.png']} 
        alt="Toggle Dropdown" />
        <img className="w-5 h-5 left-[6px] top-[246px] absolute" src={images['icon_barcode.png']} 
        alt="Toggle Dropdown" />
        <div className="w-full h-[0px] left-0 top-[233px] absolute border-2 border-[#cdcdcd]"></div>
        <div className="w-full h-[0px] left-0 top-[282px] absolute border-2 border-[#cdcdcd]"></div>
        <div className="w-[100px] h-[27px] left-[920px] top-[244px] absolute">
          <div className="w-[100px] h-[27px] left-0 top-0 absolute bg-white rounded-[10px] border border-[#efec38]" />
          <div className="left-[7px] top-[5px] absolute text-[#efec38] text-sm font-bold font-['Inter']">Đã nhập kho</div>
        </div>
        <div className="w-[122px] h-[27px] left-[910px] top-[192px] absolute">
          <div className="w-[122px] h-[27px] left-0 top-0 absolute bg-white rounded-[10px] border border-[#9f9f9f]" />
          <div className="left-[9px] top-[5px] absolute text-[#9f9f9f] text-sm font-bold font-['Inter']">Chưa nhập kho</div>
        </div>
        <div className="w-[86px] h-[27px] left-[920px] top-[143px] absolute">
          <div className="w-[86px] h-[27px] left-0 top-0 absolute bg-white rounded-[10px] border border-[#cd4141]" />
          <div className="w-[65px] h-[14.34px] left-[11px] top-[5.06px] absolute text-[#cd4141] text-sm font-bold font-['Inter']">Bị từ chối</div>
        </div>
        <div className="w-[91px] h-[27px] left-[920px] top-[43px] absolute">
          <div className="w-[91px] h-[27px] left-0 top-0 absolute bg-white rounded-[10px] border border-[#3498db]" />
          <div className="left-[10px] top-[5px] absolute text-[#3498db] text-sm font-bold font-['Inter']">Chờ duyệt </div>
        </div>
        <div className="w-[81px] h-[27px] left-[920px] top-[91px] absolute">
          <div className="w-[81px] h-[27px] left-0 top-0 absolute bg-white rounded-[10px] border border-[#36de47]" />
          <div className="left-[10px] top-[5px] absolute text-[#36de47] text-sm font-bold font-['Inter']">Đã duyệt</div>
        </div>
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
export default Lohang_QL;