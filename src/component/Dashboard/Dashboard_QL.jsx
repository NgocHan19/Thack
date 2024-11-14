// ChartComparison.js
import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Đăng ký các phần mở rộng cần thiết cho Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartComparison = () => {
  // Dữ liệu biểu đồ: nhập và xuất hàng hóa từng tháng
  const data1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Nhập',
        data: [100, 150, 120, 180, 200, 170, 140],
        backgroundColor: '#8979FF',
        borderColor: '#388E3C',
        borderWidth: 1,
        barThickness: 20,
      },
      {
        label: 'Xuất',
        data: [80, 130, 110, 160, 190, 160, 130],
        backgroundColor: '#FF928A',
        borderColor: '#F4511E',
        borderWidth: 1,
        barThickness: 20,
      },
    ],
  };

  const options1 = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Hiệu suất làm việc của nhân viên',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Dữ liệu biểu đồ: tình trạng hợp đồng với các nhà cung cấp
  const data2 = {
    labels: ['Nhà cung cấp A', 'Nhà cung cấp B', 'Nhà cung cấp C', 'Nhà cung cấp D'],
    datasets: [
      {
        label: 'Còn Hạn',
        data: [10, 7, 15, 5],
        backgroundColor: '#4CAF50',
        borderColor: '#388E3C',
        borderWidth: 1,
      },
      {
        label: 'Cần Gia Hạn',
        data: [5, 3, 8, 4],
        backgroundColor: '#FF7043',
        borderColor: '#F4511E',
        borderWidth: 1,
      },
    ],
  };

  const options2 = {
    responsive: true,
    indexAxis: 'y',  // Đây là phần quan trọng để chuyển biểu đồ thành dạng cột ngang
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Theo dõi tình trạng hợp đồng của các nhà cung cấp',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  // Dữ liệu biểu đồ hàng tháng theo tháng và năm
  const monthlyData = {
    "2024": {
      January: [100, 120, 130],
      February: [110, 125, 140],
      March: [120, 130, 150],
      // Thêm dữ liệu cho các tháng còn lại...
    },
    "2023": {
      January: [90, 110, 100],
      February: [105, 120, 125],
      March: [115, 130, 140],
      // Thêm dữ liệu cho các tháng còn lại...
    },
    // Thêm dữ liệu cho các năm khác nếu cần...
  };

  // Các tháng và năm có sẵn để chọn
  const years = ["2024", "2023"]; // Cập nhật thêm năm nếu cần
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Trạng thái cho việc chọn tháng và năm
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedMonth, setSelectedMonth] = useState("January");

  // Cập nhật dữ liệu khi người dùng chọn tháng và năm mới
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    setSelectedMonth(months[0]); // Reset về tháng đầu tiên khi thay đổi năm
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  // Dữ liệu cho biểu đồ theo tháng và năm đã chọn
  const chartData = {
    labels: ['Nhập', 'Xuất', 'Còn Tồn'], // Tùy chỉnh theo yêu cầu của bạn
    datasets: [
      {
        label: 'Nhập Hàng',
        data: monthlyData[selectedYear][selectedMonth], // Lấy dữ liệu cho tháng và năm đã chọn
        borderColor: '#2196F3', // Màu đường nhập hàng
        backgroundColor: 'rgba(33, 150, 243, 0.2)', // Màu nền của đường nhập hàng
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Xuất Hàng',
        data: monthlyData[selectedYear][selectedMonth].map(val => val - 20), // Giả sử xuất hàng thấp hơn nhập hàng 20
        borderColor: '#FF5722',
        backgroundColor: 'rgba(255, 87, 34, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Lượng hàng nhập/xuất tháng ${selectedMonth} ${selectedYear}`, // Tiêu đề biểu đồ
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  

    // Dữ liệu biểu đồ cho từng chi nhánh (giả sử có 3 chi nhánh)
    const branchData = {
      "2024": {
        January: {
          branchA: { stock: 150, import: 120, export: 100 },
          branchB: { stock: 130, import: 100, export: 90 },
          branchC: { stock: 180, import: 140, export: 110 },
        },
        February: {
          branchA: { stock: 145, import: 130, export: 110 },
          branchB: { stock: 135, import: 110, export: 100 },
          branchC: { stock: 170, import: 150, export: 120 },
        },
        // Thêm dữ liệu cho các tháng còn lại...
      },
      "2023": {
        January: {
          branchA: { stock: 140, import: 110, export: 95 },
          branchB: { stock: 125, import: 90, export: 85 },
          branchC: { stock: 160, import: 130, export: 105 },
        },
        February: {
          branchA: { stock: 130, import: 115, export: 100 },
          branchB: { stock: 120, import: 100, export: 90 },
          branchC: { stock: 150, import: 140, export: 110 },
        },
        // Thêm dữ liệu cho các tháng còn lại...
      },
      // Thêm dữ liệu cho các năm khác nếu cần...
    };

  // Dữ liệu cho các biểu đồ theo chi nhánh đã chọn
  const chartData2 = {
    labels: ['Chi nhánh A', 'Chi nhánh B', 'Chi nhánh C'], // Các chi nhánh
    datasets: [
      {
        label: `Lượng Hàng Tồn ${selectedMonth} ${selectedYear}`,
        data: [
          branchData[selectedYear][selectedMonth].branchA.stock,
          branchData[selectedYear][selectedMonth].branchB.stock,
          branchData[selectedYear][selectedMonth].branchC.stock,
        ],
        borderColor: '#2196F3', // Màu đường hàng tồn
        backgroundColor: 'rgba(33, 150, 243, 0.2)', // Màu nền của đường tồn
        fill: true,
        tension: 0.4,
      },
      {
        label: `Lượng Hàng Đã Nhập ${selectedMonth} ${selectedYear}`,
        data: [
          branchData[selectedYear][selectedMonth].branchA.import,
          branchData[selectedYear][selectedMonth].branchB.import,
          branchData[selectedYear][selectedMonth].branchC.import,
        ],
        borderColor: '#4CAF50', // Màu đường nhập hàng
        backgroundColor: 'rgba(76, 175, 80, 0.2)', // Màu nền của đường nhập
        fill: true,
        tension: 0.4,
      },
      {
        label: `Lượng Hàng Đã Xuất ${selectedMonth} ${selectedYear}`,
        data: [
          branchData[selectedYear][selectedMonth].branchA.export,
          branchData[selectedYear][selectedMonth].branchB.export,
          branchData[selectedYear][selectedMonth].branchC.export,
        ],
        borderColor: '#FF5722', // Màu đường xuất hàng
        backgroundColor: 'rgba(255, 87, 34, 0.2)', // Màu nền của đường xuất
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options3 = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Lượng hàng tồn, nhập, xuất tại các chi nhánh tháng ${selectedMonth} ${selectedYear}`, // Tiêu đề biểu đồ
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full h-[900px] mx-auto p-6 bg-[#F4F7FA] rounded-lg shadow-lg space-y-6">
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

    {/* Hàng 1: 2 biểu đồ nhập xuất hàng */}
    <div className="flex space-x-3">
      {/* Biểu đồ nhập xuất hàng */}
      <div className="w-1/2 bg-white p-4 rounded shadow-lg">
        <Bar data={data1} options={options1} />
      </div>

      {/* Biểu đồ tình trạng hợp đồng nhà cung cấp */}
      <div className="w-1/2 bg-white p-4 rounded shadow-lg">
        <Bar data={data2} options={options2} />
      </div>
    </div>

    {/* Hàng 2: 2 biểu đồ Lượng hàng nhập/xuất hàng tháng */}
    <div className="flex space-x-3">
      {/* Biểu đồ Lượng hàng nhập/xuất hàng tháng */}
      <div className="w-1/2 bg-white p-4 rounded shadow-lg">
        <Line data={chartData} options={options} />
      </div>

      {/* Biểu đồ Lượng hàng nhập/xuất hàng tháng */}
      <div className="w-1/2 bg-white p-4 rounded shadow-lg">
        <Line data={chartData2} options={options3} />
      </div>
    </div>
  </div>
);
};

export default ChartComparison;