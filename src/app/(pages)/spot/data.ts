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
