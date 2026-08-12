export const rules = [
  "Chỉ giao dịch SPOT Bitcoin.",
  "Phải tuân thủ Stoploss một cách tuyệt đối.",
  "Tuyệt đối không được đi đoán đáy.",
  "Phải có kế hoạch chuẩn bị kĩ càng trước mỗi một lệnh giao dịch.",
  "Ghi chép nhật ký, rút ra bài học sau mỗi một lệnh để ngày một hoàn thiện hơn.",
];
export const EntryStrategy = [
  { label: "RSI của khung giao dịch đồng pha với khung lớn hơn", score: 30 },
  { label: "RSI của khung giao dịch được chọn đã giảm hết hành trình", score: 25 },
  { label: "Giá của khung giao dịch đã quay lại retest xong và không phá qua đáy cũ.", score: 25 },
  { label: "Có sự xác nhận của price action.", score: 20 },
];

export const ManageStrategy = [
  "Quản lý lệnh theo cấu trúc sóng, follow chiến lược giao dịch một cách tuyệt đối.",
  "Không bị cảm xúc chi phối vào lệnh và chốt lời non, cứ follow theo cấu trúc sóng và dời SL về những vùng giá quan trọng.",
  "Tiền kiếm được trong lúc chờ đợi, chứ không phải là LIÊN TỤC VÀO LỆNH.",
  "Giao dịch theo xu hướng – Cắt vị thế lỗ nhanh chóng – Duy trì vị thế lời – Đừng đóng vị thế khi đang có khoản lợi nhuận lớn."
];
