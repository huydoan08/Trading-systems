export const quintessenceRsi = [
  "Chỉ giao dịch BTC.",
  "Chỉ giao dịch SPOT.",
  "Giao dịch theo RSI khung 1D hoặc khung H4.",
  "Phải chờ xác nhận của sóng hồi để tối ưu điểm vào lệnh đẹp.",
  "Tối ưu điểm vào lệnh đẹp ở khung thời gian nhỏ hơn.",
  "Stoploss là bắt buộc đối với khung H4, Khung 1D thì SL trong việc đặt SL.",
  "Xác định mức thưởng nếu chiến thắng lệnh đó đáng để giao dịch hay là không.",
  "Không bao giờ đoán đỉnh hoặc đoán đáy mà phải chờ giá quay lại retest.",
  "Khi vào lệnh, xác định rõ là có thể thua lỗ, không chắc chắn một điều gì cả.",
  "Ghi chép nhật ký cho mỗi lệnh giao dịch để hoàn thiện hơn."
];
export const EntryStrategy = [
  { label: "RSI khung H1, H4, 1D cùng pha.", score: 20 },
  { label: "Giá đã quay lại retest và RSI cho thấy hội tụ.", score: 20 },
  { label: "Có tín hiệu price action.", score: 20 },
  { label: "Mức thưởng đáng để vào lệnh.", score: 10 },
  { label: "Tối ưu điểm vào lệnh đẹp ở khung thời gian nhỏ hơn.", score: 10 },
  { label: "Giá đã phá qua trendline giảm.", score: 10 },
  { label: "Mẫu hình đúng tiêu chuẩn, mẫu hình đẹp.", score: 10 }
];

export const ExitStrategy = [
  "Giữ vững kế hoạch chốt lời đã xác định.",
  "Dời SL về hòa vốn hoặc theo vùng quan trọng khi lệnh có lời.",
  "Không chốt lời quá sớm nếu có cấu trúc xu hướng còn rõ.",
  "Tín hiệu đảo chiều xuất hiện thì chuẩn bị thoát lệnh.",
  "Tối ưu tỷ lệ lợi nhuận/rủi ro khi thoát lệnh.",
  "Tránh để lệnh vượt qua mức rủi ro tối đa.",
  "Theo dõi biến động và điều chỉnh quản lý lệnh phù hợp.",
  "Không để cảm xúc quyết định đóng lệnh khi lệnh vẫn có lợi.",
  "Chốt lệnh khi thị trường không còn hỗ trợ xu hướng ban đầu.",
  "Ghi nhận kinh nghiệm vào nhật ký sau khi thoát lệnh."
];

export const ManageStrategy = [
  "Quản lý lệnh theo cấu trúc sóng, follow chiến lược giao dịch một cách tuyệt đối.",
  "Không bị cảm xúc chi phối vào lệnh và chốt lời non, cứ follow theo cấu trúc sóng và dời SL về những vùng giá quan trọng.",
  "Chỉ nhồi thêm lệnh khi giá đi khá xa và lệnh 1 có lợi nhuận, dời SL quản lý lệnh khi giá đã tạo đỉnh đáy.",
  "Tiền kiếm được trong lúc chờ đợi, chứ không phải là LIÊN TỤC VÀO LỆNH.",
  "Giao dịch theo xu hướng – Cắt vị thế lỗ nhanh chóng – Duy trì vị thế lời – Đừng đóng vị thế khi đang có khoản lợi nhuận lớn.",
  "Thực hành nhiều, quan sát nhiều, tối ưu nhiều… bạn sẽ biết cách follow theo con sóng."
];
