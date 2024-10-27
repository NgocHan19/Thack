import React from 'react';

const Staff_Delete = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-[350px] h-[150px] bg-white border-2 border-gray-600 rounded-[25px] shadow-lg flex flex-col items-center justify-center">
        <h2 className="text-[22px] font-bold text-[#525050] mb-2">Xóa nhân viên</h2>
        <p className="text-[14px] font-bold text-[#A09696] mb-4">
          Bạn chắc chắn muốn xóa nhân viên này ?
        </p>
        <div className="flex justify-center w-full px-2 space-x-6">
          <button onClick={onClose} className="w-[120px] h-[40px] bg-[#D9D9D9] rounded-[10px] text-white font-bold text-[18px]">
            Quay lại
          </button>
          <button className="w-[100px] h-[40px] bg-[#CD4141] rounded-[10px] text-white font-bold text-[18px]">
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
};

export default Staff_Delete;