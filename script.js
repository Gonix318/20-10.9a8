document.addEventListener("DOMContentLoaded", () => {
  // --- CHUYỂN MÀN HÌNH ---
  function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    const target = document.getElementById(screenId);
    if (target) target.classList.add("active");
  }

  // --- TRÌNH PHÁT NHẠC NỀN ---
  const audio = document.getElementById("bgAudio");
  const musicToggleBtn = document.getElementById("musicToggleBtn");
  const musicSelect = document.getElementById("musicSelect");
  let isPlaying = false;

  audio.src = musicSelect.value;

  musicToggleBtn.addEventListener("click", () => {
    if (isPlaying) {
      audio.pause();
      musicToggleBtn.innerHTML = "🎵 <span>Phát nhạc</span>";
      isPlaying = false;
    } else {
      audio.play().then(() => {
        musicToggleBtn.innerHTML = "⏸️ <span>Tạm dừng</span>";
        isPlaying = true;
      }).catch(e => console.log("Trình duyệt chặn autoplay:", e));
    }
  });

  musicSelect.addEventListener("change", (e) => {
    audio.src = e.target.value;
    if (isPlaying) audio.play();
  });

  // Màn 1 -> Màn 2
  document.getElementById("btnEnterGarden").addEventListener("click", () => {
    showScreen("screen2");
    if (!isPlaying) {
      audio.play().then(() => {
        musicToggleBtn.innerHTML = "⏸️ <span>Tạm dừng</span>";
        isPlaying = true;
      }).catch(() => {});
    }
  });

  // Chuẩn hóa Tên Viết Tắt (VD: "Lê Bảo Ngọc" -> "LBN")
  function getInitials(fullName) {
    return fullName
      .trim()
      .split(/\s+/)
      .map(word => word.charAt(0).toUpperCase())
      .join("");
  }

  // Lấy ngẫu nhiên N câu chúc không trùng lặp
  function getRandomWishes(wishesArray, count = 3) {
    const shuffled = [...wishesArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, shuffled.length));
  }

  let currentProfile = null;

  // Xử lý nút Tra Cứu
  document.getElementById("btnLookup").addEventListener("click", () => {
    const errorEl = document.getElementById("searchErrorMsg");
    errorEl.textContent = "";

    const nameInput = document.getElementById("userNameInput").value.trim();
    const sbdInput = document.getElementById("userSbdInput").value.trim();

    if (!nameInput) {
      errorEl.textContent = "Cậu hãy nhập tên của mình nhé!";
      return;
    }
    if (!sbdInput) {
      errorEl.textContent = "Vui lòng nhập số báo danh (SBD) của cậu!";
      return;
    }

    // --- EASTER EGG CHO CHỦ WEB: Tên IMPHONG và SBD 67 ---
    if (nameInput.toUpperCase() === "IMPHONG" && parseInt(sbdInput, 10) === 67) {
      document.getElementById("adminPortalModal").classList.remove("hidden");
      return;
    }

    // Tra cứu danh sách 21 bạn nữ
    const inputSbdInt = parseInt(sbdInput, 10);
    const match = STUDENTS_DATA.find(s => parseInt(s.sbd, 10) === inputSbdInt);

    if (!match) {
      errorEl.textContent = "Không tìm thấy SBD trong danh sách bạn nữ lớp mình. Cậu kiểm tra lại nhé!";
      return;
    }

    // Tra cứu thành công -> Ghi nhận Tên Viết Tắt và Phương Thức SBD
    currentProfile = match;
    const initials = getInitials(nameInput);
    if (window.backendAPI) {
      window.backendAPI.logSuccessfulSearch(initials, "SBD");
    }

    // Hiển thị Màn 3
    displayWishes();
    showScreen("screen3");
  });

  function displayWishes() {
    if (!currentProfile) return;
    document.getElementById("recipientNameDisplay").textContent = currentProfile.name;
    const container = document.getElementById("wishesContainer");
    container.innerHTML = "";

    // Bốc ngẫu nhiên 3 lời chúc
    const chosenWishes = getRandomWishes(currentProfile.wishes, 3);
    chosenWishes.forEach(wish => {
      const div = document.createElement("div");
      div.className = "wish-item";
      div.textContent = wish;
      container.appendChild(div);
    });
  }

  // Đổi 3 lời chúc khác
  document.getElementById("btnRefreshWishes").addEventListener("click", () => {
    displayWishes();
  });

  // Màn 3 -> Màn 4
  document.getElementById("btnGoGarden").addEventListener("click", () => {
    showScreen("screen4");
  });

  // Mở hộp quà ở Màn 4
  const giftBox = document.getElementById("interactiveGift");
  const giftHint = document.getElementById("giftHintTxt");
  const finalBlessing = document.getElementById("finalBlessing");

  giftBox.addEventListener("click", () => {
    giftBox.style.transform = "scale(1.2) rotate(15deg)";
    setTimeout(() => {
      giftBox.classList.add("hidden");
      giftHint.classList.add("hidden");
      finalBlessing.classList.remove("hidden");
    }, 300);
  });

  // Quay lại từ đầu
  document.getElementById("btnRestart").addEventListener("click", () => {
    document.getElementById("searchForm").reset();
    document.getElementById("searchErrorMsg").textContent = "";
    giftBox.classList.remove("hidden");
    giftHint.classList.remove("hidden");
    finalBlessing.classList.add("hidden");
    showScreen("screen1");
  });

  // --- LOGIC CỔNG QUẢN TRỊ BÍ MẬT ---
  const adminModal = document.getElementById("adminPortalModal");
  const btnCloseAdmin = document.getElementById("btnCloseAdminModal");
  const btnAdminLogin = document.getElementById("btnAdminLogin");
  const adminSecretInput = document.getElementById("adminSecretKeyInput");
  const adminAuthError = document.getElementById("adminAuthError");
  const adminAuthArea = document.getElementById("adminAuthArea");
  const adminDashboardArea = document.getElementById("adminDashboardArea");

  btnCloseAdmin.addEventListener("click", () => {
    adminModal.classList.add("hidden");
    adminSecretInput.value = "";
    adminAuthError.textContent = "";
  });

  btnAdminLogin.addEventListener("click", async () => {
    const key = adminSecretInput.value.trim();
    adminAuthError.textContent = "";
    if (!key) {
      adminAuthError.textContent = "Vui lòng nhập mật mã quản trị!";
      return;
    }

    try {
      btnAdminLogin.textContent = "Đang xác thực...";
      const data = await window.backendAPI.fetchAdminData(key);

      document.getElementById("statPageViews").textContent = data.views;
      document.getElementById("statSuccessSearches").textContent = data.searches;

      const tbody = document.getElementById("adminLogsTableBody");
      tbody.innerHTML = "";
      data.logs.forEach(row => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td><strong>${row.initials}</strong></td><td>${row.method}</td>`;
        tbody.appendChild(tr);
      });

      adminAuthArea.classList.add("hidden");
      adminDashboardArea.classList.remove("hidden");
    } catch (err) {
      adminAuthError.textContent = err.message || "Xác thực thất bại!";
    } finally {
      btnAdminLogin.textContent = "Xác thực hệ thống 🔑";
    }
  });

  document.getElementById("btnAdminLogout").addEventListener("click", () => {
    adminDashboardArea.classList.add("hidden");
    adminAuthArea.classList.remove("hidden");
    adminSecretInput.value = "";
    adminModal.classList.add("hidden");
  });

  // --- CANVAS CÁNH HOA RƠI ---
  const canvas = document.getElementById("petalCanvas");
  const ctx = canvas.getContext("2d");
  let petals = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  class Petal {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = -20;
      this.size = Math.random() * 8 + 6;
      this.speedX = Math.random() * 1.5 - 0.75;
      this.speedY = Math.random() * 1.2 + 0.8;
      this.rotation = Math.random() * 360;
      this.rotationSpeed = Math.random() * 1.5 - 0.75;
      this.opacity = Math.random() * 0.5 + 0.3;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.rotation += this.rotationSpeed;
      if (this.y > canvas.height + 20) this.reset();
    }
    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.fillStyle = `rgba(255, 182, 193, ${this.opacity})`;
      ctx.beginPath();
      ctx.ellipse(0, 0, this.size, this.size / 2, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < 28; i++) {
    petals.push(new Petal());
  }

  function animatePetals() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    petals.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animatePetals);
  }
  animatePetals();
});
