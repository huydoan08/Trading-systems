// src/services/AuthService.ts
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { auth } from "./firebaseConfig";

// Đăng ký tài khoản mới
export const register = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Đăng ký thất bại", error);
    throw error;
  }
};

// Đăng nhập bằng email & password
export const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Đăng nhập thất bại", error);
    throw error;
  }
};

// Đăng xuất
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Đăng xuất thất bại", error);
    throw error;
  }
};
