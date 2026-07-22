export const mindsetDeveloper = [
  {
    title: "Các bước thực hiện một task Frontend",
    content: [
      "1. Làm giao diện theo thiết kế \n\n 2. Tạo mockup data để hiển thị giao diện, đảm bảo mockup chính là đầu vào mong muốn \n\n 3. Call API để lấy dữ liệu thật, lưu data vào state được gọi là dữ liệu nguyên thủy, convert dữ liệu nguyên thủy thành dữ liệu hiển thị, dữ liệu hiển thị là dữ liệu được render ra giao diện "
    ]
  },
  {
    title: "Sử dụng dict (object) để lưu trữ dữ liệu theo cặp key-value",
    content: [
      "Dict (object) là cấu trúc dữ liệu lưu trữ theo cặp key-value.\nGiúp truy cập, cập nhật và tìm kiếm dữ liệu theo key nhanh hơn so với array.\n\n Ngoài ra thì lưu bằng dict còn giúp code dễ đọc hơn, dễ bảo trì hơn, dễ mở rộng hơn so với lưu bằng array."
    ]
  },
  {
    title:
      "Sử dụng useRef để gọi hàm trong component con mà không cần phải truyền qua props",
    content: [
      "Khi cần gọi một hàm trong component con mà không muốn truyền qua props.\nCó thể sử dụng useRef để tạo một ref và gán nó cho component con.\nSau đó truy cập và gọi hàm đó thông qua ref."
    ]
  },
  {
    title:
      "Sử dụng useEffect để kích hoạt hàm onChange khi một giá trị thay đổi",
    content: [
      "Khi muốn kích hoạt hàm onChange khi giá trị thay đổi, useEffect thường được sử dụng trong component con để theo dõi sự thay đổi của state hoặc props.\nKhi dependency thay đổi, useEffect sẽ chạy và gọi hàm onChange được truyền từ component cha thông qua props.\nĐiều này giúp component cha nhận và xử lý dữ liệu thay đổi."
    ]
  },
  {
    title: "Bài toán update một state trong React",
    content: [
      "1. Đối tượng cần update state là gì? Mảng hay Object?\n\n 2. Khóa (key) để xác định phần tử cần update là gì?\n\n 3. Cần update state theo cách nào? Thêm, sửa hay xóa? \n\n 4. Có bao nhiêu luật khác nhau để update state? \n\n 5. Áp dụng luật update state phù hợp với từng trường hợp cụ thể. \n\n 6. Sau khi áp dụng cho tất cả các luật state mới trông như thế nào?"
    ]
  }
];

[
  {
    actionType: "click",
    actionName: "click",
    actionDescription: "Click vào menu",
  },
  {
    actionType: "hover",
    actionName: "hover",  
  actionDescription: "Hover vào menu",
  },
  {
    actionType: "focus",
    actionName: "focus",
    actionDescription: "Focus vào menu",
  }
]