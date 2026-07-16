export const rules = [
  "Chỉ giao dịch SPOT.",
  "Chỉ giao dịch BTC.",
  "Giao dịch theo RSI bộ khung thời gian là H4, 1D, 1W.",
  "Không bao giờ đoán đỉnh hoặc đoán đáy mà phải chờ giá quay lại retest.",
  "Phải có chiến lược phân bổ vốn phù hợp với từng cơ hội giao dịch.",
  "Phải chia vốn ra làm nhiều lần mua cho mỗi cơ hội giao dịch.",
  "Ghi chép nhật ký cho mỗi lệnh giao dịch để hoàn thiện hơn.",
  "Kiên nhẫn chờ đợi cơ hội tốt rồi đập cho một phát ra ngô ra khoai.",
  "Không nhảy ra nhảy vào lệnh liên tục, không quan sát giá mà quan sát RSI."
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
