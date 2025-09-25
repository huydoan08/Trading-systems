export const conditionForEnteringATrade = [
  "Cặp tiền giao dịch là BTC/USDT.",
  "Khung thời gian giao dịch là khung 1D, 3D.",
  "Tìm điểm vào lệnh ở khung H1, H2, H4, H8 và các khung thời gian cần phải đồng thuận tăng.",
  "Có các mô hình tích lũy lực RSI của khung 1D hoặc 3D.",
  "Có dấu hiệu của Price Action, SFP của khung 1D hoặc 3D.",
];
export const exitTrade = [
  "RSI khung giao dịch lực suy yếu ( cắt xuống đường trung bình chậm, chưa vượt ra ngoài vùng 80 và tạo đỉnh thấp dần)",
  "Cấu trúc sóng không giữ được trên fibo 0.382",
  "Xuất hiện cây nến nhấn chìm giảm"
];
export const RulesTrade = [
  "1. Phân tích đồ thị, ghi chép nhật kí giao dịch, tâm lý, hành vi của bản thân mỗi ngày.",
  "2. Khung giao dịch H4, H8, 1D, 3D.",
  "3. Không vào lệnh khi chưa đáp ứng các tiêu chí vào lệnh.",
  "4. Không thoát lệnh khi chưa đáp ứng các tiêu chí thoát lệnh.",
  "5. Kiên nhẫn chờ đợi điểm vào lệnh đẹp.",
  "6. Không mở tài khoản ra xem giá, lời lỗ thường xuyên.",
  "7. Không chia sẻ bất kì nhận định nào, hay system giao dịch của mình cho người khác biết.",
  "8. Đào sâu học tập mỗi ngày, tu tập hướng vào bên trong bản thân để quan sát mỗi ngày."
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
  "Các khung thời gian nhỏ đồng thuận tăng.",
  "Khi BTC đã tăng mạnh, thì tìm altcoin đang ở đáy để tìm kiếm điểm vào lệnh (ETH, BNB, SOL, SUI, PEPE, DOGE, ADA)."
];
export const StepOrderData = [
  "Quan sát RSI ở các khung thời gian lớn để nhìn ra xu hướng chính.",
  "Quan sát RSI ở khung H4 để tìm kiếm cơ hội vào lệnh.",
  "Xác định điểm chốt lời - điểm cắt lỗ (3%)"
];

export const spotIncreaseH4 = [
  "/rsi-h4-beautiful/rsi-h4-01.png",
  "/rsi-h4-beautiful/rsi-h4-05.png",
  "/rsi-h4-beautiful/rsi-h4-09.png",
  "/rsi-h4-beautiful/rsi-h4-10.png",
  "/rsi-h4-beautiful/rsi-h4-12.png",
  "/rsi-h4-beautiful/rsi-h4-13.png",
  "/rsi-h4-beautiful/rsi-h4-14.png",
  "/rsi-h4-beautiful/rsi-h4-15.png",
  "/rsi-h4-beautiful/rsi-h4-16.png"
];

export const spotcatchH4 = [
  "/rsi-h4-beautiful/rsi-h4-02.png",
  "/rsi-h4-beautiful/rsi-h4-03.png",
  "/rsi-h4-beautiful/rsi-h4-04.png",
  "/rsi-h4-beautiful/rsi-h4-06.png",
  "/rsi-h4-beautiful/rsi-h4-06.png",
  "/rsi-h4-beautiful/rsi-h4-08.png",
  "/rsi-h4-beautiful/rsi-h4-17.jpg",
];

export const spotIncrease1D = [
  "/rsi-d-beautiful/rsi-d-02.png",
  "/rsi-d-beautiful/rsi-d-03.png",
  "/rsi-d-beautiful/rsi-d-08.png",
  "/rsi-d-beautiful/rsi-d-09.png",
  "/rsi-d-beautiful/rsi-d-11.png",
];

export const spotcatch1D = [
  "/rsi-d-beautiful/rsi-d-01.png",
  "/rsi-d-beautiful/rsi-d-04.png",
  "/rsi-d-beautiful/rsi-d-05.png",
  "/rsi-d-beautiful/rsi-d-06.png",
  "/rsi-d-beautiful/rsi-d-07.png",
];
