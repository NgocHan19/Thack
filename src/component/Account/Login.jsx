import React, { useState } from 'react';
import images from '../../images';
import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:5000/dangnhap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data); // Check the content of the response

      if (response.ok) {
        // Save the information in sessionStorage
        sessionStorage.setItem('accountData', JSON.stringify({
          email: email,
          authToken: data.token,
          userID: data.userID,
          roleID: data.roleID,  // Save the roleID
          roleName: data.roleName, // Save roleName in sessionStorage
        }));
        console.log('RoleName:', data.roleName);

        // Navigate based on roleName
        if (data.roleName === 'Nhân Viên Kho') {
          navigate('/dashboard-nv', { state: { email, userID: data.userID } });
        } else if (data.roleName === 'Qu?n Lý Kho') {
          navigate('/dashboard-ql', { state: { email, userID: data.userID } });
        } else {
          // Default navigation if role is not recognized
          navigate('/');
        }
      } else {
        setErrorMessage(data.message || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full h-[1080px] bg-white">
      <h1 className="absolute left-[154px] top-[65px] text-[#1A73E8] font-bold text-4xl leading-[44px]">
        Chào mừng bạn đã quay trở lại
      </h1>

      <p className="absolute left-[154px] top-[123px] text-[#A2A2A2] font-normal text-xl leading-[34px]">
        Vui lòng đăng nhập để tiếp tục quản lý kho hiệu quả!
      </p>

      <label className="absolute left-[154px] top-[200px] text-[#868585] font-normal text-xl leading-[29px]">Email</label>
      <div className="absolute left-[154px] top-[240px] w-[827px] h-[60px] bg-white border border-[#A3A3A3] rounded-[5px] flex items-center">
        <img src={images['icon_email.png']} alt="Icon" className="w-[30px] h-[30px] ml-[15px]" />
        <input
          type="email"
          placeholder="Nhập email..."
          className="ml-[15px] placeholder-[#A2A2A2] text-lg leading-[24px] outline-none w-full pr-[45px]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <label className="absolute left-[154px] top-[340px] text-[#868585] font-normal text-xl leading-[29px]">Mật khẩu</label>
      <div className="absolute left-[154px] top-[380px] w-[827px] h-[60px] bg-white border border-[#A3A3A3] rounded-[5px] flex items-center">
        <img src={images['icon_pass.png']} alt="Icon" className="w-[30px] h-[30px] ml-[15px]" />
        <input
          type="password"
          placeholder="Nhập mật khẩu..."
          className="ml-[15px] placeholder-[#A2A2A2] text-lg leading-[24px] outline-none w-full pr-[45px]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Show error message if exists */}
      {errorMessage && (
        <p className="absolute left-[154px] top-[450px] text-red-500 font-normal text-lg">
          {errorMessage}
        </p>
      )}

      <div
        className="absolute left-[154px] top-[485px] w-[827px] h-[60px] bg-[#1A73E8] rounded-[5px] flex items-center justify-center"
        onClick={loading ? null : handleLogin}
        style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
      >
        <p className="text-white font-bold text-[24px] leading-[29px]">
          {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
        </p>
      </div>

      {/* Đăng nhập bằng Gmail button */}
      <div className="absolute left-[400px] top-[530px] w-[827px] h-[60px] bg-[#DB4437] rounded-[5px] flex items-center justify-center cursor-pointer transition duration-200 hover:bg-[#c13528]">
        <span className="text-[#FFFFFF] text-[24px] font-bold">Đăng nhập bằng Gmail</span>
      </div>

      <button className="absolute left-[600px] top-[610px] flex items-center">
        <span className="text-[#A2A2A2] text-[20px] font-normal"
          onClick={() => navigate('/dangky')}>Bạn chưa có tài khoản? Đăng ký ngay</span>
      </button>
      
      <div className="absolute left-[500px] top-[650px] w-[630px] border-b border-[#A2A2A2]"></div>

      <div className="absolute left-[600px] top-[660px]">
        <p className="text-[#5E5D5D] text-[20px] font-bold">Bạn gặp khó khăn khi tạo tài khoản?</p>
      </div>

      <div className="absolute left-[560px] top-[690px]">
        <p className="mt-[10px] text-[#A2A2A2] text-[20px] font-normal">Vui lòng gọi tới số 0123456789 (giờ hành chính).</p>
      </div>

    </div>
  );
}

export default Login;