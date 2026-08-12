export const rules = [
  "Chỉ giao dịch SPOT Bitcoin.",
  "Chỉ giao dịch ở khung 1D.",
  "Tuyệt đối không cố tình đoán đỉnh hoặc đoán đáy.",
  "Không mua toàn bộ vốn vào một lệnh.",
  "Phải có kế hoạch chuẩn bị kĩ càng trước mỗi một lệnh giao dịch.",
  "Ghi chép nhật ký, rút ra bài học sau mỗi một lệnh để ngày một hoàn thiện hơn.",
];
export const EntryStrategy = [
  { label: "RSI của khung 1D đồng pha với khung 1W", score: 30 },
  { label: "RSI của khung 1D đã giảm gần hết hành trình", score: 25 },
  { label: "Giá của khung 1D đã quay lại retest xong và giữ được cấu trúc tốt.", score: 25 },
  { label: "RSI của khung H4 đã bắt đầu cắt lên", score: 20 },
];
export const ManageStrategy = [
  "Quản lý lệnh theo cấu trúc sóng, follow chiến lược giao dịch một cách tuyệt đối.",
  "Không bị cảm xúc chi phối vào lệnh và chốt lời non, cứ follow theo cấu trúc sóng và dời SL về những vùng giá quan trọng.",
  "Tiền kiếm được trong lúc chờ đợi, chứ không phải là LIÊN TỤC VÀO LỆNH.",
  "Giao dịch theo xu hướng – Cắt vị thế lỗ nhanh chóng – Duy trì vị thế lời – Đừng đóng vị thế khi đang có khoản lợi nhuận lớn."
];
