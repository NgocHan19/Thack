đăng ký
import React, { useState } from 'react';
import images from '../../images';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [hoTen, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/;
    return passwordRegex.test(password);
  };

  const handleRegister = async () => {
    setErrorMessage('');
  
    // Kiểm tra thông tin nhập vào
    if (!hoTen) {
      setErrorMessage('Bạn phải nhập họ tên!');
      return;
    }
  
    if (!isValidEmail(email)) {
      setErrorMessage('Email không đúng định dạng!');
      return;
    }
  
    if (!isValidPassword(password)) {
      setErrorMessage('Mật khẩu phải từ 6 đến 12 ký tự và bao gồm chữ cái, số, và ký tự đặc biệt!');
      return;
    }
  
    if (password !== confirmPassword) {
      setErrorMessage('Mật khẩu và xác nhận mật khẩu không khớp!');
      return;
    }
  
    if (!isChecked) {
      setErrorMessage('Bạn phải đồng ý với điều khoản sử dụng!');
      return;
    }
  
    try {
      // Gửi yêu cầu đăng ký
      const response = await fetch('http://localhost:5000/dangky', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ hoTen, email, password }), // Gửi đúng dữ liệu vào backend
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert(result.message);
        navigate('/xacthuctaikhoan', { state: { email } }); // Điều hướng đến trang OTP
      } else {
        setErrorMessage(result.message || 'Đã có lỗi xảy ra.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Đã có lỗi xảy ra. Vui lòng thử lại.');
    }
  };

  return (
    <div className="relative w-full h-[1080px] bg-white">
      <h1 className="absolute left-[154px] top-[65px] text-[#1A73E8] font-bold text-4xl leading-[44px]">
        Chào mừng bạn đến với JobPulse
      </h1>
      <p className="absolute left-[154px] top-[123px] text-[#A2A2A2] font-normal text-xl leading-[34px]">
        Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng
      </p>

      {/* Họ và tên */}
      <label htmlFor="fullName" className="absolute left-[154px] top-[200px] text-[#868585] font-normal text-2xl leading-[29px]">
        Họ và tên
      </label>
      <div className="absolute left-[154px] top-[240px] w-[827px] h-[60px] bg-white border border-[#A3A3A3] rounded-[5px] flex items-center">
        <img src={images['icon_account.png']} alt="Icon" className="w-[35px] h-[35px] ml-[15px]" />
        <input
          id="fullName"
          type="text"
          placeholder="Nhập họ tên..."
          className="ml-[15px] placeholder-[#A2A2A2] text-[20px] leading-[24px] outline-none w-full pr-[45px]"
          value={hoTen}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>

      {/* Email */}
      <label htmlFor="email" className="absolute left-[154px] top-[340px] text-[#868585] font-normal text-2xl leading-[29px]">
        Email
      </label>
      <div className="absolute left-[154px] top-[380px] w-[827px] h-[60px] bg-white border border-[#A3A3A3] rounded-[5px] flex items-center">
        <img src={images['icon_email.png']} alt="Icon" className="w-[30px] h-[30px] ml-[15px]" />
        <input
          id="email"
          type="email"
          placeholder="Nhập email..."
          className="ml-[15px] placeholder-[#A2A2A2] text-[20px] leading-[24px] outline-none w-full pr-[45px]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Mật khẩu */}
      <label htmlFor="password" className="absolute left-[154px] top-[480px] text-[#868585] font-normal text-2xl leading-[29px]">
        Mật khẩu
      </label>
      <div className="absolute left-[154px] top-[520px] w-[827px] h-[60px] bg-white border border-[#A3A3A3] rounded-[5px] flex items-center">
        <img src={images['icon_pass.png']} alt="Icon" className="w-[30px] h-[30px] ml-[15px]" />
        <input
          id="password"
          type="password"
          placeholder="Nhập mật khẩu..."
          className="ml-[15px] placeholder-[#A2A2A2] text-lg leading-[24px] outline-none w-full pr-[45px]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Xác nhận mật khẩu */}
      <label htmlFor="confirmPassword" className="absolute left-[154px] top-[620px] text-[#868585] font-normal text-2xl leading-[29px]">
        Nhập lại mật khẩu
      </label>
      <div className="absolute left-[154px] top-[660px] w-[827px] h-[60px] bg-white border border-[#A3A3A3] rounded-[5px] flex items-center">
        <img src={images['icon_pass.png']} alt="Icon" className="w-[30px] h-[30px] ml-[15px]" />
        <input
          id="confirmPassword"
          type="password"
          placeholder="Nhập lại mật khẩu..."
          className="ml-[15px] placeholder-[#A2A2A2] text-lg leading-[24px] outline-none w-full pr-[45px]"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      {/* Điều khoản */}
      <div className="absolute left-[154px] top-[760px] flex items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="w-[24px] h-[24px] mr-[10px]"
        />
        <span className="text-[#868585] text-lg leading-[24px]">Tôi đã đọc và đồng ý với Điều khoản dịch vụ và Chính sách bảo mật của Thack</span>
      </div>

      {/* Nút đăng ký */}
      <button
        className="absolute left-[154px] top-[820px] w-[827px] h-[60px] bg-[#1A73E8] text-white text-[24px] font-bold leading-[29px] rounded-[5px]"
        onClick={handleRegister}
      >
        Đăng ký
      </button>
      {errorMessage && <div className="absolute left-[154px] top-[935px] text-red-800 text-xl">{errorMessage}</div>}

      {/* Đăng nhập */}
      <button className="absolute left-[398px] top-[900px] text-[#A2A2A2] font-normal text-[20px] leading-[24px]" 
        onClick={() => navigate('/dangnhap')} >Bạn đã có tài khoản? Đăng nhập ngay</button>
      <p className="absolute left-[350px] top-[1000px] text-[#A2A2A2] font-normal text-[20px] leading-[24px]">
        Bạn sẽ được chuyển tới trang xác nhận OTP sau khi đăng ký thành công
      </p>
    </div>
  );
};

export default Register;