export const conditionForEnteringATrade = [
  "Các mẫu hình đúng tiêu chuẩn, mẫu hình đẹp.",
  "Các khung thời gian phải đồng thuận.",
  "Chờ xác nhận sóng hồi để tối ưu điểm vào lệnh đẹp.",
  "Chờ dấu hiệu xác nhận Price Action.",
  "Không cố tình đoán đỉnh, đoán đáy.",
  "Xác định trendline khi giá phá vỡ xu hướng trước đó.",
  "Mức rủi ro, mức thưởng và xác suất.",
  "Dùng fibo để xác định hiệu lực con sóng còn mạnh không.",
  "Tối ưu điểm vào lệnh đẹp ở khung thời gian nhỏ",
  "Chỉ số sợ hãi về dưới mức 20",
];

export const beforeOrderNotes = [
  "Kiễn nhẫn chờ giá lọt vào vùng cản, hỗ trợ & kháng cự.",
  "Chờ đợi tín hiệu như cạm bẫy, quá đà, sự thất bại của mẫu hình, mẫu nến.",
  "Nhìn vào RSI, đừng quá tập trung nhìn vào giá, hãy nhìn vào RSI và nhìn xu hướng.",
  "Xác định thời gian giữ lệnh dự kiến."
];
export const plan = [
  "Nếu xu hướng tăng: mua-giữ dài, mua-lướt ngắn, đứng ngoài(cuối sóng).",
  "Nếu xu hướng giảm: bán-giữ dài, bán-lướt ngắn, đứng ngoài(cuối sóng).",
  "Nếu thị trường sideway: mua-lướt ngắn, bán-lướt ngắn, đứng ngoài."
];
export const basicOrder = [
  "Lệnh đuổi: Áp dụng khi thị trường mạnh, giao dịch thuận xu hướng. Khi mua lên, đặt lệnh phía trên mức cản. Khi bán xuống đặt lệnh phía dưới mức cản. Loại lệnh này rủi ro cao, dễ bị mắc cạm bẫy.",
  "Lệnh chờ: Áp dụng khi thị trường yếu ( khi điều chỉnh) hay chưa hình thành xu hướng. Khi mua lên, chờ nhịp sóng hồi đặt lệnh phía trên mức đáy cũ tạo ra trước đó, khi bán xuống, chờ nhịp sóng hồi đặt lệnh phía dưới mức đỉnh cũ tạo ra trước đó",
  "Lệnh thị trường: Áp dụng khi quan sát và thấy đã đạt tiêu chí vào lệnh, lệnh thị trường nằm trung gian giữa lệnh đuổi và lệnh chờ trong vùng mục tiêu giao dịch, cần hạn chế loại lệnh này để tránh dẫn đến giao dịch quá độ (overtrade)"
];
export const strategy = [
  "Dò sóng: là tham gia thị trường với một khối lượng nhỏ trong tổng khối lượng dự kiến, giúp cho ta có cảm giác bám sát thị trường, chuẩn bị cho việc nhồi thêm lệnh nếu như thị trường đi đúng kịch bản đề ra.",
  "Bao vây: là khi thị trường đã đi đúng kế hoạch, khi ấy lệnh chờ có thể được khớp, hoặc có thể vào lệnh thị trường nếu lệnh chờ không được khớp",
  "Nhồi lệnh: là khi thị trường có xu hướng mạnh, thì ta sẽ gia tăng thêm vị thế giúp tối ưu hóa lợi nhuận, cách nhồi lệnh là đặt lệnh chờ con sóng điều chỉnh, hoặc đặt lệnh đuổi khi giá phá qua cản.",
  "Nhả lệnh: là khi thấy sóng suy yếu, thì ta sẽ giảm bớt vị thế đang nắm giữ để chốt một phần lợi nhuận, giảm thiểu rủi ro. Khi thị trường điều chỉnh xong thì có thể gia tăng vị thế trở lại.",
  "Đóng lệnh: là khi giá đã đạt được mục tiêu chốt lời thì ta đặt lệnh chốt lời (takeprofit), hoặc giá đi ngược dự phóng thì ta đặt lệnh cắt lỗ (stoploss)"
];

export const imagesCondition = [
  "/beautiful-modal/1.Xu hướng tăng.png",
  "/beautiful-modal/2.Bắt đáy khi tạo đáy cao dần.png",
  "/beautiful-modal/3.Bắt sóng hồi của sóng tăng trước đó.png",
  "/beautiful-modal/4.Điểm vào lệnh phá trendline.png",
  "/beautiful-modal/bắt đáy RSI.png"
];
