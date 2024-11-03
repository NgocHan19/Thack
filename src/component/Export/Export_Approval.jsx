import React from 'react';
import { useNavigate } from 'react-router-dom';
import images from '../../images';

const Export_Approval = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
};

  return (
    <div className="relative w-full h-[1080px] bg-[#EEEEEE]">
      <div className="relative w-full h-full bg-gray-200">
        <button className="absolute left-[70px] top-[20px] font-inter font-bold text-base leading-[29px] text-[#7D7D7D]"
          onClick={() => handleNavigate('/dslk')}>Kho linh kiện/</button>
        <button className="absolute left-[185px] top-[20px] font-inter font-bold text-base leading-[29px] text-[#7D7D7D]"
          onClick={() => handleNavigate('/xuatkho')}>Xuất kho/</button>
        <button className="absolute left-[275px] top-[20px] font-inter font-bold text-base leading-[29px] text-[#7D7D7D]"
        onClick={() => handleNavigate('/duyetxuatkho')}>Duyệt xuất kho</button>
        <div className="absolute w-[1130px] h-[900px] left-[50px] top-[60px] bg-white rounded-[15px]">
          <div className="absolute w-[260px] h-[40px] left-[20px] top-[20px] bg-[#D9D9D9] rounded-[15px] flex items-center px-2">
            <button className="flex items-center pl-4">
              <input type="text" placeholder="Tìm kiếm..." className="flex-1 bg-transparent outline-none text-[#80808A] font-semibold text-sm" />
              <img src={images['icon_search.png']} alt="Search" className="w-[25px] h-[38px] ml-5" />
            </button>
          </div>
          <div className="absolute right-[20px] top-[20px] flex items-center">
            <img src={images['icon_tick.png']} alt="Icon" className="ml-2 mr-2 w-[25px] h-[25px]"/>
            <span className="text-[#A2A2A2] font-normal text-[16px] leading-[18px]">
              Lô hàng
            </span>
          </div>

          <div className="absolute w-[1100px] h-[300px] left-[20px] top-[80px]">
          <table className="table-auto w-full">
            <thead>
              <tr>
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
                <td className="flex items-center justify-center p-2">
                  <button className="w-full h-full flex items-center justify-center">
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
                    <span className="text-[#CAC745] font-bold text-[12px] leading-[15px] ">Chờ duyệt</span>
                  </div>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr className="border-t-2 border-gray-400">
                <td className="flex items-center justify-center p-2">
                  <button className="w-full h-full flex items-center justify-center">
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
                    <span className="text-[#37DE47] font-bold text-[12px] leading-[15px]">Chờ duyệt</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
          <div className="absolute bottom-2 right-2 flex items-center space-x-2">
              <span className="font-bold text-base text-[#B2B2B2]">1/10 trang</span>
                <button className="w-[30px] h-[30px] bg-white flex items-center justify-center">
                  <img src={images['icon_prev.png']} alt="Previous" className="w-6 h-6" />
                </button>
                <button className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center">
                  <img src={images['icon_next.png']} alt="Next" className="w-6 h-6" />
                </button>
            </div>
        </div>


        </div>
      </div>
  );
};

export default Export_Approval;