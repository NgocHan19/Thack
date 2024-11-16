import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import images from '../../images';
import axios from 'axios'

const Import_New = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleIconClick = () => {
      setIsChecked((prevState) => !prevState);
      if (!isChecked) {
        navigate('/nhapkholocu');
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
        onClick={() => handleNavigate('/nhapkhomoi')}>Nhập kho</button>

      <button className="absolute w-[170px] h-[30px] left-[1010px] top-[15px] bg-[#CD4141] rounded-lg flex items-center justify-center" onClick={() => handleNavigate('/duyetnhapkho')}>
        <img src={images['icon_tick_white.png']} alt="Nhập kho" className="w-[20px] h-[20px] mr-2" />
        <span className="font-semibold text-base text-white">Duyệt nhập kho</span>
      </button>
    <div> 
      <div className="absolute w-[1130px] h-[600px] left-[50px] top-[60px] bg-white rounded-lg shadow-lg">
        <div className='absolute w-[800px] h-[40px]'>
          <div className="absolute left-[20px] top-[10px] w-[283px] h-[31px] text-xl leading-[31px] font-bold text-black">
            Thông tin nhập lô hàng
          </div>
          <div className="absolute left-[970px] top-[15px] flex items-center space-x-[10px]">
            <img
                className="w-[15px] h-[15px]"
                src={images['icon_checkbox_green.png']}
                alt="Icon"
              />
            <div className="w-[150px] h-[18px] text-sm leading-[18px] font-normal text-[#A2A2A2]">
              Nhập lô hàng mới
            </div>
          </div>
          <div className="absolute left-[790px] top-[15px] flex items-center">
            <button
              className="flex items-center" 
              onClick={handleIconClick}
            >
              <img
                className="w-[15px] h-[15px] mr-[10px]"
                src={isChecked ? images['icon_checkbox_green.png'] : images['icon_checkbox_empty.png']}
                alt="Icon"
              />
              <div className="w-[150px] h-[18px] text-sm leading-[18px] font-normal text-[#A2A2A2]">
                Nhập lại lô trong kho
              </div>
            </button>
          </div>
        </div>
      <div>
        <div className="absolute left-[30px] top-[60px]">
          <div className="w-[200px] h-[20px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            Nhân viên nhập
          </div>
          <input type="text" className="box-border w-[300px] h-[30px] mt-[15px] bg-white border border-[#525050] rounded-[10px] pl-3" />
        </div>

        <div className="absolute left-[450px] top-[60px]">
          <div className="w-[200px] h-[20px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            Tên lô
          </div>
          <input type="text" placeholder='Nhập tên lô...' className="box-border w-[300px] h-[30px] mt-[15px] bg-white border border-[#525050] rounded-[10px] pl-2 pr-2" />
        </div>

        <div className="absolute left-[850px] top-[60px]">
          <div className="w-[200px] h-[20px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            Trạng thái
          </div>
          <input type="text" readOnly className="box-border w-[200px] h-[30px] mt-[15px] bg-[#EEEEEE] border border-[#525050] rounded-[10px] pl-2" />
          <p className="absolute left-[20px] top-[40px] font-inter font-normal text-black text-[16px] leading-[19px]">Chờ duyệt</p>
          <button className="absolute left-[175px] top-[18px] w-full h-full">
            <img src={images['icon_down_arrow_black.png']} alt="Chờ duyệt" className="w-[20px] h-[20px]" />
          </button>  
        </div>

        <div className="absolute left-[30px] top-[160px]">
          <div className="w-[200px] h-[20px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            Ngày nhập
          </div>
          <input type="date" placeholder='Chọn ngày nhập...' className="box-border w-[300px] h-[30px] mt-[15px] bg-white border border-[#525050] rounded-[10px] pl-2 pr-2" />
        </div>

        <div className="absolute left-[450px] top-[160px]">
          <div className="w-[200px] h-[20px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            Số seri
          </div>
          <input type="number" placeholder='Số seri...' className="box-border w-[300px] h-[30px] mt-[15px] bg-white border border-[#525050] rounded-[10px] pl-2 pr-1" />
        </div>

        <div className="absolute left-[850px] top-[160px]">
          <div className="w-[200px] h-[20px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            Số lượng nhập
          </div>
          <input type="number" placeholder='Số lượng...' className="box-border w-[200px] h-[30px] mt-[15px] bg-white border border-[#525050] rounded-[10px] pl-2 pr-1" />
        </div>

        <div className="absolute left-[30px] top-[260px]">
          <div className="w-[200px] h-[20px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            Tổng giá trị đơn nhập
          </div>
          <input type="text" placeholder='Tổng giá đơn...' className="box-border w-[300px] h-[30px] mt-[15px] bg-white border border-[#525050] rounded-[10px] pl-2" />
        </div>

        <div className="absolute left-[450px] top-[260px]">
          <div className="w-[200px] h-[20px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            Ngày sản xuất
          </div>
          <input type="date" placeholder='Chọn ngày sản xuất...' className="box-border w-[300px] h-[30px] mt-[15px] bg-white border border-[#525050] rounded-[10px] pl-2 pr-2" />
        </div>

        <div className="absolute left-[30px] top-[360px]">
          <div className="w-[200px] h-[20px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            Ghi chú
          </div>
          <textarea className="box-border w-[430px] h-[80px] mt-[15px] bg-white border border-[#525050] rounded-[10px] pl-3 pt-2 resize-none"/>
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

export default Import_New;