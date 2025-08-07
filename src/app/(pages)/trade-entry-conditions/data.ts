export const conditionForEnteringATrade = [
  "Bộ khung thời gian giao dịch là ( H1 H4 1D ).",
  "Mỗi lệnh giao dịch chỉ (10$) ~ (2%-3%).",
  "Chỉ giao dịch BTC vĩnh cửu",
  "Có các mô hình tích lũy lực RSI (RSI hội tụ hoặc phân kì, RSI vượt ra ngoài các vùng 80 hoặc 20), Các mẫu hình đẹp (Đỉnh đáy cao dần hoặc thấp dần, Price Action, Quét râu nến tại vùng cản).",
  "Không cố tình đoán đỉnh, đoán đáy."
];
export const exitTrade = [
  "RSI khung giao dịch lực suy yếu ( cắt xuống đường trung bình chậm, chưa vượt ra ngoài vùng 80 và tạo đỉnh thấp dần )",
  "Cấu trúc sóng không giữ được trên fibo 0.382",
  "Xuất hiện cây nến nhấn chìm giảm"
];
export const RulesTrade = [
  "1. Phân tích đồ thị, ghi chép nhật kí giao dịch, tâm lý, hành vi của bản thân mỗi ngày.",
  "2. Không giao dịch future, chỉ giao dịch spot 2 đồng coin là BTC, ETH.",
  "3. Khung giao dịch H4, H8, 1D, 3D.",
  "4. Không vào lệnh khi chưa đáp ứng các tiêu chí vào lệnh.",
  "5. Không thoát lệnh khi chưa đáp ứng các tiêu chí thoát lệnh.",
  "6. Kiên nhẫn chờ đợi điểm vào lệnh đẹp.",
  "7. Giao dịch khung H4, H8 thì buộc phải đặt Stoploss (3% mỗi lệnh).",
  "8. Không mở tài khoản ra xem giá, lời lỗ thường xuyên.",
  "9. Không chia sẻ bất kì nhận định nào, hay system giao dịch của mình cho người khác biết.",
  "10. Đào sâu học tập mỗi ngày, tu tập hướng vào bên trong bản thân để quan sát mỗi ngày."
];

export const beforeOrderNotes = [

  "Bước 1: Kiểm tra thật kĩ giá mua/bán",
  "Bước 2: Kiểm tra thật kĩ thông tin giao dịch, nội dung giao dịch",
  "Bước 3: Thực hiện giao dịch",
  "Bước 4: Kiểm tra xác nhận lệnh đã nhận đủ tiền, đủ coin",
  "Bước 5: Bấm xác nhận kết thúc giao dịch."
];
export const basicOrder = [
  "Lệnh đuổi(stop order): Áp dụng khi thị trường mạnh, giao dịch thuận xu hướng. Khi mua lên, đặt lệnh phía trên mức cản. Khi bán xuống đặt lệnh phía dưới mức cản. Loại lệnh này rủi ro cao, dễ bị mắc cạm bẫy.",
  "Lệnh chờ(limit order): Áp dụng khi thị trường yếu ( khi điều chỉnh) hay chưa hình thành xu hướng. Khi mua lên, chờ nhịp sóng hồi đặt lệnh phía trên mức đáy cũ tạo ra trước đó, khi bán xuống, chờ nhịp sóng hồi đặt lệnh phía dưới mức đỉnh cũ tạo ra trước đó",
  "Lệnh thị trường(maket order): Áp dụng khi quan sát và thấy đã đạt tiêu chí vào lệnh, lệnh thị trường nằm trung gian giữa lệnh đuổi và lệnh chờ trong vùng mục tiêu giao dịch, cần hạn chế loại lệnh này để tránh dẫn đến giao dịch quá độ (overtrade)",
  "Lệnh cắt lỗ(stop loss order): Lệnh này bắt buộc phải đặt để bảo đảm mức thua lỗ (rủi ro) trong phạm vi xác định.Sử dụng lệnh này cần dựa trên các nguyên tắc trong hệ thống giao dịch.",
  "Lệnh chốt lời(take profit order): Lệnh này dùng để đóng trạng thái, hiện thực hoá lợi nhuận khi giá đạt đến mực tiêu. Lệnh được đặt ở gần mức cản(non hơn chút) tuỳ thuộc vào kinh nghiệm hay hình thái của thị trường."
];
export const strategy = [
  "Chọn tài sản có giá trị, vốn hoá lớn ( BTC ).",
  "Khi RSI khung 1D || 3D || 1W về vùng 30-40.",
  "Fear Index về dưới mức 20.",
  "Các khung thời gian nhỏ đồng thuận tăng."
];

export const BotHunter = [
  "buy BTC market V USDT",
  "buylimit BTC atP V USDT tpP",
  "buylimit BTC atP V USDT tp30%",
  "buylimit BTC atP V USDT tpP slP",
  "buylimit BTC atP V USDT tp30% sl-3%",
  "buystop BTC atP V USDT tpP",
  "buystop BTC atP V USDT tp30%",
  "buystop BTC atP V USDT tpP slP",
  "buystop BTC atP V USDT tp30% sl-3%",
  "sell V BTC market USDT",
  "sell V BTC P USDT",
  "sellstop V BTC P USDT",
  "sellstop V BTC -3% USDT",
  "sellstop V BTC P USDT buy P",
  "del BTC",
  "del sell BTC",
  "del buy BTC",
  "del sell P BTCUSDT",
  "del buy P BTCUSDT",
  "del all"
];
export const StepOrderData = [
  "Quan sát RSI ở các khung thời gian lớn để nhìn ra xu hướng chính.",
  "Quan sát RSI ở khung H4 để tìm kiếm cơ hội vào lệnh.",
  "Xác định điểm chốt lời - điểm cắt lỗ (3%)"
];

export const imagesCondition = [
  "/beautiful-modal/1.Xu hướng tăng.png",
  "/beautiful-modal/2.Bắt đáy khi tạo đáy cao dần.png",
  "/beautiful-modal/3.Bắt sóng hồi của sóng tăng trước đó.png",
  "/beautiful-modal/4.Điểm vào lệnh phá trendline.png",
];
