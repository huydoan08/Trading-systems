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
      "Khi muốn kích hoạt một hàm onChange khi một giá trị thay đổi, bạn có thể sử dụng useEffect để theo dõi sự thay đổi của giá trị đó.",
      "Khi giá trị dependency thay đổi, useEffect sẽ chạy và gọi hàm onChange tương ứng.",
      "Hàm này được truyền xuống component con thông qua props, và khi giá trị dependency thay đổi, component con sẽ gọi hàm onChange để thực hiện các tác động cần thiết."
    ]
  },
];
