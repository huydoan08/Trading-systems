
export const mindsetDeveloper = [
  {
    title:
      "Nguyên tắc để debug hiệu quả nhanh chóng",
    content: [
      "Phải hiểu rõ vấn đề đang gặp phải.",
      "Phải tái hiện được chính xác bước xảy ra tại bước nào.",
      "Không đoán mò nguyên nhân là gì, mà phải debug, khoanh vùng vị trí xảy ra lỗi, đọc hiểu code để tìm ra nguyên nhân gốc rễ.",
      "Sửa code để fix bugs cần đảm bảo ít ảnh hưởng tới logic cũ, ít sửa vào code cũ.",
      "Sau khi sửa code để fix bugs xong cần self test lại để đảm bảo bugs đã được fix và không hề ảnh hưởng tới những logic cũ."
    ]
  },
  {
    title: "Thủ thuật sử dụng các tab trên browser",
    content: [
      "Sử dụng breakpoint, callStack trên tab source.",
      "Sử dụng tab console để in ra giá trị của biến, các đoạn code xử lý logic có return giá trị để xem giá trị trả ra.",
      "Sử dụng tab network để xem response trả ra từ api, xem file đang gọi tới api đó."
    ]
  },
  {
    title: "Debug không hiển thị đúng dữ liệu trên giao diện ?",
    content: [
      "Kiểm tra xem dữ liệu có được nạp vào component đúng cách chưa",
      "Kiểm tra xem đã có dữ liệu trước khi render giao diện chưa",
      "Debug để xem nguyên nhân mà dữ liệu bị sai hoặc không được nạp vào component",
    ]
  }
];
