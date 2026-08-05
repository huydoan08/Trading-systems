export const rules = [
  "Chỉ giao dịch SPOT cặp tiền BTC/USDT.",
  "Không bao giờ đi dò đáy mà phải chờ giá quay lại retest.",
  "Phải có chiến lược rõ ràng đối với từng khung thời gian giao dịch.",
  "Phải có kế hoạch rõ ràng trước khi vào lệnh và phải tuân thủ theo hệ thống một cách nhất quán.",
  "Ghi chép nhật ký cho mỗi lệnh giao dịch để hoàn thiện hơn.",
];
export const EntryStrategy = [
  { label: "RSI các khung H4 - 1D - 1W đồng pha với nhau.", score: 30 },
  { label: "Giá đã xác nhận retest ở khung giao dịch 1D.", score: 10 },
  { label: "Tối ưu điểm vào lệnh đẹp ở khung H4.", score: 10 },
  { label: "Chỉ số tham lam sợ hãi đã chạm mốc 10.", score: 10 },
  { label: "Có tín hiệu price action.", score: 10 },
  { label: "Mức thưởng đáng để vào lệnh.", score: 10 },
  { label: "Giá đã phá qua trendline giảm.", score: 10 },
  { label: "Thuộc mẫu hình có xác suất thắng cao.", score: 10 }
];

export const ManageStrategy = [
  "Quản lý lệnh theo cấu trúc sóng, follow chiến lược giao dịch một cách tuyệt đối.",
  "Không bị cảm xúc chi phối vào lệnh và chốt lời non, cứ follow theo cấu trúc sóng và dời SL về những vùng giá quan trọng.",
  "Tiền kiếm được trong lúc chờ đợi, chứ không phải là LIÊN TỤC VÀO LỆNH.",
  "Giao dịch theo xu hướng – Cắt vị thế lỗ nhanh chóng – Duy trì vị thế lời – Đừng đóng vị thế khi đang có khoản lợi nhuận lớn."
];
