import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import images from '../../images';

const Export_Approval = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
};

  const [isChecked, setIsChecked] = useState(false);

  const handleIconClick = () => {
      setIsChecked((prevState) => !prevState);
  };

  const [isFormVisible, setFormVisible] = useState(false);
  const [status, setStatus] = useState({
    pending: true,
    approved: false,
    rejected: false,
  });
  const [selectedStatus, setSelectedStatus] = useState(null); // Trạng thái được chọn
  const [isConfirmVisible, setConfirmVisible] = useState(false); // Hiện form xác nhận

  const formRef = useRef(null);

  const handleButtonClick = () => {
    setFormVisible(true);
  };

  const closeForm = () => {
    setFormVisible(false);
    setConfirmVisible(false);
    setSelectedStatus(null);
  };

  const handleStatusChange = (option) => {
    setSelectedStatus(option);
    setConfirmVisible(true); // Hiện form xác nhận khi chọn một trạng thái
  };

  const confirmStatusChange = () => {
    // Xác nhận chuyển đổi trạng thái
    setStatus({
      pending: selectedStatus === 'pending',
      approved: selectedStatus === 'approved',
      rejected: selectedStatus === 'rejected',
    });
    setConfirmVisible(false);
    setSelectedStatus(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        closeForm();
      }
    };

    if (isFormVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFormVisible]);


  return (
    <div className="relative w-full h-[1080px] bg-[#F4F7FA]">
      <div className="relative w-full h-full bg-[#F4F7FA]">
        <button className="absolute left-[50px] top-[10px] font-inter font-bold text-sm leading-[29px] text-[#7D7D7D]"
          onClick={() => handleNavigate('/dslk')}>Kho linh kiện /</button>
        <button className="absolute left-[155px] top-[10px] font-inter font-bold text-sm leading-[29px] text-[#7D7D7D]"
          onClick={() => handleNavigate('/xuatkho')}>Xuất kho /</button>
        <button className="absolute left-[235px] top-[10px] font-inter font-bold text-sm leading-[29px] text-[#7D7D7D]"
         onClick={() => handleNavigate('/duyetxuatkho')}>Duyệt xuất kho</button>
        <div className="relative">
              {/* Button to trigger form */}
              <button
                onClick={handleButtonClick}
                className="absolute w-[170px] h-[30px] left-[1010px] top-[15px] bg-[#41CD4A] rounded-lg flex items-center justify-center"
              >
                <img
                  src={images['icon_tick_white.png']}
                  alt="Nhập kho"
                  className="w-[20px] h-[20px] mr-2"
                />
                <span className="font-semibold text-base text-white">Duyệt xuất kho</span>
              </button>

              {/* Conditional form */}
              {isFormVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <div ref={formRef} className="w-[250px] h-[200px] bg-white border-2 border-[#767676] rounded-[25px] p-5 relative">
                    {/* Title */}
                    <h2 className="text-[#525050] font-bold text-xl leading-[29px] mb-4">
                      Trạng thái lô hàng
                    </h2>

                    {/* Status options */}
                    <div className="flex items-center mb-4">
                      <img
                        className="w-[20px] h-[20px] cursor-pointer"
                        src={status.pending ? images['icon_checkbox_green.png'] : images['icon_checkbox_empty.png']}
                        alt="Icon"
                        onClick={() => handleStatusChange('pending')}
                      />
                      <span className="text-[#A2A2A2] font-inter font-normal text-[20px] leading-[24px] ml-4">
                        Chờ duyệt
                      </span>
                    </div>

                    <div className="flex items-center mb-4">
                      <img
                        className="w-[20px] h-[20px] cursor-pointer"
                        src={status.approved ? images['icon_checkbox_green.png'] : images['icon_checkbox_empty.png']}
                        alt="Icon"
                        onClick={() => handleStatusChange('approved')}
                      />
                      <span className="text-[#A2A2A2] font-inter font-normal text-[20px] leading-[24px] ml-4">
                        Đã duyệt
                      </span>
                    </div>

                    <div className="flex items-center">
                      <img
                        className="w-[20px] h-[20px] cursor-pointer"
                        src={status.rejected ? images['icon_checkbox_green.png'] : images['icon_checkbox_empty.png']}
                        alt="Icon"
                        onClick={() => handleStatusChange('rejected')}
                      />
                      <span className="text-[#A2A2A2] font-inter font-normal text-[20px] leading-[24px] ml-4">
                        Bị từ chối
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Confirmation modal */}
              {isConfirmVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <div className="w-[300px] h-[140px] bg-white border-2 border-[#767676] rounded-[25px] p-5 relative flex flex-col items-center justify-center">
                    <h2 className="text-[#525050] font-bold text-lg leading-[29px] mb-4">
                      Xác nhận chuyển trạng thái
                    </h2>
                    <div className="flex gap-4">
                      <button
                        onClick={() => setConfirmVisible(false)}
                        className="bg-gray-300 rounded-lg px-5 py-2"
                      >
                        Quay lại
                      </button>
                      <button
                        onClick={confirmStatusChange}
                        className="bg-[#41CD4A] text-white rounded-lg px-5 py-2"
                      >
                        Xác nhận
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

        <div className="absolute w-[1130px] h-[800px] left-[50px] top-[50px] bg-white rounded-[15px]">
          <div className="absolute w-[300px] h-[35px] left-[20px] top-[20px] bg-[#D9D9D9] rounded-[15px] flex items-center px-2">
            <button className="flex items-center pl-4">
              <input type="text" placeholder="Tìm kiếm lô chờ duyệt" className="flex-1 bg-transparent outline-none text-[#80808A] font-semibold text-xs" />
              <img src={images['icon_search.png']} alt="Search" className="w-[20px] h-[30px] ml-[90px]" />
            </button>
          </div>
          <div className="absolute right-[20px] top-[20px] flex items-center">
            <img src={images['icon_tick.png']} alt="Icon" className="ml-2 mr-2 w-[25px] h-[25px]"/>
            <span className="text-[#A2A2A2] font-normal text-[16px] leading-[18px]">
              Lô hàng
            </span>
          </div>

          <div className="absolute w-[1120px] h-[300px] left-[5px] top-[80px] overflow-auto">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th>
                    <button className="p-2"></button>
                  </th>
                  <th>
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
                    <button className="bg-white border border-[#3498DB] rounded-[10px] px-2 py-0.5">
                      <span className="text-[#3498DB] font-bold text-[12px] leading-[15px] ">Chờ duyệt</span>
                    </button>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="border-t-2 border-gray-400">
                  <td className="p-2 text-center">
                    <button>
                      <img src={images['icon_check_empty.png']} alt="Check Empty" className="w-[20px] h-[20px]" />
                    </button>
                  </td>
                  <td className="p-2 text-center">
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
                    <button className="bg-white border border-[#3498DB] rounded-[10px] px-2 py-0.5">
                      <span className="text-[#3498DB] font-bold text-[12px] leading-[15px]">Chờ duyệt</span>
                    </button>
                  </td>
                  <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">Ghi chú</td>
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