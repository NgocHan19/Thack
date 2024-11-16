import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import images from '../../images';
import axios from 'axios'

const Import_Confirm = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleIconClick = () => {
      setIsChecked((prevState) => !prevState);
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
        onClick={() => handleNavigate('/nhapkhomoi')}>Nhập kho /</button>
      <button className="absolute left-[230px] top-[20px] font-inter font-bold text-sm leading-[29px] text-[#7D7D7D]"
        onClick={() => handleNavigate('/xacnhanhapkho')}>Xác nhận nhập kho</button>
    <div> 
      <div className="relative w-full h-full bg-gray-200">
        <div className="absolute w-[1130px] h-[750px] left-[50px] top-[60px] bg-white rounded-[15px] shadow-lg">
        <div className='absolute w-[800px] h-[40px]'>
          <div className="absolute left-[20px] top-[10px] w-[283px] h-[31px] text-xl leading-[31px] font-bold text-black">
            Xác nhận thông tin nhập
          </div>
        </div>
          <div className="absolute w-[1100px] h-[300px] left-[20px] top-[60px]">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="w-10">
                  <button className="p-2"></button>
                </th>
                <th className="text-center px-2 py-2 text-xs">Số seri</th>
                <th className="text-center px-2 py-2 text-xs">Tên lô</th>
                <th className="text-center px-2 py-2 text-xs">Ngày nhận</th>
                <th className="text-center px-2 py-2 text-xs">Ngày sản xuất</th>
                <th className="text-center px-2 py-2 text-xs">Ngày hết hạn lô</th>
                <th className="text-center px-2 py-2 text-xs">Số lượng lô hàng</th>
                <th className="text-center px-2 py-2 text-xs">Tổng giá</th>
                <th className="text-center px-2 py-2 text-xs">Ghi chú</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t-2 border-gray-400">
                  <td className="p-1 text-center">
                    <button>
                      <img src={images['icon_down_arrow_black1.png']} alt="Arrow Down" className="w-[20px] h-[20px]" />
                    </button>
                  </td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">001234</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">Lô 1</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">2024-10-01</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">2024-09-20</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">2024-09-20</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">100</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">$1,000</td>
              </tr>
            </tbody>
            <tbody>
              <tr className="border-t-2 border-gray-400">
                  <td className="p-1 text-center">
                    <button>
                      <img src={images['icon_down_arrow_black1.png']} alt="Arrow Down" className="w-[20px] h-[20px]" />
                    </button>
                  </td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">001234</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">Lô 1</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">2024-10-01</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">2024-09-20</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">2024-09-20</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">69</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">$1,000</td>
              </tr>
            </tbody>
            <tbody>
            {nhapkho.map((item, index) => (
              <tr key={index} className="border-t-2 border-gray-400">
                  <td className="p-1 text-center">
                    <button>
                      <img src={images['icon_down_arrow_black1.png']} alt="Arrow Down" className="w-[20px] h-[20px]" />
                    </button>
                  </td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">001234</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">Lô 1</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">2024-10-01</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">2024-09-20</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">2024-09-20</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">69</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">$1,000</td>
              </tr>
              ))}
            </tbody>
          </table>
          </div>
          <button onClick={() => handleNavigate('/xacnhannhapkho')} className="absolute right-[20px] bottom-[20px] w-[200px] h-[35px] bg-[#64C860] rounded-[10px] flex items-center justify-center">
            <img src={images['icon_tick_white.png']} alt="Nhập kho" className="w-[20px] h-[20px] mr-2" /> 
            <span className="font-inter font-semibold text-white text-base leading-[22px]">Xác nhận nhập kho</span>
            </button>

            <button className="absolute right-[240px] bottom-[20px] w-[100px] h-[35px] bg-[#3498DB] rounded-[10px] flex items-center justify-center"
            onClick={() => handleNavigate('/nhapkhomoi')}>
            <span className="font-inter font-semibold text-white text-base leading-[22px]">Quay lại</span>
            </button>
        </div>


        </div>
      </div>
    </div>
  );
};

export default Import_Confirm;