import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import images from '../../images';
import axios from 'axios';
import moment from 'moment'
const Import = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([])
  const [formData, setFormData] = useState({
    NguoiNhan:'',
    TongGia:'',
    NgayNhan:'',
    SoLuongLoHang:'',
    NgaySanXuat:'',
    Notes:'',
  })
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/lohang')
      setItems(response.data)
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu', error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  const [selectedComponent, setSelectedComponent] = useState(null);
  const HandleSubmit = async (e) => {
    e.preventDefault()
    const formattedData = {
      ...formData,
      NgaySanXuat: formData.NgaySanXuat ? new Date(formData.NgaySanXuat).toISOString().split('T')[0] : null,
      NgayNhap: formData.NgayNhan ? new Date(formData.NgayNhan).toISOString().split('T')[0] : null,
    };
    try {
      if (selectedComponent) {
        await axios.put(`http://localhost:5000/api/updatelohang/${selectedComponent.id}`, formattedData)
      } else {
        await axios.post('http://localhost:5000/api/taolohang', formattedData)
      }
      fetchData()
      resetForm()
    } catch(error) {
      console.error('Lỗi', error)
    }
  }

  const resetForm = () => {
    setFormData({
      NguoiNhan:'',
      TongGia:'',
      TenLoHang:'',
      TrangThaiLoHang:'',
      NgayNhan:'',
      SoLuongLoHang:'',
      NgaySanXuat:'',
      Notes:'',
    })
    setSelectedComponent(null)
  }

  const handleEdit = (items) => {
    setSelectedComponent(items)
    setFormData(items)
  }
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="relative w-full h-[1080px] bg-[#EEEEEE]">
      <button className="absolute left-[70px] top-[20px] font-inter font-bold text-base leading-[29px] text-[#7D7D7D]"
        onClick={() => handleNavigate('/dslk')}>Kho linh kiện/</button>
      <button className="absolute left-[180px] top-[20px] font-inter font-bold text-base leading-[29px] text-[#7D7D7D]"
        onClick={() => handleNavigate('/nhapkho')}>Nhập kho</button>

      <button className="absolute w-[170px] h-[40px] left-[1010px] top-[10px] bg-[#CD4141] rounded-lg flex items-center justify-center" onClick={() => handleNavigate('/duyetnhapkho')}>
        <img src={images['icon_tick_white.png']} alt="Nhập kho" className="w-[20px] h-[20px] mr-2" />
        <span className="font-semibold text-white">Duyệt nhập kho</span>
      </button>
    <div> 
      <div className="absolute w-[1130px] h-[570px] left-[50px] top-[60px] bg-white rounded-lg">
        <div className="absolute left-[30px] top-[15px]">
          <div className="w-[200px] h-[20px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            Nhân viên nhập
          </div>
          <input type="text" className="box-border w-[200px] h-[30px] mt-[15px] bg-white border border-[#525050] rounded-[10px] pl-3" value={formData.NguoiNhan} onChange={(e) => setFormData({...formData, NguoiNhan: e.target.value})} />
        </div>

        <div className="absolute left-[260px] top-[15px]">
          <div className="w-[200px] h-[20px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            Trạng thái
          </div>
          <select className="box-border w-[200px] h-[30px] mt-[15px] bg-[#EEEEEE] border border-[#525050] rounded-[10px] pl-2" value={formData.TrangThaiLoHang} onChange={(e) => setFormData({...formData, TrangThaiLoHang: e.target.value})}>
            <option value="pending">Chờ duyệt</option>
            <option value="approved">Đã duyệt</option>
            <option value="rejected">Từ chối</option>
          </select>
        </div>

        <div className="absolute left-[30px] top-[100px]">
          <div className="w-[200px] h-[20px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            Tổng giá trị đơn nhập
          </div>
          <input type="text" placeholder='Tổng giá đơn...' className="box-border w-[200px] h-[30px] mt-[15px] bg-white border border-[#525050] rounded-[10px] pl-2" value={formData.TongGia} onChange={(e) => setFormData({...formData, TongGia: e.target.value})} />
        </div>

        <div className="absolute left-[30px] top-[200px]">
          <div className="w-[200px] h-[25px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            Tên lô hàng
          </div>
          <input type="text" placeholder='Tên lô hàng...' className="box-border w-[200px] h-[30px] mt-[15px] bg-white border border-[#525050] rounded-[10px] pl-2" value={formData.TenLoHang} onChange={(e) => setFormData({...formData, TenLoHang: e.target.value})} />
        </div>

        <div className="absolute left-[260px] top-[100px]">
          <div className="w-[200px] h-[20px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            Ngày nhập
          </div>
          <input type="date" placeholder='Chọn ngày nhập...' className="box-border w-[200px] h-[30px] mt-[15px] bg-white border border-[#525050] rounded-[10px] pl-2 pr-2" value={formData.NgayNhan} onChange={(e) => setFormData({...formData, NgayNhan: moment(e.target.value).format('YYYY-MM-DD')})} />
        </div>

        <div className="absolute left-[30px] top-[185px]">
          <div className="w-[200px] h-[20px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            Số lượng nhập
          </div>
          <input type="number" placeholder='Số lượng...' className="box-border w-[200px] h-[30px] mt-[15px] bg-white border border-[#525050] rounded-[10px] pl-2 pr-1" value={formData.SoLuongLoHang} onChange={(e) => setFormData({...formData, SoLuongLoHang: e.target.value})} />
        </div>

        <div className="absolute left-[260px] top-[185px]">
          <div className="w-[200px] h-[20px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            Ngày sản xuất
          </div>
          <input type="date" placeholder='Chọn ngày sản xuất...' className="box-border w-[200px] h-[30px] mt-[15px] bg-white border border-[#525050] rounded-[10px] pl-2 pr-2" value={formData.NgaySanXuat} onChange={(e) => setFormData({...formData, NgaySanXuat: moment(e.target.value).format('YYYY-MM-DD')})}/>
        </div>

        <div className="absolute left-[30px] top-[270px]">
          <div className="w-[200px] h-[20px] font-inter font-bold text-base leading-[29px] text-[#A09696]">
            Ghi chú
          </div>
          <textarea className="box-border w-[430px] h-[150px] mt-[15px] bg-white border border-[#525050] rounded-[10px] pl-3 pt-2 resize-none" value={formData.Notes} onChange={(e) => setFormData({...formData, Notes: e.target.value})}/>
        </div>

        <button type='submit' className="absolute left-[30px] top-[500px] w-[136px] h-[40px] bg-[#64C860] rounded-[10px] flex items-center justify-center"
          onClick={HandleSubmit}>
          <img src={images['icon_tick_white.png']} alt="Nhập kho" className="w-[20px] h-[20px] mr-2" /> 
          <span className="font-inter font-semibold text-white text-[18px] leading-[22px]">Nhập kho</span>
        </button>

        <button className="absolute left-[190px] top-[500px] w-[232px] h-[40px] bg-[#3498DB] rounded-[10px] flex items-center justify-center"
          onClick={() => handleNavigate('/themlinhkienvaolo')}>
          <img src={images['icon_create_white.png']} alt="Thêm linh kiện vào lô" className="w-[20px] h-[20px] mr-2" />
          <span className="font-inter font-semibold text-white text-[18px] leading-[22px]">Thêm linh kiện vào lô</span>
        </button>


        <div className="absolute w-[615px] h-[520px] left-[490px] top-[25px] bg-[#EEEEEE] rounded-[10px]">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="w-10">
                <button className="p-2 bg-[#EEEEEE] rounded-full">

                </button>
                </th>
                <th className="text-center px-2 py-2 text-xs">Số seri</th>
                <th className="text-center px-2 py-2 text-xs">Tên lô</th>
                <th className="text-center px-2 py-2 text-xs">Ngày nhận</th>
                <th className="text-center px-2 py-2 text-xs">Ngày sản xuất</th>
                <th className="text-center px-2 py-2 text-xs">Số lượng</th>
                <th className="text-center px-2 py-2 text-xs">Tổng giá</th>
                <th className="text-center px-2 py-2 text-xs">Ghi chú</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t-2 border-gray-400">
                <td className="flex items-center justify-center p-2">
                  <button className="w-full h-full flex items-center justify-center">
                    <img src={images['icon_down_arrow_black1.png']} alt="Arrow Down" className="w-[20px] h-[20px]"/>
                  </button>
                </td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">001234</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">Lô 1</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">2024-10-01</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">2024-09-20</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">100</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">$1,000</td>
                <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">Ghi chú</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="relative w-full h-full bg-gray-200">
        <div className="absolute w-[1130px] h-[390px] left-[50px] top-[650px] bg-white rounded-[15px]">
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
            {items.map(lohang => (
              <tr className="border-t-2 border-gray-400" key={lohang.IDLo}>
                <td className="flex items-center justify-center p-2">
                  <button className="w-full h-full flex items-center justify-center" onDoubleClick={() => handleEdit(items)}>
                    <img src={images['icon_down_arrow_black1.png']} alt="Arrow Down" className="w-[20px] h-[20px]" />
                  </button>
                </td>
                
                  <>
                    <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center"></td>
                    <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">{lohang.SerialNumber}</td>
                    <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">{lohang.TenLoHang}</td>
                    <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">{lohang.NgayNhan}</td>
                    <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">{lohang.NgaySanXuat}</td>
                    <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">{lohang.NgayHetHanLo}</td>
                    <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">{lohang.SoLuongLoHang}</td>
                    <td className="p-2 text-xs max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap text-center">{lohang.TongGia}</td>
                    <td className="p-2 flex items-center justify-center">
                      <div className="bg-white border border-[#CAC745] rounded-[10px] px-2 py-0.5">
                        <span className="text-[#CAC745] font-bold text-[12px] leading-[15px] ">{lohang.TrangThaiLoHang}</span>
                      </div>
                    </td>
                  </>

              </tr>
              ))}
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
    </div>
  );
};

export default Import;