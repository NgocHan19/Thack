import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom'; 
import images from '../../images';
import axios from 'axios'

function Danhmuc_QL() {
  const navigate = useNavigate(); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOrganizationDropdownOpen, setIsOrganizationDropdownOpen] = useState(false);
  const [isTableVisible, setIsTableVisible] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null); // State để lưu ô được chọn
  const [filterText, setFilterText] = useState(''); // State để lưu nội dung đã chọn
  const [ParCats, setParCats] = useState([])
  const [ChildCats, setChildCats] = useState([])
  const [currentCategoryId, setCurrentCategoryId] = useState(null);
  const [totalCategories, setTotalCategories] = useState(0);
  const [parentCategories, setParentCategories] = useState(0);
  const [childCategories, setChildCategories] = useState(0);
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

  const fetchCatData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/total')
      setTotalCategories(response.data[0].total)
    }catch (error) {
      console.error('Lỗi khi lấy danh mục cha')
    }
  }

  const fetchParCatData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/totalParCats')
      setParentCategories(response.data[0].total)
    }catch (error) {
      console.error('Lỗi khi lấy danh mục cha')
    }
  }

  const fetchChildCatData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/totalChildCats')
      setChildCategories(response.data[0].total)
    }catch (error) {
      console.error('Lỗi khi lấy danh mục cha')
    }
  }

  const fetchParCat = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/categories')
      setParCats(response.data)
    } catch (error) {
      console.error('Lỗi khi lấy danh mục cha')
    }
  },[])

  const fetchChildCat = async (IDDMC) => {
    try { 
      const response = await axios.get(`http://localhost:5000/api/categories-child/${IDDMC}`); // Đường dẫn API của bạn
      return response.data;
    } catch (error) {
      console.error('Lỗi khi lấy danh mục con:', error);
      return [];
    }
  }
  const toggleTable = async (IDDMC) => {
    if (isTableVisible && currentCategoryId === IDDMC) {
      setIsTableVisible(false);
      setChildCats([]);
      setCurrentCategoryId(null);
    } else {
      setIsTableVisible(true);
      setCurrentCategoryId(IDDMC);
      try {
        const childCategories = await fetchChildCat(IDDMC);
        setChildCats(childCategories);
      } catch (error) {
        console.error('Error fetching child categories:', error);
        // Có thể thông báo cho người dùng về lỗi
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([
        fetchCatData(),
        fetchParCatData(),
        fetchChildCatData(),
      ]);
    };
    fetchData()
    fetchParCat()
  }, [fetchParCat])
  return (
    <div className="relative w-full h-[1080px] bg-[#EEEEEE]">   
    <div className="left-[50px] top-[37px] absolute text-[#7d7d7d] text-2xl font-bold font-['Inter']">Kho Linh Kiện</div>
    <div className="w-[1150px] h-[170px] left-[50px] top-[86px] absolute bg-white rounded-[15px]" />
    <div className="w-[1150px] h-[753px] left-[50px] top-[276px] absolute bg-white rounded-[15px]" />
    <div className="left-[150px] top-[118px] absolute text-black text-[32px] font-bold font-['Inter']">Danh mục Linh Kiện</div>
    <img src={images['icon_dmlk.png']} alt="icon_lh" className="w-[50px] h-[50px] left-[90px] top-[113px] absolute"  />
      <div className="left-[100px] top-[207px] absolute text-[#3498db] text-base font-bold font-['Inter']">Tổng số danh mục:{totalCategories}</div>
        <div className="left-[350px] top-[208px] absolute text-[#3498db] text-base font-bold font-['Inter']">Danh mục cha:{parentCategories}</div>
        <div className="left-[650px] top-[208px] absolute text-[#3498db] text-base font-bold font-['Inter']">Danh mục con:{childCategories}</div>
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
  <table className="table-auto w-[1150px] h-[282px] left-[46px] top-[399px] absolute">
    <thead>
      <tr>
      <th className="text-center px-2 py-2 text-xs"></th>
      <th className="text-center px-2 py-2 text-xs">Tên danh mục</th>
        <th className="text-center px-2 py-2 text-xs">Số hiệu danh mục</th>
        <th className="text-center px-2 py-2 text-xs">ID</th>
        <th className="text-center px-2 py-2 text-xs">Mô tả</th>
        <th className="text-center px-2 py-2 text-xs">Sô hiệu danh mục cấp cha</th>
        <th className="text-center px-2 py-2 text-xs">Ghi chú</th>
      </tr>
    </thead>
    <tbody>
      {ParCats.map(categories => (
        <tr className="border-t-2 border-gray-400" key={categories.IDDM}>
          <img
          className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center cursor-pointer"
          src={images['icon_barcode.png']}
          alt="Toggle Dropdown"
          onClick={() => toggleTable(categories.IDDMC)}
        />
          <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">{categories.TenDM}</td>
          <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">{categories.CodeDM}</td>
          <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">{categories.IDDM}</td>
          <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">{categories.MoTa}</td>
          <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">{categories.IDDMC}</td>
          <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">{categories.Notes}</td>
          {isTableVisible && currentCategoryId === categories.IDDMC && ChildCats.length > 0 && (
          <tr>
            <table className="table-auto w-full h-[252px] left-0 top-[230px] absolute">
              <thead>
                  <tr>      
                    <td className="text-center px-2 py-2 text-xs font-['Inter']">Tên danh mục</td>
                    <td className="text-center px-2 py-2 text-xs font-['Inter']">Số hiệu danh mục con</td>
                    <td className="text-center px-2 py-2 text-xs font-['Inter']">ID</td>
                    <td className="text-center px-2 py-2 text-xs font-['Inter']">Mô tả</td>
                    <td className="text-center px-2 py-2 text-xs font-['Inter']">Ghi chú</td>
                  </tr>
              </thead>
              <tbody>
                {ChildCats.map(child => (
                  <tr className="border-t-2 border-gray-400" key={child.IDDMC}>
                  <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">{child.TenDM}</td>
                  <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">{child.CodeDM}</td>
                  <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">{child.IDDMC}</td>
                  <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">{child.MoTa}</td>
                  <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">{child.Notes}</td>
                </tr>
                ))}
              </tbody>
            </table>
          </tr>
        )}
      </tr>
      
      ))}
    </tbody>

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
  <img className="w-[30px] h-[30px] left-[800px] top-[308px] absolute" src={images['icon_canhloc.png']} 
        alt="icon_canhloc" onClick={() => navigate('/danhmuc-ql-sua')}/>
</div>


  );
}
export default Danhmuc_QL;