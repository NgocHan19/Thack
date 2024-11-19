import React, { useState, useEffect } from "react";
import { Bar, Line, Radar, Doughnut } from "react-chartjs-2";
import { Chart, RadialLinearScale, PointElement, LineElement, Filler, Title, Tooltip, Legend } from 'chart.js';
// Đăng ký các thành phần của Chart.js, bao gồm RadialLinearScale cho biểu đồ Radar

Chart.register(
  RadialLinearScale, // Scale radialLinear
  PointElement,
  LineElement,
  Filler, // Filler cho biểu đồ radar/polarArea
  Title,
  Tooltip,
  Legend
);

const ThongKe = () => {
  // State lưu dữ liệu biểu đồ
  const [chartData1, setChartData1] = useState(null);
  const [chartData2, setChartData2] = useState(null);
  const [chartData3, setChartData3] = useState(null);
  const [chartData4, setChartData4] = useState(null);
  const [chartData5, setChartData5] = useState(null);

  // State lưu tháng và năm người dùng chọn
  const [selectedMonth, setSelectedMonth] = useState("01");
  const [selectedYear, setSelectedYear] = useState("2024");

  // Tạo dữ liệu cho biểu đồ
  const createChartData = (month, year) => {
    // Dữ liệu mẫu, bạn có thể thay thế với dữ liệu thực từ API hoặc cơ sở dữ liệu
    const months = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];
    const monthIndex = parseInt(month, 10) - 1; // Chuyển tháng từ chuỗi sang số để sử dụng trong mảng

    return {
      labels: months,
      datasets: [
        {
          label: `Nhập kho ${year}`,
          data: new Array(12).fill(0).map((_, i) => (i === monthIndex ? Math.random() * 100 + 100 : 0)), // Dữ liệu mẫu cho nhập kho
          backgroundColor: "rgba(75, 192, 192, 0.6)",
        },
        {
          label: `Xuất kho ${year}`,
          data: new Array(12).fill(0).map((_, i) => (i === monthIndex ? Math.random() * 100 + 80 : 0)), // Dữ liệu mẫu cho xuất kho
          backgroundColor: "rgba(255, 99, 132, 0.6)",
        },
      ],
    };
  };

  useEffect(() => {
    // Khi tháng và năm thay đổi, cập nhật lại dữ liệu cho các biểu đồ
    const newChartData1 = createChartData(selectedMonth, selectedYear);
    const newChartData2 = createChartData(selectedMonth, selectedYear);
    const newChartData3 = createChartData(selectedMonth, selectedYear);
    const newChartData4 = createChartData(selectedMonth, selectedYear);
    const newChartData5 = createChartData(selectedMonth, selectedYear);

    setChartData1(newChartData1);
    setChartData2(newChartData2);
    setChartData3(newChartData3);
    setChartData4(newChartData4);
    setChartData5(newChartData5);
  }, [selectedMonth, selectedYear]);

  return (
    <div className="w-full mx-auto p-6 bg-[#F4F7FA] rounded-lg shadow-lg space-y-6">
      {/* Chọn tháng và năm */}
      <div className="flex space-x-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Tháng</label>
          <select
            className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            {["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"].map((month) => (
              <option key={month} value={month}>
                {`Tháng ${month}`}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Năm</label>
          <select
            className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            {["2023", "2024", "2025"].map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Biểu đồ */}
      <div className="flex space-x-3">
        {/* Biểu đồ cột */}
        <div className="w-1/2 bg-white p-4 rounded shadow-lg">
          {chartData1 && <Bar data={chartData1} />}
        </div>

        {/* Biểu đồ cột ngang */}
        <div className="w-1/2 bg-white p-4 rounded shadow-lg">
          {chartData2 && <Bar data={chartData2} options={{ indexAxis: "y" }} />}
        </div>
      </div>

      <div className="flex space-x-3">
        {/* Biểu đồ radar */}
        <div className="w-1/2 bg-white p-4 rounded shadow-lg">
          {chartData3 && <Radar data={chartData3} />}
        </div>

        {/* Biểu đồ doughnut */}
        <div className="w-1/2 bg-white p-4 rounded shadow-lg">
          {chartData4 && <Doughnut data={chartData4} />}
        </div>
      </div>

      <div className="flex space-x-3">
        {/* Biểu đồ đường */}
        <div className="w-1/2 bg-white p-4 rounded shadow-lg">
          {chartData5 && <Line data={chartData5} />}
        </div>
      </div>
    </div>
  );
};

export default ThongKe;