import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import images from '../../images';
import '../custom.css';

function Chinhanh() {
  const [isDropdown1Open, setDropdown1Open] = useState(false);
  const [isDropdown2Open, setDropdown2Open] = useState(false);

  const toggleDropdown1 = () => {
    setDropdown1Open(!isDropdown1Open);
  };

  const toggleDropdown2 = () => {
    setDropdown2Open(!isDropdown2Open);
  };
  
  const [isFormVisible, setIsFormVisible] = useState(false);


 const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleDeleteClick = () => setShowModal(true);
  const confirmDelete = () => {
    setShowModal(false);
    setSuccess(true);
  };
// Thiết lập thời gian để thông báo biến mất sau 3 giây
setTimeout(() => {
  setSuccess(false);
}, 3000);



  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };
  
  return (
    <div className="relative w-full h-[1080px]">
      {/* Menu */}
      <div className="absolute w-[280px] h-full left-0 top-0">
        <div className="absolute w-full h-full bg-gradient-to-r from-[#4B4E55] to-[#62656B] rounded-r-[15px]"></div>
        
        {/* Logo */}
        <div className="absolute w-[180px] h-[60px] left-[30px] top-0">
          <img src={images['logo.png']} alt="Logo" className="w-full h-full object-cover rounded-r-[15px]" />
        </div>
        
        {/* Tìm kiếm */}
        <div className="absolute w-[250px] h-[45px] left-[15px] top-[85px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] flex items-center transition duration-200 hover:bg-[#4B4E55]">
          <img src={images['search.png']} alt="icon_search" className="w-[25px] h-[25px] ml-[15px]" />
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="ml-[15px] w-full h-full bg-transparent text-white font-bold text-[14px] placeholder-[#A2A2A2] focus:outline-none"
          />
        </div>

        {/* Dashboard */}
        <div className="absolute w-[250px] h-[45px] left-[15px] top-[150px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] flex items-center">
          <img src={images['icon_dashboard.png']} alt="icon_dashboard" className="w-[25px] h-[25px] absolute left-[20px] top-[8px]" />
          <button className="absolute left-[55px] top-[8px] text-[#FFFFFF] font-bold text-[17px]">Dashboard</button>
        </div>

        {/* Lô hàng */}
        <div className={`absolute w-[250px] h-[45px] left-[15px] top-[215px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] flex items-center`}>
          <img src={images['icon_shipment.png']} alt="icon_shipment" className="w-[25px] h-[25px] absolute left-[20px] top-[8px]" />
          <button
              className="w-full h-full text-[#FFFFFF] font-bold text-[17px] flex items-center justify-between pl-[55px] pr-[10px]"
               onClick={() => { toggleDropdown1(); navigate('/lohang-ql'); }}
          >
              Lô hàng
          <img
              src={images['icon_down_arrow.png']}
              alt="icon_downarrow"
              className="w-[20px] h-[20px] ml-[-5px]"
          />
          </button>
        </div>

        {/* Các mục con của Lô hàng */}
        {isDropdown1Open && (
          <div className="absolute right-[15px] top-[270px] w-[200px]">
            <div className="w-full h-[45px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] mt-[10px] flex items-center">
              <img src={images['icon_import.png']} alt="icon_import" className="w-[25px] h-[25px] ml-[10px]" />
              <button className="ml-[10px] text-[#FFFFFF] font-bold text-[17px]">Nhập kho</button>
            </div>
            <div className="w-full h-[45px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] mt-[15px] flex items-center">
              <img src={images['icon_export.png']} alt="icon_export" className="w-[25px] h-[25px] ml-[10px]" />
              <button className="ml-[10px] text-[#FFFFFF] font-bold text-[17px]">Xuất kho</button>
            </div>
            <div className="w-full h-[45px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] mt-[15px] flex items-center">
              <img src={images['icon_inventory.png']} alt="icon_inventory" className="w-[25px] h-[25px] ml-[10px]" />
              <button className="ml-[10px] text-[#FFFFFF] font-bold text-[17px]">Kiểm kê</button>
            </div>
            <div className="w-full h-[45px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] mt-[15px] flex items-center">
              <img src={images['icon_component.png']} alt="icon_component" className="w-[25px] h-[25px] ml-[10px]" />
              <button className="ml-[10px] text-[#FFFFFF] font-bold text-[17px]"onClick={() => navigate('/DSLK_QL')}>Linh kiện</button>
            </div>
            <div className="w-full h-[45px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] mt-[15px] flex items-center">
              <img src={images['icon_category.png']} alt="icon_category" className="w-[25px] h-[25px] ml-[10px]" />
              <button className="ml-[10px] text-[#FFFFFF] font-bold text-[17px]"onClick={() => navigate('/Danhmuc_QL')}>Danh mục</button>
            </div>
          </div>
        )}

        {/* Thống kê */}
        <div className={`absolute w-[250px] h-[45px] left-[15px] ${isDropdown1Open ? 'top-[585px]' : 'top-[280px]'} bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] transition-all duration-200`}>
          <img src={images['icon_dashboard.png']} alt="icon_dashboard" className="w-[25px] h-[25px] absolute left-[20px] top-[8px]" />
          <button className="absolute left-[55px] top-[8px] text-[#FFFFFF] font-bold text-[17px]">Thống kê</button>
        </div>
<div>
        {/* Danh mục tổ chức */}
        <div className={`absolute w-[250px] h-[45px] left-[15px] ${isDropdown2Open ? 'top-[650px]' : 'top-[345px]'} bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] flex items-center`}>
          <img src={images['icon_dmtc.png']} alt="icon_dmtc" className="w-[25px] h-[25px] absolute left-[20px] top-[8px]" />
          <button
              className="w-full h-full text-[#FFFFFF] font-bold text-[17px] flex items-center justify-between pl-[55px] pr-[10px]"
              onClick={toggleDropdown2}
          >
              Danh mục tổ chức
          <img
              src={images['icon_down_arrow.png']}
              alt="icon_downarrow"
              className="w-[20px] h-[20px] ml-[-5px]"
          />
          </button>

        </div>
        {/* Các mục con của Danh mục tổ chức */}
        {isDropdown2Open && (
          <div className="absolute right-[15px] w-[200px] top-[700px]">
            <div className="w-full h-[45px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] mt-[10px] flex items-center">
              <img src={images['icon_ncc.png']} alt="icon_ncc" className="w-[25px] h-[25px] ml-[10px]" />
              <button className="ml-[10px] text-[#FFFFFF] font-bold text-[17px]" onClick={() => navigate('/Nhacungcap')}>Nhà cung cấp</button>
            </div>
            <div className="w-full h-[45px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] mt-[15px] flex items-center">
              <img src={images['icon_cn.png']} alt="icon_cn" className="w-[25px] h-[25px] ml-[10px]" />
              <button a ='#' className="ml-[10px] text-[#FFFFFF] font-bold text-[17px]"onClick={() => navigate('/Chinhanh')}>Chi nhánh</button>
            </div>
            <div className="w-full h-[45px] bg-[#5B5E65] border border-[#9F9F9F] rounded-[10px] mt-[15px] flex items-center">
              <img src={images['icon_nv.png']} alt="icon_nv" className="w-[25px] h-[25px] ml-[10px]" />
              <button className="ml-[10px] text-[#FFFFFF] font-bold text-[17px]">Nhân viên</button>
            </div>
          </div>
        )}
        </div>

        

        {/* Account */}
        <div className="absolute w-[280px] h-[80px] left-0 bottom-0 bg-gradient-to-r from-[#4B4E55] to-[#62656B] rounded-tl-[15px] rounded-tr-[15px]">
          <button className="absolute w-[40px] h-[40px] left-[30px] top-[10px]">
            <img src={images['icon_account.png']} alt="Account Avatar" className="w-full h-full" />
          </button>
          <div className="absolute left-[85px] top-[10px] font-inter font-bold text-[18px] text-[#FFFFFF]">Tên Tài Khoản</div>
          <div className="absolute left-[85px] top-[40px] font-inter font-bold text-[10px] text-[#D9D9D9]">email@gmail.com</div>
          <button className="absolute right-[10px] top-[10px] w-[20px] h-[20px]">
            <img src={images['icon_ring.png']} alt="Notification Ring" className="w-full h-full" />
          </button>
        </div>
         {/* Form for Account Information */}
      {isFormVisible && (
        <div className="absolute left-[290px] top-[auto] bottom-[10px] w-[200px] h-[80px] bg-gradient-to-r from-[#4B4E55] to-[#62656B] rounded-[15px] flex flex-col items-center justify-center border-2 border-[#D8D8D8]">
          <button className="w-full h-[30px] bg-gradient-to-r from-[#4B4E55] to-[#62656B] rounded-[5px] text-[#FFFFFF] flex items-center">
            <img src={images['icon_info.png']} alt="icon_infp" className="w-[20px] h-[20px] ml-[10px] mr-[10px]" />
            Thông tin cá nhân
          </button>
          <button className="w-full h-[30px] bg-gradient-to-r from-[#4B4E55] to-[#62656B] rounded-[5px] text-[#FFFFFF] mt-2 flex items-center">
            <img src={images['icon_logout.png']} alt="icon_logout" className="w-[20px] h-[20px] ml-[10px] mr-[10px]" />
            Đăng xuất
          </button>
        </div>
      )}
    </div>
      <div className="w-[1470px] h-[203px] left-[371px] top-[383px] absolute bg-white flex-col justify-start items-start inline-flex">
        <div className="self-stretch bg-[#f4f4f4] border-b border-[#e0e0e0] justify-start items-center inline-flex">
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch text-black text-xs font-semibold font-['Inter']">STT</div>
          </div>
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch text-black text-xs font-semibold font-['Inter']">Tên chi nhánh</div>
          </div>
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch text-black text-xs font-semibold font-['Inter']">Địa chỉ</div>
          </div>
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch text-black text-xs font-semibold font-['Inter']">Tên Quản lý</div>
          </div>
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch text-black text-xs font-semibold font-['Inter']">SL nhân viên</div>
          </div>
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch text-black text-xs font-semibold font-['Inter']">Trạng thái hoạt động</div>
          </div>
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch text-black text-xs font-semibold font-['Inter']">Ghi chú</div>
          </div>
        </div>
        <div className="self-stretch border-b border-[#e0e0e0] justify-start items-center inline-flex">
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch text-black text-xs font-normal font-['Inter']">1</div>
          </div>
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch text-black text-xs font-normal font-['Inter']">ABC</div>
          </div>
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch"></div>
          </div>
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch"></div>
          </div>
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch"></div>
          </div>
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch"></div>
          </div>
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch"></div>
          </div>
        </div>
        <div className="self-stretch border-b border-[#e0e0e0] justify-start items-center inline-flex">
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch text-black text-xs font-normal font-['Inter']">2</div>
          </div>
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch"></div>
          </div>
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch"></div>
          </div>
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch"></div>
          </div>
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[# e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch"></div>
          </div>
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch"></div>
          </div>
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch"></div>
          </div>
        </div>
        <div className="self-stretch border-b border-[#e0e0e0] justify-start items-center inline-flex">
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch text-black text-xs font-normal font-['Inter']">3</div>
          </div>
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch"></div>
          </div>
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch"></div>
          </div>
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch"></div>
          </div>
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch"></div>
          </div>
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch"></div>
          </div>
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch"></div>
          </div>
        </div>
        <div className="self-stretch border-b border-[#e0e0e0] justify-start items-center inline-flex">
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch text-black text-xs font-normal font-['Inter']">4</div>
          </div>
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch"></div>
          </div>
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch"></div>
          </div>
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch"></div>
          </div>
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch"></div>
          </div>
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch"></div>
          </div>
          <div className="grow shrink basis-0 self-stretch p-3 border-r border-[#e0e0e0] flex-col justify-center items-start inline-flex">
            <div className="self-stretch"></div>
          </div>
        </div>
      </div> 
      <div  className="w-[150px] h-[60px] left-[1462px] top-[124px] absolute bg-[#f39c12] rounded-[15px]" />
{/* Trigger Delete Button */}
<div className="w-[50px] h-[60px] absolute left-[1791px] top-[124px] cursor-pointer" onClick={handleDeleteClick}>
        <div className="w-full h-full bg-[#cd4141] rounded-[15px] flex items-center justify-center">
          <img className="w-[25px] h-[25px]" src={images['Delete.png']} alt="Delete Icon" />
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
          <div className="max-w-[300px] w-full h-auto bg-white rounded-[15px] border-2 border-[#767676] flex flex-col items-center justify-center p-4">
            <div className="text-[#525050] text-xl font-bold">Xóa chi nhánh</div>
            <div className="text-[#a09696] text-lg font-bold mt-2 text-center">
              Bạn chắc chắn muốn xóa chi nhánh này?
            </div>
            <div className="flex justify-between w-full mt-4">
              {/* Confirm Button */}
              <button onClick={confirmDelete} className="w-[100px] h-[40px] bg-[#cd4141] rounded-[10px] flex items-center justify-center mx-2">
                <span className="text-white text-lg font-bold">Xóa</span>
              </button>

              {/* Cancel Button */}
              <button onClick={() => setShowModal(false)} className="w-[100px] h-[40px] bg-[#d9d9d9] rounded-[10px] flex items-center justify-center mx-2">
                <span className="text-[#525050] text-lg font-bold">Quay lại</span>
              </button>
            </div>
          </div>
        </div>
      )}

       {/* Success Message */}
       {success && (
        <div className="absolute top-[200px] left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-lg font-bold rounded-md p-3">
          Xóa thành công!
        </div>
      )}
      
      <div className="w-[135px] h-[60px] left-[1634px] top-[124px] absolute" >
        <div className="w-[135px] h-[60px] left-0 top-0 absolute bg-[#3498db] rounded-[15px]" />
        <div className="w-[82.39px] h-[21.29px] left-[47px] top-[19px] absolute text-white text-lg font-semibold font-['Inter']"onClick={() => navigate('/chinhanh-tao')}>Tạo mới</div>
        <img className="w-[25px] h-[25px] left-[14px] top-[17px] absolute" src={images['Plus.png']} />
      </div>
      <div className="w-[91px] h-[21px] left-[1509px] top-[143px] absolute text-white text-lg font-semibold font-['Inter']"onClick={() => navigate('/chinhanh-sua')}>Chỉnh sửa</div>
      <img src={images['Sua.png']} className="w-[25px] h-[25px] left-[1477px] top-[141px] absolute"  />
      <img className="w-[50px] h-[50px] left-[378px] top-[110px] absolute" src={images['icon_ttcn.png']} />

      <div className="left-[344px] top-[36px] absolute text-[#7d7d7d] text-2xl font-bold font-['Inter']">Quản lý chi nhánh</div>
  <div className="left-[438px] top-[110px] absolute text-black text-[32px] font-bold font-['Inter']">Thông Tin Chi Nhánh</div>
  <div class="left-[400px] top-[206px] absolute text-[#3498db] text-base font-bold font-['Inter']">Tổng số chi nhánh:</div>
  <div className="absolute w-[279px] h-[50px] left-[364px] top-[299px]">
  <div className="w-[279px] h-[50px] left-0 top-0 absolute bg-[#d9d9d9]/60 rounded-[20px] flex items-center transition duration-200 hover:bg-[#c0c0c0]">
    <img src={images['icon_search.png']} alt="icon_search" className="w-[25px] h-[25px] ml-[15px]" />
    <input
      type="text"
      placeholder="Tìm kiếm..."
      className="ml-[15px] w-full h-full bg-transparent text-[#7f8089] font-semibold text-[14px] placeholder-[#A2A2A2] focus:outline-none"
    />
  </div>
</div>
      <div className="w-[119px] h-5 left-[1710px] top-[981px] absolute">
        <img className="w-5 h-5 left-[99px] top-[20px] absolute origin-top-left -rotate-90" src={images['left.png']} />
        <img className="w-5 h-5 left-[94px] top-0 absolute origin-top-left rotate-90" src={images['right.png']} />
        <div className="left-0 top-[2px] absolute text-[#b1b1b1] text-xs font-bold font-['Inter']">1/ 10 trang</div>
      </div>
    </div>
  );
}
export default Chinhanh;