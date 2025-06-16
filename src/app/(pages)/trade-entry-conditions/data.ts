export const conditionForEnteringATrade = [
  "Phân tích đa khung thời gian trên RSI => Xác định được xu hướng của con sóng chính và con sóng thứ cấp, xác định xem ta đang ở đâu của con sóng chính và con sóng phụ.",
  "Xác định khung thời gian giao dịch phải đồng thuận với các khung thời gian lớn.",
  "Chờ xác nhận sóng hồi ở khung nhỏ để tối ưu điểm vào lệnh đẹp.",
  "Chờ đợi và quan sát các vùng cản quan trọng mà giá có thể phản ứng tại đó đặc biệt là vùng cản ở khung thời gian lớn.",
  "Phân tích tương quan lực mua lực bán để tìm điểm vào lệnh. Các mô hình tích lũy lực RSI, trường hợp RSI vượt các vùng 80 hoặc 20. Ưu tiên các mẫu hình đẹp, RSI hội tụ hoặc phân kì, đỉnh đáy cao dần,...",
  "Chờ dấu hiệu xác nhận Price Action.",
  "Không cố tình đoán đỉnh, đoán đáy.",
  "Tính toán ước lượng mức thưởng và rủi ro, xác xuất thành công xem có đáng vào lệnh này hay là không. Tức phải xác định rõ SL TP trước khi vào lệnh.",
  "Dùng fibo để xác định hiệu lực con sóng còn mạnh không.",
  "Tính toán trước các trường hợp có thể xảy ra để có cách xử lý cũng như quản lý lệnh. Nếu giá đi đúng dự phóng thì sẽ xử lý như thế nào, sai dự phóng thì sẽ xử lý như thế nào. Đưa ra chiến lược rõ ràng."
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
export const plan = [
  "Nếu xu hướng tăng: mua-giữ dài, mua-lướt ngắn, đứng ngoài(cuối sóng).",
  "Nếu xu hướng giảm: bán-giữ dài, bán-lướt ngắn, đứng ngoài(cuối sóng).",
  "Nếu thị trường sideway: mua-lướt ngắn, bán-lướt ngắn, đứng ngoài."
];
export const basicOrder = [
  "Lệnh đuổi(stop order): Áp dụng khi thị trường mạnh, giao dịch thuận xu hướng. Khi mua lên, đặt lệnh phía trên mức cản. Khi bán xuống đặt lệnh phía dưới mức cản. Loại lệnh này rủi ro cao, dễ bị mắc cạm bẫy.",
  "Lệnh chờ(limit order): Áp dụng khi thị trường yếu ( khi điều chỉnh) hay chưa hình thành xu hướng. Khi mua lên, chờ nhịp sóng hồi đặt lệnh phía trên mức đáy cũ tạo ra trước đó, khi bán xuống, chờ nhịp sóng hồi đặt lệnh phía dưới mức đỉnh cũ tạo ra trước đó",
  "Lệnh thị trường(maket order): Áp dụng khi quan sát và thấy đã đạt tiêu chí vào lệnh, lệnh thị trường nằm trung gian giữa lệnh đuổi và lệnh chờ trong vùng mục tiêu giao dịch, cần hạn chế loại lệnh này để tránh dẫn đến giao dịch quá độ (overtrade)",
  "Lệnh cắt lỗ(stop loss order): Lệnh này bắt buộc phải đặt để bảo đảm mức thua lỗ (rủi ro) trong phạm vi xác định.Sử dụng lệnh này cần dựa trên các nguyên tắc trong hệ thống giao dịch.",
  "Lệnh chốt lời(take profit order): Lệnh này dùng để đóng trạng thái, hiện thực hoá lợi nhuận khi giá đạt đến mực tiêu. Lệnh được đặt ở gần mức cản(non hơn chút) tuỳ thuộc vào kinh nghiệm hay hình thái của thị trường."
];
export const strategy = [
  "Dò sóng: là tham gia thị trường với một khối lượng nhỏ trong tổng khối lượng dự kiến, giúp cho ta có cảm giác bám sát thị trường, chuẩn bị cho việc nhồi thêm lệnh nếu như thị trường đi đúng kịch bản đề ra.",
  "Bao vây: là khi thị trường đã đi đúng kế hoạch, khi ấy lệnh chờ có thể được khớp, hoặc có thể vào lệnh thị trường nếu lệnh chờ không được khớp",
  "Nhồi lệnh: là khi thị trường có xu hướng mạnh, thì ta sẽ gia tăng thêm vị thế giúp tối ưu hóa lợi nhuận, cách nhồi lệnh là đặt lệnh chờ con sóng điều chỉnh, hoặc đặt lệnh đuổi khi giá phá qua cản.",
  "Nhả lệnh: là khi thấy sóng suy yếu, thì ta sẽ giảm bớt vị thế đang nắm giữ để chốt một phần lợi nhuận, giảm thiểu rủi ro. Khi thị trường điều chỉnh xong thì có thể gia tăng vị thế trở lại.",
  "Đóng lệnh: là khi giá đã đạt được mục tiêu chốt lời thì ta đặt lệnh chốt lời (takeprofit), hoặc giá đi ngược dự phóng thì ta đặt lệnh cắt lỗ (stoploss)",
  "DCA dài hạn: áp dụng chiến lược này khi có RSI khung 1W về vùng 30-40, đi vol trung bình chia làm nhiều lần gom",
  "DCA trung hạn: áp dụng chiến lược này khi có chỉ số sợ hãi về dưới mức 20 hoặc RSI khung 3D về vùng 30-40, đi vol trung bình",
  "DCA ngắn hạn: áp dụng chiến lược này khi có RSI khung H8 về vùng 30, đi với vol nhỏ"
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
  "Xác định xu hướng của thị trường - kịch bản của thị trường",
  "Xác định sóng chính, sóng thứ cấp (mục đích là tìm kiếm khung thời gian giao dịch)",
  "Tìm điểm vào lệnh",
  "Xác định điểm chốt lời - Quản lý lệnh (1% - 2%)"
];

export const imagesCondition = [
  "/beautiful-modal/1.Xu hướng tăng.png",
  "/beautiful-modal/2.Bắt đáy khi tạo đáy cao dần.png",
  "/beautiful-modal/3.Bắt sóng hồi của sóng tăng trước đó.png",
  "/beautiful-modal/4.Điểm vào lệnh phá trendline.png",
];
