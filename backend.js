// CẤU HÌNH FIREBASE
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

let db = null;
let auth = null;
let isFirebaseActive = false;

// Kiểm tra xem đã có API Key thật hay chưa
const hasRealFirebaseConfig = firebaseConfig.apiKey && firebaseConfig.apiKey !== "YOUR_API_KEY";

if (hasRealFirebaseConfig) {
  import("https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js")
    .then(async (firebaseApp) => {
      const { initializeApp } = firebaseApp;
      const { getFirestore } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
      const { getAuth } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js");

      try {
        const app = initializeApp(firebaseConfig);
        db = getFirestore(app);
        auth = getAuth(app);
        isFirebaseActive = true;
        console.log("🌸 Firebase kết nối thành công!");
        window.backendAPI.logPageView();
      } catch (e) {
        console.warn("Lỗi Firebase -> Dùng Mock LocalStorage");
        window.backendAPI.logPageView();
      }
    })
    .catch(() => {
      window.backendAPI.logPageView();
    });
} else {
  // Chạy ngay chế độ mock
  setTimeout(() => {
    if (window.backendAPI) window.backendAPI.logPageView();
  }, 100);
}

window.backendAPI = {
  // Ghi nhận lượt mở website
  logPageView: async function() {
    if (!isFirebaseActive || !db) {
      let views = parseInt(localStorage.getItem("mock_page_views") || "0") + 1;
      localStorage.setItem("mock_page_views", views);
      return;
    }
    try {
      const { doc, setDoc, increment } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
      const statRef = doc(db, "statistics", "counts");
      await setDoc(statRef, { pageViews: increment(1) }, { merge: true });
    } catch (err) {
      console.error("Lỗi đếm view:", err);
    }
  },

  // Ghi nhận tra cứu thành công: Tên nhập, Tên viết tắt, SBD
  logSuccessfulSearch: async function(fullName, initials, sbd) {
    if (!isFirebaseActive || !db) {
      let logs = JSON.parse(localStorage.getItem("mock_search_logs") || "[]");
      logs.push({ fullName, initials, sbd });
      localStorage.setItem("mock_search_logs", JSON.stringify(logs));
      let successCount = parseInt(localStorage.getItem("mock_search_success") || "0") + 1;
      localStorage.setItem("mock_search_success", successCount);
      return;
    }
    try {
      const { collection, addDoc, doc, setDoc, increment } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
      await addDoc(collection(db, "search_logs"), {
        fullName: fullName,
        initials: initials,
        sbd: sbd
      });
      const statRef = doc(db, "statistics", "counts");
      await setDoc(statRef, { searchSuccess: increment(1) }, { merge: true });
    } catch (err) {
      console.error("Lỗi ghi log:", err);
    }
  },

  // Xác thực quyền Admin
  fetchAdminData: async function(adminPassword) {
    const cleanPass = adminPassword ? adminPassword.trim() : "";

    // Ưu tiên xác thực offline/mock trước
    if (!isFirebaseActive || !db || !auth) {
      if (cleanPass === "ttdp318" || cleanPass === "admin2010") {
        return {
          views: localStorage.getItem("mock_page_views") || "1",
          searches: localStorage.getItem("mock_search_success") || "0",
          logs: JSON.parse(localStorage.getItem("mock_search_logs") || "[]")
        };
      } else {
        throw new Error("Mã quản trị bí mật không chính xác!");
      }
    }

    // Nếu có Firebase Auth thật
    try {
      const { signInWithEmailAndPassword } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js");
      const { doc, getDoc, collection, getDocs } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
      
      await signInWithEmailAndPassword(auth, "admin_flower@school.internal", cleanPass);

      const statSnap = await getDoc(doc(db, "statistics", "counts"));
      const counts = statSnap.exists() ? statSnap.data() : { pageViews: 0, searchSuccess: 0 };

      const querySnapshot = await getDocs(collection(db, "search_logs"));
      const logs = [];
      querySnapshot.forEach((doc) => {
        logs.push(doc.data());
      });

      return {
        views: counts.pageViews || 0,
        searches: counts.searchSuccess || 0,
        logs: logs
      };
    } catch (error) {
      throw new Error("Xác thực thất bại! Mã quản trị không chính xác.");
    }
  }
};
