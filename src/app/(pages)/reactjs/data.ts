
export const reactHooks = [
  {
    title: "useState hook",
    content: [
      "useState là một hook trong React dùng để quản lý state trong functional component.\n\n\
Cú pháp:\n\
const [state, setState] = useState(initialState);\n\n\
Trong đó:\n\
- state: giá trị hiện tại của state\n\
- setState: hàm dùng để cập nhật state\n\
- initialState: giá trị khởi tạo\n\n\
Cách hoạt động:\n\
- Khi gọi setState, React sẽ lên lịch cập nhật state và re-render component.\n\
- Việc cập nhật state là bất đồng bộ và có thể được batching để tối ưu hiệu năng.\n\
- Khi state thay đổi, component sẽ render lại với giá trị mới.\n\n\
Lưu ý khi dùng state là object hoặc array:\n\
- React sẽ thay thế toàn bộ state cũ bằng state mới.\n\
- Cần dùng spread operator (...) để giữ lại dữ liệu cũ nếu chỉ muốn cập nhật một phần.\n\
Ví dụ:\n\
setState(prev => ({ ...prev, name: 'new name' }));\n\n\
Functional update:\n\
- Khi state phụ thuộc vào state trước đó, nên dùng callback:\n\
setState(prev => prev + 1);\n\n\
Ưu điểm:\n\
- Giúp quản lý trạng thái đơn giản trong functional component.\n\
- Dễ tách logic và tái sử dụng.\n\
- Là nền tảng cho các hook và state management trong React.\n"
    ]
  },
  {
    title: "useEffect hook",
    content: [
     "Hook useEffect trong React dùng để xử lý side effects trong functional component (như gọi API, thao tác DOM, subscribe event,...).\n\n\
Cú pháp:\n\
useEffect(() => {\n\
  // side effect code\n\
  return () => {\n\
    // cleanup (nếu có)\n\
  };\n\
}, [dependencies]);\n\n\
Cách hoạt động:\n\
- Chạy sau khi component render xong.\n\
- Chạy lại khi một giá trị trong dependency array thay đổi.\n\
- Nếu dependency array rỗng [] thì chỉ chạy 1 lần sau mount.\n\
- Nếu không truyền dependency array thì chạy sau mọi lần render.\n\n\
Cleanup function:\n\
- Được trả về trong useEffect.\n\
- Chạy trước khi component unmount hoặc trước khi effect chạy lại.\n\
- Dùng để hủy subscription, clear timer, remove event listener.\n\n\
Ví dụ:\n\
useEffect(() => {\n\
  const id = setInterval(() => {}, 1000);\n\
  return () => clearInterval(id);\n\
}, []);\n\n\
Lưu ý:\n\
- useEffect giúp tách logic side effect khỏi render.\n\
- Tránh gọi API hoặc thao tác DOM trực tiếp trong render.\n\
- Dependency array cần khai báo đầy đủ để tránh bug stale state.\n\n\
Ưu điểm:\n\
- Quản lý side effects rõ ràng.\n\
- Kiểm soát vòng đời component trong functional component.\n\
- Giúp tối ưu hiệu năng bằng cách hạn chế chạy lại không cần thiết.\n"
    ]
  },
  {
    title: "useRef hook",
    content: [
     "Hook useRef trong React dùng để tạo một tham chiếu (reference) có thể giữ giá trị xuyên suốt các lần re-render mà không làm component re-render lại khi thay đổi.\n\n\
Cú pháp:\n\
const myRef = useRef(initialValue);\n\n\
Trong đó:\n\
- initialValue: giá trị khởi tạo\n\
- myRef: object có thuộc tính .current để lưu giá trị\n\n\
Cách hoạt động:\n\
- useRef trả về một object { current: ... }\n\
- Giá trị trong .current có thể thay đổi nhưng không gây re-render\n\
- Giá trị được giữ nguyên giữa các lần render\n\n\
Use cases:\n\
1. Truy cập DOM trực tiếp:\n\
const inputRef = useRef(null);\n\
<input ref={inputRef} />;\n\n\
2. Lưu giá trị không cần re-render:\n\
myRef.current = value;\n\n\
3. Giữ giá trị trước đó (previous value)\n\
\n\
Lưu ý:\n\
- Thay đổi useRef không trigger re-render\n\
- Không nên dùng useRef thay cho state nếu UI cần cập nhật\n\
- Có thể dùng để lưu timer, interval, hoặc biến tạm\n\n\
Ưu điểm:\n\
- Truy cập DOM dễ dàng\n\
- Lưu dữ liệu giữa renders\n\
- Tránh re-render không cần thiết\n"
    ]
  },
  {
    title: "useMemo hook",
    content: [
      "Hook useMemo trong React dùng để ghi nhớ (memoize) một giá trị được tính toán từ hàm, giúp tối ưu hiệu năng bằng cách tránh tính toán lại không cần thiết khi component re-render.\n\n\
Cú pháp:\n\
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);\n\n\
Trong đó:\n\
- computeExpensiveValue: hàm tính toán giá trị\n\
- [a, b]&#58; dependency array\n\
- memoizedValue: giá trị đã được ghi nhớ\n\n\
Cách hoạt động:\n\
- useMemo chỉ tính lại giá trị khi một dependency thay đổi\n\
- Nếu không thay đổi, React trả về giá trị đã cache\n\n\
Use cases:\n\
- Tối ưu các phép tính nặng (sorting, filtering, computation phức tạp)\n\
- Tránh tính toán lại khi re-render không cần thiết\n\n\
Lưu ý:\n\
- useMemo chỉ tối ưu performance, không dùng để tạo side effects\n\
- Không nên lạm dụng cho các tính toán đơn giản\n\
- Không đảm bảo tuyệt đối tránh re-render, chỉ tối ưu giá trị\n\n\
Ưu điểm:\n\
- Giảm chi phí tính toán\n\
- Tăng hiệu năng ứng dụng\n\
- Hữu ích khi truyền giá trị phức tạp xuống component con\n"
    ]
  },
  {
    title: "useCallback hook",
    content: [

"Hook useCallback trong React dùng để ghi nhớ (memoize) một hàm, giúp tối ưu hiệu năng bằng cách giữ nguyên tham chiếu của hàm giữa các lần component re-render và tránh tạo lại hàm không cần thiết.\n\n\
Cú pháp:\n\
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);\n\n\
Trong đó:\n\
- () => doSomething(a, b): hàm callback cần ghi nhớ\n\
- [a, b]&#58; dependency array\n\
- memoizedCallback: hàm đã được ghi nhớ\n\n\
Cách hoạt động:\n\
- useCallback chỉ tạo lại hàm khi một dependency thay đổi\n\
- Nếu dependencies không thay đổi, React trả về cùng một hàm đã được cache\n\n\
Use cases:\n\
- Truyền callback xuống component con kết hợp với React.memo\n\
- Tránh tạo lại hàm khi component re-render\n\
- Làm dependency cho các Hook như useEffect hoặc useMemo\n\n\
Lưu ý:\n\
- useCallback chỉ tối ưu performance, không thay đổi logic của hàm\n\
- Không nên lạm dụng cho các hàm đơn giản hoặc component ít re-render\n\
- Chỉ mang lại hiệu quả khi việc giữ nguyên tham chiếu của hàm thực sự cần thiết\n\n\
Ưu điểm:\n\
- Giảm số lần tạo hàm mới\n\
- Hạn chế re-render không cần thiết của component con\n\
- Cải thiện hiệu năng trong các component có nhiều lần render\n"

    ]
  },
  {
    title: "Common Component",
    content: [
      "Tư duy tạo component common trong React là thiết kế các component có thể tái sử dụng, linh hoạt và tách biệt logic để dùng lại trong nhiều nơi của ứng dụng.\n\n\
Nguyên tắc chính:\n\
- Tái sử dụng: component dùng được ở nhiều màn hình khác nhau\n\
- Linh hoạt: điều khiển bằng props thay vì hard-code\n\
- Tách biệt trách nhiệm: mỗi component chỉ làm một nhiệm vụ rõ ràng\n\
- Không phụ thuộc context cụ thể của một màn hình\n\n\
Cách xây dựng:\n\
- Thiết kế UI theo dạng base (Button, Input, Modal, Card...)\n\
- Sử dụng props để tùy biến: text, style, behavior\n\
- Hạn chế logic nghiệp vụ trong common component\n\
- Ưu tiên composition thay vì viết nhiều biến thể riêng lẻ\n\n\
Ví dụ tư duy:\n\
- Thay vì tạo nhiều Button khác nhau → tạo 1 Button với props type, size, loading\n\
- Thay vì Input riêng cho từng form → tạo Input dùng chung + validation bên ngoài\n\n\
Lợi ích:\n\
- Giảm duplication code\n\
- Dễ bảo trì và mở rộng\n\
- Đồng nhất UI/UX toàn hệ thống\n\
- Tăng tốc độ phát triển sản phẩm\n"
    ]
  },
  {
    title: "Key",
    content: [
      "Sử dụng key trong React\n\n\
Key là một thuộc tính đặc biệt dùng khi render danh sách (list) các phần tử trong React để giúp React xác định từng phần tử một cách duy nhất.\n\n\
Cách dùng:\n\
array.map(item => (\n\
  <Component key={item.id} />\n\
))\n\n\
Vai trò của key:\n\
- Giúp React nhận diện chính xác từng phần tử trong danh sách\n\
- Tối ưu việc re-render (chỉ cập nhật phần tử thay đổi)\n\
- Giữ đúng state của từng component trong list\n\n\
Nguyên tắc sử dụng:\n\
- Key phải là giá trị duy nhất (unique)\n\
- Ưu tiên dùng id từ database\n\
- Không nên dùng index làm key nếu list có thể thay đổi (thêm/xóa/sắp xếp)\n\n\
Ví dụ tốt:\n\
key={item.id}\n\n\
Ví dụ nên tránh:\n\
key={index}\n\
(nếu danh sách có thể thay đổi thứ tự)\n\n\
Lưu ý:\n\
- Key chỉ có ý nghĩa trong phạm vi danh sách\n\
- Không truyền key vào props của component (React tự xử lý)\n"
    ]
  }

];
