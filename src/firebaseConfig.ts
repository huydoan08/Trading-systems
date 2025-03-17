// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIJJ_In2_ZZWqwCof2-XQP0Y89bDD86wM",
  authDomain: "trading-systems-52231.firebaseapp.com",
  projectId: "trading-systems-52231",
  storageBucket: "trading-systems-52231.firebasestorage.app",
  messagingSenderId: "309059380473",
  appId: "1:309059380473:web:a943d30201d742219aee28"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Xuất Auth để sử dụng trong các component
export const auth = getAuth(app);
