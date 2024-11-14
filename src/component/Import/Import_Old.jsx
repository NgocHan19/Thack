import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import images from '../../images';
import axios from 'axios'

const Import_Old = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleIconClick = () => {
    setIsChecked((prevState) => !prevState);
    if (!isChecked) {
      navigate('/nhapkhomoi');
    }
};

  const [nhapkho, setNhapKho] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:3000/api/nhapkho')
          .then(response => {
              setNhapKho(response.data);
          })
          .catch(error => console.error('Lỗi lấy dữ liệu:', error));
  }, []);

  return (
    <div className="relative w-full h-[1080px] bg-[#F4F7FA]">
      <button className="absolute left-[50px] top-[20px] font-inter font-bold text-sm leading-[29px] text-[#7D7D7D]"
        onClick={() => handleNavigate('/dslk')}>Kho linh kiện /</button>
      <button className="absolute left-[150px] top-[20px] font-inter font-bold text-sm leading-[29px] text-[#7D7D7D]"
        onClick={() => handleNavigate('/nhapkholocu')}>Nhập kho</button>

      <button className="absolute w-[170px] h-[30px] left-[1010px] top-[15px] bg-[#CD4141] rounded-lg flex items-center justify-center" onClick={() => handleNavigate('/duyetnhapkho')}>
        <img src={images['icon_tick_white.png']} alt="Nhập kho" className="w-[20px] h-[20px] mr-2" />
        <span className="font-semibold text-base text-white">Duyệt nhập kho</span>
      </button>
    <div> 
      <div className="relative w-full h-full bg-gray-200">
        <div className="absolute w-[1130px] h-[780px] left-[50px] top-[60px] bg-white rounded-[15px] shadow-lg">
        <div className='absolute w-[800px] h-[40px]'>
          <div className="absolute left-[20px] top-[10px] w-[283px] h-[31px] text-xl leading-[31px] font-bold text-black">
            Thông tin nhập lô hàng
          </div>
          <div className="absolute left-[970px] top-[15px] flex items-center">
            <button
              className="flex items-center" 
              onClick={handleIconClick}
            >
              <img
                className="w-[15px] h-[15px] mr-[10px]"
                src={isChecked ? images['icon_checkbox_green.png'] : images['icon_checkbox_empty.png']}
                alt="Icon"
              />
              <div className="w-[130px] h-[18px] text-sm leading-[18px] font-normal text-[#A2A2A2]">
                Nhập lô hàng mới
              </div>
            </button>
          </div>
          <div className="absolute left-[790px] top-[15px] flex items-center space-x-[10px]">
            <img
                className="w-[15px] h-[15px]"
                src={images['icon_checkbox_green.png']}
                alt="Icon"
              />
            <div className="w-[150px] h-[18px] text-sm leading-[18px] font-normal text-[#A2A2A2]">
              Nhập lại lô trong kho
            </div>
          </div>
        </div>

          <div className="absolute w-[300px] h-[35px] left-[20px] top-[60px] bg-[#D9D9D9] rounded-[15px] flex items-center px-2">
            <button className="flex items-center pl-4">
              <input type="text" placeholder="Tìm kiếm lô đã nhập" className="flex-1 bg-transparent outline-none text-[#80808A] font-semibold text-sm" />
              <img src={images['icon_search.png']} alt="Search" className="w-[20px] h-[30px] ml-[70px]" />
            </button>
          </div>

          <div className="absolute w-[1100px] h-[300px] left-[20px] top-[120px]">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="w-10">
                  <button className="p-2"></button>
                </th>
                <th className="w-10">
                  <button className="p-2"></button>
                </th>
                <th className="text-center px-2 py-2 text-xs">Barcode</th>
                <th className="text-center px-2 py-2 text-xs">Số seri</th>
                <th className="text-center px-2 py-2 text-xs">Tên lô</th>
                <th className="text-center px-2 py-2 text-xs">Ngày nhận</th>
                <th className="text-center px-2 py-2 text-xs">Ngày sản xuất</th>
                <th className="text-center px-2 py-2 text-xs">Ngày hết hạn lô</th>
                <th className="text-center px-2 py-2 text-xs">Số lượng lô hàng</th>
                <th className="text-center px-2 py-2 text-xs">Tổng giá</th>
                <th className="text-center px-2 py-2 text-xs">Trạng thái lô hàng</th>
                <th className="text-center px-2 py-2 text-xs">Ghi chú</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t-2 border-gray-400">
                <td className="p-1 text-center">
                  <button onClick={handleIconClick}>
                      <img
                          src={isChecked ? images['icon_check_green.png'] : images['icon_check_empty.png']}
                          alt={isChecked ? "Checked" : "Unchecked"}
                          className="w-[20px] h-[20px]"
                      />
                  </button>
                  </td>
                  <td className="p-1 text-center">
                    <button>
                      <img src={images['icon_down_arrow_black1.png']} alt="Arrow Down" className="w-[20px] h-[20px]" />
                    </button>
                  </td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">q949q3</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">001234</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">Lô 1</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">2024-10-01</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">2024-09-20</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">2024-09-20</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">100</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">$1,000</td>
                <td className="p-2 flex items-center justify-center">
                  <div className="bg-white border border-[#CAC745] rounded-[10px] px-2 py-0.5">
                    <span className="text-[#CAC745] font-bold text-[12px] leading-[15px] ">Đã nhập kho</span>
                  </div>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr className="border-t-2 border-gray-400">
                <td className="p-1 text-center">
                  <button onClick={handleIconClick}>
                      <img
                          src={isChecked ? images['icon_check_green.png'] : images['icon_check_empty.png']}
                          alt={isChecked ? "Checked" : "Unchecked"}
                          className="w-[20px] h-[20px]"
                      />
                  </button>
                  </td>
                  <td className="p-1 text-center">
                    <button>
                      <img src={images['icon_down_arrow_black1.png']} alt="Arrow Down" className="w-[20px] h-[20px]" />
                    </button>
                  </td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">q949q3</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">001234</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">Lô 1</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">2024-10-01</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">2024-09-20</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">2024-09-20</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">69</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">$1,000</td>
                <td className="p-2 flex items-center justify-center">
                  <div className="bg-white border border-[#37DE47] rounded-[10px] px-2 py-0.5">
                    <span className="text-[#37DE47] font-bold text-[12px] leading-[15px]">Đã duyệt</span>
                  </div>
                </td>
              </tr>
            </tbody>
            <tbody>
            {nhapkho.map((item, index) => (
              <tr key={index} className="border-t-2 border-gray-400">
                <td className="p-1 text-center">
                  <button onClick={handleIconClick}>
                      <img
                          src={isChecked ? images['icon_check_green.png'] : images['icon_check_empty.png']}
                          alt={isChecked ? "Checked" : "Unchecked"}
                          className="w-[20px] h-[20px]"
                      />
                  </button>
                  </td>
                  <td className="p-1 text-center">
                    <button>
                      <img src={images['icon_down_arrow_black1.png']} alt="Arrow Down" className="w-[20px] h-[20px]" />
                    </button>
                  </td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">q949q3</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">001234</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">Lô 1</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">2024-10-01</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">2024-09-20</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">2024-09-20</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">69</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">$1,000</td>
                <td className="p-2 flex items-center justify-center">
                  <div className="bg-white border border-[#DBA260] rounded-[10px] px-2 py-0.5">
                    <span className="text-[#DBA260] font-bold text-[12px] leading-[15px]">Đã xuất kho</span>
                  </div>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
          </div>
          <div className="absolute bottom-3 left-5 flex items-center space-x-2">
                <button className="w-[30px] h-[30px] bg-white flex items-center justify-center">
                  <img src={images['icon_prev.png']} alt="Previous" className="w-6 h-6" />
                </button>
                <span className="font-bold text-base text-[#B2B2B2]">1/10 trang</span>
                <button className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center">
                  <img src={images['icon_next.png']} alt="Next" className="w-6 h-6" />
                </button>
            </div>
            <button onClick={() => handleNavigate('/xacnhannhapkho')} className="absolute right-[20px] bottom-[20px] w-[130px] h-[35px] bg-[#64C860] rounded-[10px] flex items-center justify-center">
          <img src={images['icon_tick_white.png']} alt="Nhập kho" className="w-[20px] h-[20px] mr-2" /> 
          <span className="font-inter font-semibold text-white text-base leading-[22px]">Nhập kho</span>
        </button>

        <button className="absolute right-[170px] bottom-[20px] w-[220px] h-[35px] bg-[#3498DB] rounded-[10px] flex items-center justify-center"
          onClick={() => handleNavigate('/themlinhkienvaolo')}>
          <img src={images['icon_create_white.png']} alt="Thêm linh kiện vào lô" className="w-[20px] h-[20px] mr-2" />
          <span className="font-inter font-semibold text-white text-base leading-[22px]">Thêm linh kiện vào lô</span>
        </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Import_Old;