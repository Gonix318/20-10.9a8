// backend.js - Đồng bộ dữ liệu Online qua MockAPI (Đã tích hợp URL của bạn)
const MOCK_API_URL = "https://6ad6540af71f154ac486c711.mockapi.io/logs";

window.backendAPI = {
  // Đếm lượt truy cập website toàn cầu
  logPageView: async function() {
    try {
      fetch("https://api.counterapi.dev/v1/gonix318_flower_2010/views/up").catch(() => {});
    } catch (e) {}
  },

  // Ghi nhận lượt tra cứu của học sinh lên Server đám mây MockAPI
  logSuccessfulSearch: async function(fullName, initials, sbd) {
    // 1. Tăng số đếm tra cứu thành công
    fetch("https://api.counterapi.dev/v1/gonix318_flower_2010/searches/up").catch(() => {});

    // 2. Gửi Tên, Tên viết tắt, SBD lên server MockAPI
    try {
      await fetch(MOCK_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: fullName,
          initials: initials,
          sbd: sbd
        })
      });
    } catch (err) {
      console.error("Lỗi gửi dữ liệu lên server:", err);
    }
  },

  // Admin lấy dữ liệu trực tiếp từ Server đám mây về bảng thống kê
  fetchAdminData: async function(adminPassword) {
    const cleanPass = adminPassword ? adminPassword.trim() : "";
    if (cleanPass !== "ttdp318" && cleanPass !== "admin2010") {
      throw new Error("Mã quản trị bí mật không chính xác!");
    }

    let viewCount = 1;
    let searchCount = 0;
    let remoteLogs = [];

    // Lấy số liệu bộ đếm online
    try {
      const resV = await fetch("https://api.counterapi.dev/v1/gonix318_flower_2010/views");
      const dataV = await resV.json();
      if (dataV && typeof dataV.count === "number") viewCount = dataV.count;

      const resS = await fetch("https://api.counterapi.dev/v1/gonix318_flower_2010/searches");
      const dataS = await resS.json();
      if (dataS && typeof dataS.count === "number") searchCount = dataS.count;
    } catch (e) {}

    // Lấy danh sách bạn nữ đã tra cứu từ tất cả máy/điện thoại khác
    try {
      const resLogs = await fetch(MOCK_API_URL);
      const dataLogs = await resLogs.json();
      if (Array.isArray(dataLogs)) {
        remoteLogs = dataLogs;
      }
    } catch (e) {
      console.error("Lỗi tải nhật ký:", e);
    }

    return {
      views: viewCount,
      searches: searchCount > remoteLogs.length ? searchCount : remoteLogs.length,
      logs: remoteLogs
    };
  }
};

// Tự động đếm view khi mở trang web
setTimeout(() => {
  if (window.backendAPI) window.backendAPI.logPageView();
}, 200);
