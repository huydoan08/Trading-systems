export const rules = [
  "Chỉ giao dịch BTC.",
  "Chỉ giao dịch SPOT.",
  "Giao dịch theo RSI bộ khung thời gian là 1D và H4.",
  "Stoploss là bắt buộc.",
  "Không bao giờ đoán đỉnh hoặc đoán đáy mà phải chờ giá quay lại retest.",
  "Ghi chép nhật ký cho mỗi lệnh giao dịch để hoàn thiện hơn.",
  "Phải chia vốn ra làm nhiều lần mua.",
  "Phải có chiến lược giao dịch rõ ràng, bao gồm chiến lược phân bổ vốn và chiến lược quản trị rủi ro."
];
export const EntryStrategy = [
  { label: "RSI khung H4, 1D cùng pha.", score: 20 },
  { label: "Giá đã quay lại retest và RSI cho thấy hội tụ.", score: 20 },
  { label: "Chỉ số tham lam sợ hãi đã chạm mốc 10.", score: 10 },
  { label: "Có tín hiệu price action.", score: 10 },
  { label: "Mức thưởng đáng để vào lệnh.", score: 10 },
  { label: "Tối ưu điểm vào lệnh đẹp ở khung H4.", score: 10 },
  { label: "Giá đã phá qua trendline giảm.", score: 10 },
  { label: "Mẫu hình đúng tiêu chuẩn, mẫu hình đẹp.", score: 10 }
];

export const ManageStrategy = [
  "Quản lý lệnh theo cấu trúc sóng, follow chiến lược giao dịch một cách tuyệt đối.",
  "Không bị cảm xúc chi phối vào lệnh và chốt lời non, cứ follow theo cấu trúc sóng và dời SL về những vùng giá quan trọng.",
  "Tiền kiếm được trong lúc chờ đợi, chứ không phải là LIÊN TỤC VÀO LỆNH.",
  "Giao dịch theo xu hướng – Cắt vị thế lỗ nhanh chóng – Duy trì vị thế lời – Đừng đóng vị thế khi đang có khoản lợi nhuận lớn."
];
