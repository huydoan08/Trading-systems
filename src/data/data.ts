import { YearlyData } from "@/app/(demo)/revenue/page";

export const PTKT = [
  {
    title: "Cập nhật tình hình thị trường chart BTC ngày 24-03-2025:",
    content: [
      "Khung 1M => RSI cắt qua TBN, sắp chạm tới TBC, xu hướng bó sát 2 ĐTB, sóng tăng đi được khoảng 80% HT.",
      "Khung 1W => RSI cắt qua 2 DTB, xu hướng tiếp tục mở rộng, đang trong nhịp điều chỉnh, sóng giảm đi được khoảng 25% HT.",
      "Khung D1 => RSI nằm trên 2 DTB, xu hướng tiếp tục tăng, sóng tăng đi được khoảng 40% HT.",
      "Khung H4 => RSI nằm trên 2 DTB, đang mở rộng.",
      "Khung H1 => RSI nằm trên 2 DTB, sóng tăng đã đi gần hết HT, lực tăng không mạnh, khả năng sẽ có nhịp điều chỉnh nhẹ, nếu điều chỉnh xong vẫn giữ cấu trúc fibo 0.382 thì vẫn kì vọng tăng tiếp.",
      "DÀI HẠN: Chờ khung W đi gần hết hành trình giảm sẽ phân bổ vốn vào để gom hàng dần.",
      "TRUNG HẠN: Khung D RSI đã đi xa vị thế không còn đẹp nữa, lực mua không thực sự mạnh, đang đi ngược xu hướng khung W.",
      "NGẮN HẠN: Không tham gia, có thể tăng tiếp nhưng con sóng này rủi ro nhiều hơn cơ hội."
    ]
  },
  {
    title: "Cập nhật tình hình thị trường chart BTC ngày 21-03-2025:",
    content: [
      "Khung 1M => RSI cắt qua TBN, sắp chạm tới TBC, xu hướng bó sát 2 ĐTB, đo fibo vẫn giữ cấu trúc 0.5, sóng tăng đi được khoảng 80% HT.",
      "Khung 1W => RSI cắt qua 2 DTB, xu hướng tiếp tục mở rộng, đang trong nhịp điều chỉnh, sóng giảm đi được khoảng 25% HT.",
      "Khung D1 => RSI cắt qua 2 DTB, xu hướng tăng, sóng tăng đi được khoảng 20% HT.",
      "Khung H4 => RSI bó sát 2 DTB, thiên về sideway biên độ hẹp.",
      "Khung H1 => RSI giảm, sóng giảm đi được khoảng 80% HT.",
      "DÀI HẠN: Chờ khung W đi gần hết hành trình giảm sẽ phân bổ vốn vào để gom hàng dần.",
      "TRUNG HẠN: Khung D bắt đầu sóng tăng, có thể tham gia nhưng lưu ý đang đi ngược xu hướng khung W, khá nguy hiểm.",
      "NGẮN HẠN: Khung H4 sideway biên độ hẹp nên có thể follow theo chiến lược đánh sóng sideway hoặc ngồi ngoài chơi."
    ]
  },
  {
    title: "Cập nhật tình hình thị trường chart BTC ngày 20-03-2025:",
    content: [
      "Khung 1M => RSI lưỡng lự, đo fibo vẫn giữ cấu trúc sóng tăng.",
      "Khung 1W => RSI giảm, xu hướng tiếp tục mở rộng.",
      "Khung D1 => RSI bó sát 2 DTB, đã kết thúc hành trình giảm.",
      "Khung H4 => RSI tăng và đang mở rộng, mới chạm vùng 70, bắt đầu có dấu hiệu điều chỉnh.",
      "Khung H1 => RSI tăng, chưa chạm vùng 80 có dấu hiệu điều chỉnh cần chú ý quan sát thêm.",
      "DÀI HẠN: Chờ khung W đi gần hết hành trình giảm sẽ phân bổ vốn vào để gom hàng dần.",
      "TRUNG HẠN: Khung D kết thúc hành trình giảm, có thể tham gia nhưng lưu ý đang đi ngược xu hướng khung W, khá nguy hiểm.",
      "NGẮN HẠN: H4 tăng, có thể chờ nhịp điều chỉnh để tham gia."
    ]
  }
];

export const allData: YearlyData = {
  "2024": [
    { name: "Start/2024", revenue: 0 },
    { name: "04-08/2024", revenue: 700 },
    { name: "09/2024", revenue: -183 },
    { name: "10/2024", revenue: -890 },
    { name: "11/2024", revenue: 650 },
    { name: "12/2024", revenue: -3124 }
  ],
  "2025": [
    { name: "01/2025", revenue: -1018 },
    { name: "02/2025", revenue: -129 },
    { name: "03/2025", revenue: -16 }
  ]
};

export const afterTraderCloses = [
  "Không cố gắng tìm cơ hội vào lệnh ngay sau khi chạm Stoploss.",
  "Ghi chép nhật kí giao dịch một cách tỉ mỉ, cẩn thận, chi tiết.",
  "Quên đi kết quả giao dịch và chỉ giữ lại cho mình bài học."
];

export const buddhism = [
  {
    title: "Lời Phật dạy",
    content: [
      "Đừng tin tưởng vào một điều gì vì phong văn. Đừng tin tưởng điều gì vì vin vào một tập quán lưu truyền.",
      "Đừng tin tưởng điều gì vì cớ được nhiều nói đi nhắc lại. Đừng tin tưởng điều gì dù là bút tích của thánh nhân.",
      "Đừng tin tưởng điều gì dù thói quen từ lâu khiến ta nhận là điều ấy đúng.",
      "Đừng tin tưởng điều gì do ta tưởng tượng ra lại nghĩ rằng một vị tối linh đã khai thị cho ta.",
      "Đừng tin tưởng bất cứ một điều gì chỉ vin vào uy tín của các thầy dạy các người.",
      "Nhưng chỉ tin tưởng cái gì mà chính các người đã từng trải, kinh nghiệm và nhận là đúng, có lợi cho mình và người khác. Chỉ có cái đó mới là đích tối hậu thăng hoa cho con người và cuộc đời. Các người hãy lấy đó làm chỉ chuẩn."
    ]
  },
  {
    title: "10 Điều chớ vội tin",
    content: [
      "1. Chớ vội tin điều gì, chỉ vì điều đó là truyền thuyết.",
      "2. Chớ vội tin điều gì, chỉ vì điều đó thuộc về truyền thống.",
      "3. Chớ vội tin điều gì, chỉ vì điều đó được nhiều người nhắc đến hay tuyên truyền.",
      "4. Chớ vội tin điều gì, chỉ vì điều đó được ghi lại trong sách vở hay kinh điển.",
      "5. Chớ vội tin điều gì, chỉ vì điều đó lý luận siêu hình.",
      "6. Chớ vội tin điều gì, chỉ vì điều đó phù hợp với lập trường của mình.",
      "7. Chớ vội tin điều gì, chỉ vì điều ấy phù hợp với định kiến của mình.",
      "8. Chớ vội tin điều gì, khi điều đó được căn cứ trên những dữ kiện hời hợt.",
      "9. Chớ vội tin điều gì, chỉ vì điều ấy được sức mạnh và quyền uy ủng hộ.",
      "10. Chớ vội tin điều gì, chỉ vì điều ấy được các nhà truyền giáo hay đạo sư của mình tuyên thuyết."
    ]
  }
];

export const commonMistake = [
  "Hay mở tài khoản ra xem các khoản lời lỗ rồi bị áp lực tâm lý.",
  "Lỗi thấy giá mới di chuyển một đoạn đã vội vàng đóng lệnh bằng cảm xúc.",
  "Lỗi không kiên nhẫn chờ cơ hội vào lệnh đẹp.",
  "Lỗi sợ thua không chịu cắt lỗ, dẫn đến trường hợp thua lỗ lớn và cháy tài khoản.",
  "Lỗi khi thấy dấu hiệu đã bị fail nhưng vẫn cố chấp và kì vọng không chịu cắt lỗ."
];

export const conditionForEnteringATrade = [
  "Các mẫu hình đúng tiêu chuẩn, mẫu hình đẹp.",
  "Các khung thời gian phải đồng thuận.",
  "Xác định các đường trendline quan trọng và theo dõi phản ứng giá tại các vùng đó.",
  "Chờ xác nhận sóng hồi, để tối ưu điểm vào lệnh đẹp.",
  "Chờ dấu hiệu xác nhận Price Action.",
  "Không cố tình đoán đỉnh và đoán đáy.",
  "Mức rủi ro, mức thưởng và xác suất.",
  "Dùng fibo để xác định hiệu lực con sóng còn mạnh không.",
  "Tối ưu điểm vào lệnh đẹp ở khung thời gian nhỏ.",
  "Tính toán cho thật kĩ mức rủi ro cho phép.",
  "Phải có chiến lược rõ ràng trước khi vào lệnh."
];

export const duringTradeExecution = [
  "Quản lý lệnh giao dịch theo cấu trúc sóng hoặc theo fibo, không đặt stoploss quá sát.",
  "Không để cảm xúc chi phối vào và chốt lời non, chỉ đóng lệnh khi đã đạt đủ target đặt ra trước đó hoặc chạm stoploss.",
  "Không vội vàng dời stoploss ngay sau khi giá vừa mới chạy một xíu.",
  "Không cố gắng tìm cơ hội vào lệnh ngay sau khi chạm stoploss.",
  "Tuyệt đối không đóng lệnh bằng tay khi mà giá đang chạy.",
  "Chỉ giao dịch 1 chiều theo xu hướng chính."
];

export const psychologicalMastery = [
  "Tiền dùng cho trading và đầu tư phải là tiền nhàn rỗi.",
  "Phải rất giỏi về phân tích kĩ thuật.",
  "Học tập có chiều sâu, nhìn lại bản thân và sửa mình.",
  "Nên tập trung vào một số ít đồng coin và chỉ giao dịch tập trung ở khung H4.",
  "Quản trị vốn, quản trị rủi ro cho thật tốt để khi bấm xác nhận vào lệnh xong thì việc còn lại là của thị trường."
];
