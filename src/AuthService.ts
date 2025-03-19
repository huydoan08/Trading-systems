import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { auth } from "./firebaseConfig";

export const ALLOWED_UID = "w1ulDrt8O0OXIr0TVdPTMi58oAn2";

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

export const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("user", user);
    if (user.uid !== ALLOWED_UID) {
      alert("Bạn không có quyền đăng nhập, vui lòng chờ admin chấp thuận!");
      await signOut(auth);
      return;
    }
    return userCredential.user;
  } catch (error) {
    console.error("Đăng nhập thất bại", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Đăng xuất thất bại", error);
    throw error;
  }
};
