import { title } from "process";

export const reactHooks = [
  {
    title:
      "useState hook",
    content: [
      "useState là một hook trong React được sử dụng để quản lý trạng thái (state) trong các functional component.",
      "Khi bạn gọi setter function (hàm cập nhật state) được trả về từ useState trong React, nó sẽ lên lịch (schedule) để cập nhật giá trị state của component.",
      "Nếu state là một đối tượng và bạn chỉ cập nhật một phần của đối tượng đó, bạn cần spread operator (...) để giữ lại các phần khác của đối tượng, vì useState sẽ thay thế hoàn toàn giá trị state cũ bằng giá trị mới mà bạn cung cấp.",
      "Sau đó, React sẽ đưa component vào hàng đợi để re-render với giá trị state mới.",
      "Quá trình này thường là bất đồng bộ (asynchronous), và React sẽ gom nhiều lần cập nhật state lại (batching) để tối ưu hiệu năng.",
      "Cách sử dụng useState: const [state, setState] = useState(initialState);",
      "Trong đó, initialState là giá trị ban đầu của state, state là giá trị hiện tại của state, và setState là hàm được sử dụng để cập nhật giá trị của state.",
      "useState giúp bạn quản lý trạng thái của component một cách dễ dàng và hiệu quả, cho phép bạn tạo ra các ứng dụng tương tác và động.",
    ]
  },
  {
    title:
      "useEffect hook",
    content: [
      "Hook useEffect trong React được dùng để thực hiện các tác động phụ (side effects) trong các functional component.",
      "Nó chạy sau khi component đã được render, và bạn có thể chỉ định khi nào nó nên chạy lại bằng cách cung cấp một mảng phụ thuộc (dependency array).",
      "Cách sử dụng useEffect: useEffect(() => { // code thực hiện tác động phụ }, [dependencies]);",
      "Trong đó, dependencies là mảng các phụ thuộc. useEffect sẽ chỉ chạy lại khi một trong các phụ thuộc thay đổi.",
      "useEffect giúp bạn quản lý các tác động phụ một cách hiệu quả, tránh việc gây ra lỗi và tối ưu hiệu suất của ứng dụng bằng cách chỉ chạy lại khi cần thiết.",
      "Khi sử dụng useEffect, bạn có thể thực hiện các tác động phụ như gọi API, đăng ký sự kiện, hoặc cập nhật DOM, kể cả gọi hàm, mà không cần phải lo lắng về việc gây ra lỗi hoặc re-render không cần thiết của component."
    ]
  },
  {
    title:
      "useRef hook",
    content: [
      "Hook useRef trong React được dùng để tạo một tham chiếu (reference) có thể giữ giá trị qua các lần re-render của component. useRef thường được sử dụng để truy cập trực tiếp vào DOM hoặc để lưu trữ giá trị mà không gây ra re-render khi giá trị đó thay đổi.",
      "Cách sử dụng useRef: const myRef = useRef(initialValue);",
      "Trong đó, initialValue là giá trị ban đầu của tham chiếu. useRef sẽ trả về một đối tượng có thuộc tính current, mà bạn có thể gán giá trị mới cho nó mà không gây ra re-render.",
      "useRef giúp bạn truy cập trực tiếp vào phần tử DOM hoặc lưu trữ giá trị mà không cần phải sử dụng state, từ đó tránh việc re-render không cần thiết của component.",
      "Khi sử dụng useRef, bạn có thể gán giá trị mới cho myRef.current để lưu trữ thông tin hoặc truy cập vào phần tử DOM mà myRef đang tham chiếu đến.",
      "useRef có thể lưu trữ bất kỳ giá trị nào, không chỉ là phần tử DOM, và nó sẽ giữ nguyên giá trị đó qua các lần re-render của component.",
      "useRef có thể truyền qua props đến các component con hoặc hook khác mà yêu cầu một tham chiếu, giúp tránh việc re-render không cần thiết của các component con."
    ]
  },
  {
    title:
      "useMemo hook",
    content: [
      "Hook useMemo trong React được dùng để ghi nhớ (memoize) các phép tính tốn kém, giúp tối ưu hiệu suất của ứng dụng bằng cách tránh việc tính toán lại không cần thiết khi component re-render.",
      "Cách sử dụng useMemo: const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);",
      "Trong đó, computeExpensiveValue là hàm thực hiện phép tính tốn kém, và [a, b] là mảng phụ thuộc. useMemo sẽ chỉ tính toán lại giá trị memoizedValue khi a hoặc b thay đổi.",
      "useMemo giúp cải thiện hiệu suất bằng cách tránh việc tính toán lại các giá trị phức tạp khi component re-render mà không cần thiết.",
      "Khi sử dụng useMemo, bạn có thể truyền memoizedValue vào các component con hoặc hook khác mà yêu cầu một giá trị, giúp tránh việc re-render không cần thiết của các component con."
    ]
  },
  {
    title:
      "useCallback hook",
    content: [
      "Hook useCallback trong React được dùng để ghi nhớ (memoize) các hàm, giúp tránh việc tạo ra các hàm mới trong mỗi lần re-render, từ đó tối ưu hiệu suất của ứng dụng.",
      "Cách sử dụng useCallback: const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);",
      "Trong đó, dependencies là mảng các phụ thuộc. useCallback sẽ chỉ tạo lại hàm memoizedCallback khi một trong các phụ thuộc thay đổi.",
      "useCallback giúp cải thiện hiệu suất bằng cách tránh việc tạo ra các hàm mới không cần thiết khi component re-render.",
      "Khi sử dụng useCallback, bạn có thể truyền memoizedCallback vào các component con hoặc hook khác mà yêu cầu một hàm, giúp tránh việc re-render không cần thiết của các component con."
    ]
  },
];
