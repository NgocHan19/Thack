import React from 'react';
import { useNavigate } from 'react-router-dom';
import images from '../../images';

const Add_Components = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="relative w-full h-[1080px] bg-[#F4F7FA]">
      <button className="absolute left-[50px] top-[10px] font-inter font-bold text-sm leading-[29px] text-[#7D7D7D]"
        onClick={() => handleNavigate('/dslk')}>Kho linh kiện /</button>
      <button className="absolute left-[150px] top-[10px] font-inter font-bold text-sm leading-[29px] text-[#7D7D7D]"
        onClick={() => handleNavigate('/nhapkhomoi')}>Nhập kho /</button>
      <button className="absolute left-[230px] top-[10px] font-inter font-bold text-sm leading-[29px] text-[#7D7D7D]"
        onClick={() => handleNavigate('/themlinhkienvaolo')}>Thêm linh kiện</button>
    <div> 
      <div className="absolute w-[1130px] h-[600px] left-[50px] top-[50px] bg-white rounded-lg shadow-lg">
        <div className='absolute w-[800px] h-[40px]'>
          <div className="absolute left-[20px] top-[10px] w-[283px] h-[31px] text-xl leading-[31px] font-bold text-black">
            Thêm linh kiện vào lô hàng
          </div>
        </div>

        <div className="absolute left-[30px] top-[60px]">
          <div className="w-[200px] h-[20px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            Số hiệu linh kiện
          </div>
          <input type="text" placeholder='Nhập số hiệu linh kiện...' className="box-border w-[300px] h-[30px] mt-[15px] bg-white border border-[#525050] rounded-[10px] px-3" />
        </div>

        <div className="absolute left-[400px] top-[60px]">
          <div className="w-[200px] h-[20px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            Số seri
          </div>
          <input type="text" placeholder='Nhập số seri...' className="box-border w-[300px] h-[30px] mt-[15px] bg-white border border-[#525050] rounded-[10px] px-3" />
        </div>

        <div className="absolute left-[770px] top-[60px]">
          <div className="w-[200px] h-[20px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            Ngày sản xuất
          </div>
          <input type="date" placeholder='Nhập ngày sản xuất...' className="box-border w-[300px] h-[30px] mt-[15px] bg-white border border-[#525050] rounded-[10px] px-3" />
        </div>

        <div className="absolute left-[30px] top-[160px]">
          <div className="w-[200px] h-[20px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            Tên linh kiện
          </div>
          <input type="text" placeholder='Nhập tên linh kiện...' className="box-border w-[300px] h-[30px] mt-[15px] bg-white border border-[#525050] rounded-[10px] px-3" />
        </div>

        <div className="absolute left-[400px] top-[160px]">
          <div className="w-[200px] h-[20px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            UOM
          </div>
          <input type="text" placeholder='Nhập đơn vị...' className="box-border w-[300px] h-[30px] mt-[15px] bg-white border border-[#525050] rounded-[10px] px-3" />
        </div>

        <div className="absolute left-[770px] top-[160px]">
          <div className="w-[200px] h-[20px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            Thời gian sử dụng
          </div>
          <input type="date" placeholder='Chọn ngày nhập...' className="box-border w-[300px] h-[30px] mt-[15px] bg-white border border-[#525050] rounded-[10px] px-3" />
        </div>

        <div className="absolute left-[30px] top-[260px]">
          <div className="w-[200px] h-[20px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            Số lượng
          </div>
          <input type="number" placeholder='Số lượng...' className="box-border w-[300px] h-[30px] mt-[15px] bg-white border border-[#525050] rounded-[10px] px-3" />
        </div>

        <div className="absolute left-[400px] top-[260px]">
          <div className="w-[200px] h-[20px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            Giá
          </div>
          <input type="text" placeholder='Nhập giá...' className="box-border w-[300px] h-[30px] mt-[15px] bg-white border border-[#525050] rounded-[10px] px-3" />
        </div>

        <div className="absolute left-[770px] top-[260px]">
          <div className="w-[200px] h-[20px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            Ngày hết hạn
          </div>
          <input type="date" placeholder='Nhập giá...' className="box-border w-[300px] h-[30px] mt-[15px] bg-white border border-[#525050] rounded-[10px] px-3" />
        </div>

        <div className="absolute left-[30px] top-[360px]">
          <div className="w-[200px] h-[20px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            Các biến thể
          </div>
          <textarea className="box-border w-[450px] h-[100px] mt-[15px] bg-white border border-[#525050] rounded-[10px] pl-3 pt-2 resize-none"/>
        </div>

        <div className="absolute left-[620px] top-[360px]">
          <div className="w-[200px] h-[20px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            Mô tả
          </div>
          <textarea className="box-border w-[450px] h-[100px] mt-[15px] bg-white border border-[#525050] rounded-[10px] pl-3 pt-2 resize-none"/>
        </div>

        <button className="absolute right-[20px] bottom-[20px] w-[170px] h-[35px] bg-[#64C860] rounded-[10px] flex items-center justify-center">
          <img src={images['icon_tick_white.png']} alt="Nhập kho" className="w-[20px] h-[20px] mr-2" /> 
          <span className="font-inter font-semibold text-white text-base leading-[22px]">Thêm linh kiện</span>
        </button>
        <button className="absolute right-[210px] bottom-[20px] w-[100px] h-[35px] bg-[#3498DB] rounded-[10px] flex items-center justify-center"
          onClick={() => handleNavigate('/nhapkhomoi')}>
          <span className="font-inter font-semibold text-white text-base leading-[22px]">Quay lại</span>
        </button>
      </div>
      </div>
    </div>
  );
};

export default Add_Components;