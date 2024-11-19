import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart, PointElement, LineElement, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Đăng ký các phần mở rộng cần thiết cho Chart.js
Chart.register(
  PointElement,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const ChartComparison = () => {
  // Dữ liệu biểu đồ giám sát hiệu suất hệ thống (Nhập, Xuất, Tồn kho)
  const systemPerformanceData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Nhập',
        data: [100, 150, 120, 180, 200, 170, 140],
        backgroundColor: '#4CAF50',
        borderColor: '#388E3C',
        borderWidth: 1,
        barThickness: 20,
      },
      {
        label: 'Xuất',
        data: [80, 130, 110, 160, 190, 160, 130],
        backgroundColor: '#FF7043',
        borderColor: '#F4511E',
        borderWidth: 1,
        barThickness: 20,
      },
      {
        label: 'Tồn kho',
        data: [120, 160, 140, 200, 220, 190, 160], // Dữ liệu tồn kho
        backgroundColor: '#2196F3',
        borderColor: '#1976D2',
        borderWidth: 1,
        barThickness: 20,
      },
    ],
  };

  const systemPerformanceOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Giám sát hiệu suất hệ thống (Nhập, Xuất, Tồn kho)',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Dữ liệu biểu đồ thông tin người dùng từng tháng
  const userInfoData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Người dùng mới',
        data: [50, 60, 70, 80, 90, 100, 110],
        borderColor: '#FF5722',
        backgroundColor: 'rgba(255, 87, 34, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Người dùng đăng nhập',
        data: [40, 55, 65, 75, 85, 95, 105],
        borderColor: '#2196F3',
        backgroundColor: 'rgba(33, 150, 243, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const userInfoOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Thông tin người dùng từng tháng',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Dữ liệu biểu đồ tổng doanh thu (dành cho admin)
  const totalRevenueData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Tổng Doanh Thu',
        data: [10000, 12000, 15000, 18000, 20000, 22000, 24000],
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const totalRevenueOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Tổng Doanh Thu',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Dữ liệu biểu đồ số lượng khách hàng (dành cho admin)
  const totalCustomersData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Khách hàng',
        data: [300, 320, 350, 380, 400, 420, 440],
        borderColor: '#FF5722',
        backgroundColor: 'rgba(255, 87, 34, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const totalCustomersOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Số lượng khách hàng',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Trạng thái cho việc chọn tháng và năm
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedMonth, setSelectedMonth] = useState("January");

  // Các năm và tháng có sẵn để chọn
  const years = ["2024", "2023"];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Cập nhật dữ liệu khi người dùng chọn tháng và năm mới
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    setSelectedMonth(months[0]); // Reset về tháng đầu tiên khi thay đổi năm
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <div className="w-full h-[1080px] mx-auto p-6 bg-[#F4F7FA] rounded-lg shadow-lg space-y-6">
      {/* Chọn năm và tháng */}
      <div className="flex space-x-4">
        <select
          value={selectedYear}
          onChange={handleYearChange}
          className="p-2 border rounded"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        {/* Chọn tháng */}
        <select
          value={selectedMonth}
          onChange={handleMonthChange}
          className="p-2 border rounded"
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      {/* Hàng 1: Biểu đồ giám sát hiệu suất hệ thống */}
      <div className="flex space-x-3">
        <div className="w-1/2 bg-white p-4 rounded shadow-lg">
          <Bar data={systemPerformanceData} options={systemPerformanceOptions} />
        </div>

        {/* Biểu đồ thông tin người dùng */}
        <div className="w-1/2 bg-white p-4 rounded shadow-lg">
          <Line data={userInfoData} options={userInfoOptions} />
        </div>
      </div>

      {/* Hàng 2: Biểu đồ dành cho admin */}
      <div className="flex space-x-3">
        {/* Biểu đồ tổng doanh thu */}
        <div className="w-1/2 bg-white p-4 rounded shadow-lg">
          <Line data={totalRevenueData} options={totalRevenueOptions} />
        </div>

        {/* Biểu đồ số lượng khách hàng */}
        <div className="w-1/2 bg-white p-4 rounded shadow-lg">
          <Line data={totalCustomersData} options={totalCustomersOptions} />
        </div>
      </div>
    </div>
  );
};

export default ChartComparison;