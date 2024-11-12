import { useNavigate } from 'react-router-dom';
import React from 'react';
import Slider from 'react-slick';
import images from '../../images';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const navigate = useNavigate(); // Khai báo navigate

  const settings = {
    dots: true,
    infinite: true, // lặp lại slide
    speed: 500, // thời gian chuyển đổi giữa slide
    slidesToShow: 1, // số lượng hiện cùng lúc
    slidesToScroll: 1, // cuộn 1 lần
    arrows: true, 
  };

  const imageList = [
    images['qc.png'],
    images['qc.png'],
    images['qc.png'],
  ];

  return (
    <div className="relative w-full h-[1300px] bg-[#00002E]">
      <div className="absolute w-full flex items-center justify-between p-5">
        <img src={images['logo1.png']} alt="Logo" className="w-[200px] h-[70px]" />
        <button
          onClick={() => navigate('/dangnhap')} className="flex items-center justify-center w-[144px] h-[43px] bg-white border-2 border-[#9FC1ED] rounded-[10px] mr-[20px]"
        >
          <span className="text-[20px] font-bold text-black/80">Đăng nhập</span>
        </button>
      </div>

      <div className="absolute left-[70px] top-[130px] text-white font-bold text-[28px]">
        Giới thiệu
      </div>
      <div className="absolute left-[90px] top-[180px] text-white text-[18px] leading-[30px] max-w-[900px]">
        Chào mừng bạn đến với hệ thống quản lý kho linh kiện điện tử trực tuyến. Trang web này cung cấp một giải pháp toàn diện để quản lý và theo dõi hàng tồn kho, đơn hàng và các hoạt động liên quan đến linh kiện điện tử.
      </div>

      <div className="absolute left-[40px] top-[270px] w-[900px] h-[220px] bg-[#00002E] border-4 border-[#938B8B] rounded-[20px]">
        <div className="absolute left-[80px] top-[15px] text-white font-bold text-[22px]">
          Mục đích
        </div>
        <div className="absolute left-[390px] top-[15px] text-white font-bold text-[24px]">
          Lợi ích
        </div>
        <div className="absolute left-[680px] top-[15px] text-white font-bold text-[24px]">
          Đối tượng
        </div>
        <div className="absolute left-[40px] top-[50px] text-white text-[18px] leading-[30px] max-w-[220px]">
          Hệ thống giúp quản lý hiệu quả kho linh kiện điện tử. Cung cấp thông tin chi tiết về số lượng, tình trạng, lịch sử nhập xuất kho.
        </div>
        <div className="absolute left-[350px] top-[50px] text-white text-[18px] leading-[30px] max-w-[220px]">
          Tăng năng suất, giảm thiểu sai sót, kiểm soát tốt nguồn hàng. Hỗ trợ ra quyết định chính xác và kịp thời.
        </div>
        <div className="absolute left-[650px] top-[50px] text-white text-[18px] leading-[30px] max-w-[220px]">
          Phù hợp với các doanh nghiệp, cửa hàng kinh doanh linh kiện điện tử, nhà kho, trung tâm phân phối.
        </div>
      </div>

      <div className="absolute right-[40px] top-[180px] w-[400px] h-[600px]">
        <Slider {...settings}>
          {imageList.map((imgSrc, index) => (
            <div key={index}>
              <img src={imgSrc} alt={`Slide ${index + 1}`} className="w-full h-[600px] object-cover rounded-lg" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="absolute left-[65px] top-[530px] text-white font-bold text-[28px]">
        Chức năng quản lý kho linh kiện điện tử
      </div>
      <div className="absolute left-[100px] top-[600px] w-[970px] h-[440px] bg-[#00002E]">
        <div className="flex space-x-10">
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-4">
              <img src={images['icon_1.png']} alt="icon_1" className="w-[25px] h-[25px]" />
              <span className="text-white font-bold text-[20px]">Quản lý hàng hóa</span>
            </div>
            <div className="text-white text-[20px] leading-[35px] max-w-[300px] ml-[40px]">
              Theo dõi thông tin chi tiết về mỗi linh kiện, bao gồm mã sản phẩm, tên, nhà sản xuất, số lượng, đơn vị tính, giá thành.
            </div>
          </div>

          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-4 ml-[150px]">
              <img src={images['icon_2.png']} alt="icon_2" className="w-[25px] h-[25px]" />
              <span className="text-white font-bold text-[24px]">Quản lý nhập xuất kho</span>
            </div>
            <div className="text-white text-[20px] leading-[35px] max-w-[300px] ml-[190px]">
              Ghi nhận thông tin về các hoạt động nhập hàng, xuất hàng, chuyển kho, trả hàng.
            </div>
          </div>
        </div>

        <div className="flex space-x-10 mt-10">
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-4">
              <img src={images['icon_3.png']} alt="icon_3" className="w-[25px] h-[25px]" />
              <span className="text-white font-bold text-[20px]">Thống kê</span>
            </div>
            <div className="text-white text-[20px] leading-[35px] max-w-[300px] ml-[40px]">
              Cung cấp các thống kê chi tiết về tình hình tồn kho, thống kê hàng tháng.
            </div>
          </div>

          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-4 ml-[150px]">
              <img src={images['icon_4.png']} alt="icon_4" className="w-[25px] h-[25px]" />
              <span className="text-white font-bold text-[24px]">Phân quyền</span>
            </div>
            <div className="text-white text-[20px] leading-[35px] max-w-[300px] ml-[190px]">
              Cấp quyền truy cập và thao tác cho từng người dùng, đảm bảo an ninh và bảo mật thông tin.
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-[65px] top-[1000px] text-white font-bold text-[36px]">
        Thông tin liên hệ
      </div>
      <div className="absolute left-[96px] top-[1080px] text-white font-bold text-[16px]">
        Số điện thoại: 0123456789 (giờ hành chính)
      </div>
      <div className="absolute left-[94px] top-[1120px] text-white font-bold text-[16px]">
        Email hỗ trợ: thack@gmail.com
      </div>
      <div className="absolute left-[95px] top-[1160px] text-white font-bold text-[16px]">
        Địa chỉ trụ sở:
      </div>
      <div className="flex items-center space-x-4 absolute left-[94px] top-[1220px]">
        <img src={images['icon_fb.png']} alt="Icon 5" className="w-[40px] h-[40px]" />
        <img src={images['icon_tiktok.png']} alt="Icon 6" className="w-[40px] h-[40px]" />
        <img src={images['icon_insta.png']} alt="Icon 7" className="w-[40px] h-[40px]" />
        <img src={images['icon_ytb.png']} alt="Icon 7" className="w-[40px] h-[40px]" />
      </div>
    </div>
  );
};

export default HomePage;