
export const mindsetDeveloper = [
  {
    title:
      "Xác định mỗi phần tử trong một danh sách nên có một key duy nhất",
    content: [
      "Khóa chính (key) là một thuộc tính đặc biệt được sử dụng để xác định mỗi phần tử. Key giúp React nhận biết được phần tử nào đã thay đổi, thêm vào hoặc xóa đi, từ đó tối ưu hiệu suất khi cập nhật giao diện người dùng.",
      "Khi bạn tạo một danh sách các phần tử trong React, bạn nên cung cấp một key duy nhất cho mỗi phần tử. Key thường được lấy từ một thuộc tính duy nhất của phần tử, chẳng hạn như id hoặc index của phần tử trong mảng.",
      "Việc sử dụng key giúp React xác định chính xác phần tử nào đã thay đổi khi danh sách được cập nhật, từ đó chỉ cập nhật những phần tử cần thiết thay vì re-render toàn bộ danh sách, giúp cải thiện hiệu suất của ứng dụng."
    ]
  },
  {
    title:
      "Sử dụng dict để lưu trữ dữ liệu thay vì array",
    content: [
      "Dict (hoặc object trong JavaScript) là một cấu trúc dữ liệu cho phép bạn lưu trữ dữ liệu dưới dạng cặp key-value.\nViệc sử dụng dict giúp bạn truy cập và cập nhật dữ liệu nhanh chóng hơn so với việc sử dụng array, đặc biệt khi bạn cần tìm kiếm theo một khóa cụ thể.",
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
  {
    title:
      "Luồng xử lý dữ liệu trong React",
    content: [
      "Call api để lấy dữ liệu từ server và lưu trữ nó trong state của component cha.",
      "Xử lý dữ liệu nếu cần thiết (ví dụ: lọc, sắp xếp) trước khi truyền nó xuống component con.",
      "Truyền dữ liệu từ component cha xuống component con thông qua props.",
      "Component con nhận dữ liệu và hiển thị nó trên giao diện người dùng.",
      "Nếu có sự thay đổi dữ liệu (ví dụ: người dùng tương tác), component con có thể gọi một hàm callback được truyền từ component cha để cập nhật dữ liệu trong state của component cha.",
      "Component cha sẽ re-render và truyền dữ liệu mới xuống component con, từ đó cập nhật giao diện người dùng."
    ]
  },
  {
    title:
      "Xử lý luồng nghiệp vụ theo tài liệu được cung cấp",
    content: [
        "Đọc và hiểu tài liệu để nắm bắt yêu cầu và luồng nghiệp vụ cần thực hiện.",
        "Phân tích luồng nghiệp vụ để xác định các bước cần thiết để thực hiện yêu cầu.",
        "Lập kế hoạch và thiết kế giải pháp dựa trên luồng nghiệp vụ đã phân tích.",
        "Triển khai giải pháp theo kế hoạch đã thiết kế, đảm bảo tuân thủ các yêu cầu và luồng nghiệp vụ đã xác định.",
        "Kiểm tra và xác nhận rằng giải pháp đã triển khai đáp ứng đầy đủ yêu cầu và luồng nghiệp vụ đã xác định."
    ]
  },
  {
    title: "CRUD là gì?",
    content: [
      "CRUD là viết tắt của Create (Tạo), Read (Đọc), Update (Cập nhật) và Delete (Xóa). Đây là bốn thao tác cơ bản để quản lý dữ liệu trong một ứng dụng.",
      "Create: Thao tác tạo mới một bản ghi hoặc đối tượng trong cơ sở dữ liệu.",
      "Read: Thao tác đọc hoặc truy xuất dữ liệu từ cơ sở dữ liệu để hiển thị hoặc sử dụng trong ứng dụng.",
      "Update: Thao tác cập nhật hoặc sửa đổi dữ liệu đã tồn tại trong cơ sở dữ liệu.",
      "Delete: Thao tác xóa một bản ghi hoặc đối tượng khỏi cơ sở dữ liệu."
    ]
  },
  {
    title: "Testcase là gì?",
    content: [
      "Testcase là các trường hợp kiểm thử của dữ liệu được sử dụng để kiểm thử một phần mềm.",
      "Mỗi test case thường bao gồm các bước thực hiện, dữ liệu đầu vào và kỳ vọng đầu ra.",
      "Test case giúp đảm bảo rằng phần mềm hoạt động đúng như mong đợi trong các tình huống khác nhau.",
      "Dev cần phải nghĩ đến các test case để đảm bảo rằng code của mình hoạt động đúng và không gây ra lỗi không mong muốn."
    ]
  }
];
