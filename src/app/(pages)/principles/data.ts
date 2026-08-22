export const rules = [
  "Chỉ giao dịch SPOT Bitcoin.",
  "Stoploss là bắt buộc với khung H4.",
  "Tuyệt đối không cố tình đoán đỉnh hoặc đoán đáy.",
  "Không mua toàn bộ vốn vào một lệnh.",
  "Phải có kế hoạch chuẩn bị kĩ càng trước mỗi một lệnh giao dịch.",
  "Chỉ vào Altcoin khi Bitcoin đã xác nhận vào xu hướng tăng mạnh và thoát nhanh khi có đủ lợi nhuận.",
  "Ghi chép nhật ký, rút ra bài học sau mỗi một lệnh để ngày một hoàn thiện hơn.",
];
export const EntryStrategy_1D = [
  { label: "RSI của khung 1D đồng pha với khung 1W", score: 30 },
  { label: "RSI của khung 1D đã giảm gần hết hành trình", score: 25 },
  { label: "Giá của khung 1D đã quay lại retest xong và giữ được cấu trúc tốt.", score: 25 },
  { label: "RSI của khung H4 đã bắt đầu cắt lên", score: 20 },
];
export const EntryStrategy_H4 = [
  { label: "RSI của khung H4 đã bắt đầu cắt lên", score: 30 },
  { label: "Giá của khung H4 đã quay lại retest xong và giữ được cấu trúc tốt.", score: 30 },
  { label: "RSI của khung H4 trước đó vượt ra ngoài vùng 80", score: 20 },
  { label: "RSI của khung H4 đồng pha với khung 1D", score: 20 },
];
export const ManageStrategy = [
  "Quản lý lệnh bằng cách dời SL theo cấu trúc sóng.",
  "Tiền kiếm được trong lúc chờ đợi, không để cảm xúc xen vào và chốt lời non.",
  "Thị trường cho ta ăn bao nhiêu thì ta ăn bấy nhiêu, biết đủ thường sẽ vui.",
  "Giao dịch theo hệ thống, không để cảm xúc chi phối."
];
