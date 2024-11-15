import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import images from '../../images';

function Chinhanh() {
  const [isDropdown1Open, setDropdown1Open] = useState(false);
  const [isDropdown2Open, setDropdown2Open] = useState(false); 
   const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [isOrganizationDropdownOpen, setIsOrganizationDropdownOpen] = useState(false);
  const toggleDropdown1 = () => {
    setDropdown1Open(!isDropdown1Open);
  };
  const handleNavigate = (path) => {
    navigate(path);
};
const toggleDropdown = () => {
  setDropdownOpen(!isDropdownOpen);
};
  const toggleDropdown2 = () => {
    setDropdown2Open(!isDropdown2Open);
  };
  const toggleOrganizationDropdown = () => {
    setIsOrganizationDropdownOpen(!isOrganizationDropdownOpen);
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
    <div className="relative w-full h-[1080px] bg-[#F4F7FA]">
        <div className="w-[1150px] h-[170px] left-[50px] top-[86px] absolute bg-white rounded-[15px] shadow-lg" />
        <div className="w-[1150px] h-[753px] left-[50px] top-[276px] absolute bg-white rounded-[15px] shadow-lg" />
      <div className="w-[1150px] h-[203px] left-[50px] top-[383px] absolute bg-white flex-col justify-start items-start inline-flex ">
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
{/* Trigger Delete Button */}
<div className="w-[40px] h-[40px] absolute left-[1110px] top-[124px] cursor-pointer" onClick={handleDeleteClick}>
        <div className="w-full h-full bg-[#cd4141] rounded-[15px] flex items-center justify-center">
          <img className="w-[15px] h-[15px]" src={images['Delete.png']} alt="Delete Icon" />
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
          <div className="max-w-[300px] w-full h-auto bg-white rounded-[15px] border-2 border-[#767676] flex flex-col items-center justify-center p-4">
            <div className="text-[#525050] text-2xl font-bold">Xóa chi nhánh</div>
            <div className="text-[#a09696] text-xl font-bold bg-[#FFFFFF] mt-2 text-center">
              Bạn chắc chắn muốn xóa chi nhánh này?
            </div>
            <div className="flex justify-between w-full mt-4">
              {/* Confirm Button */}
              <button onClick={confirmDelete} className="w-[100px] h-[40px] bg-[#cd4141] rounded-[10px] flex items-center justify-center mx-2">
                <span className="text-white text-l font-bold">Xóa</span>
              </button>

              {/* Cancel Button */}
              <button onClick={() => setShowModal(false)} className="w-[100px] h-[40px] bg-[#d9d9d9] rounded-[10px] flex items-center justify-center mx-2">
                <span className="text-[#525050] text-l font-bold">Quay lại</span>
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
            <div  className="w-[135px] h-[40px] left-[950px] top-[124px] absolute bg-[#f39c12] rounded-[15px]" />

      <div className="w-[135px] h-[60px] left-[800px] top-[124px] absolute" >
        <div className="w-[120px] h-[40px] left-0 top-0 absolute bg-[#3498db] rounded-[15px]" />
        <div className="w-[50px] h-[15px] left-[47px] top-[15px] absolute text-white text-xs font-semibold font-['Inter']"onClick={() => navigate('/chinhanh-tao')}>Tạo mới</div>
        <img className="w-[15px] h-[15px] left-[20px] top-[15px] absolute" src={images['Plus.png']} />
      </div>
      <div className="w-[50px] h-[15px] left-[1000px] top-[140px] absolute text-white text-xs font-semibold font-['Inter']"onClick={() => navigate('/chinhanh-sua')}>Chỉnhsửa</div>
      <img src={images['Sua.png']} className="w-[15px] h-[15px] left-[970px] top-[140px] absolute"  />

      <img className="w-[50px] h-[50px] left-[90px] top-[113px] absolute" src={images['icon_ttcn.png']} />

      <div className="left-[50px] top-[37px] absolute font-inter font-bold text-base leading-[29px] text-[#7D7D7D]" >Quản lí chi nhánh</div>
      <div className="left-[150px] top-[118px] absolute text-[24px] font-bold text-black">Thông Tin Chi nhánh</div>
      <div class="left-[120px] top-[206px] absolute  text-base text-[#3498DB]">Tổng số chi nhánh:</div>
  <div className="absolute w-[279px] h-[50px] left-[70px] top-[299px]">
  <div className="absolute w-[260px] h-[40px] left-[20px] top-[20px] bg-[#D9D9D9] rounded-[15px] flex items-center px-2">
                    <button className="flex items-center pl-4">
                        <input type="text" placeholder="Tìm kiếm..." className="flex-1 bg-transparent outline-none text-[#80808A] font-semibold text-sm" />
                        <img src={images['icon_search.png']} alt="Search" className="w-[25px] h-[38px] ml-4" />
                    </button>
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
export default Chinhanh;