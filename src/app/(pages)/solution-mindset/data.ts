export const mindsetDeveloper = [
  {
    title: "Sử dụng dict (object) để lưu trữ dữ liệu theo cặp key-value",
    content: [
      "Dict (object) là cấu trúc dữ liệu lưu trữ theo cặp key-value, giúp truy cập, cập nhật và tìm kiếm dữ liệu theo key nhanh hơn so với array."
    ]
  },
  {
    title:
      "Sử dụng useRef để gọi hàm trong component con mà không cần phải truyền qua props",
    content: [
      "Khi bạn cần gọi một hàm trong component con mà không muốn truyền qua props, bạn có thể sử dụng useRef để tạo một ref và gán nó cho component con. Sau đó, bạn có thể truy cập vào hàm đó thông qua ref."
    ]
  },
  {
    title:
      "Sử dụng useEffect để kích hoạt hàm onChange khi một giá trị thay đổi",
    content: [
"Khi muốn kích hoạt một hàm onChange khi giá trị thay đổi, useEffect thường được sử dụng trong component con để theo dõi sự thay đổi của state hoặc props.",
"Khi dependency thay đổi, useEffect trong component con sẽ chạy và gọi hàm onChange được truyền từ component cha thông qua props, giúp component cha nhận và xử lý dữ liệu thay đổi."
    ]
  },
];
