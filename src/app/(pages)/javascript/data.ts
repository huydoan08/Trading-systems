import { title } from "process";

export const raisingchildren = [
  {
    title:
      "Bài toán chuyển đổi một mảng thành một đối tượng có key là một khóa nào đó của phần tử trong mảng, và value là phần tử đó, gọi là dictionary",
    content: [
      "Đáp án:\n\nconst arrayToObject = (array, key) => {\n``  return array.reduce((obj, item) => {\n`````    obj[item[key]] = item;\n`````````    return obj;\n  }, {});\n};\n\nGiải thích:\n- Hàm `arrayToObject` nhận vào một mảng và một khóa.\n- Sử dụng phương thức `reduce` để duyệt qua từng phần tử của mảng.\n- Trong mỗi lần lặp, chúng ta gán phần tử hiện tại vào đối tượng `obj` với key là giá trị của phần tử tại khóa đã cho.\n- Cuối cùng, hàm trả về đối tượng đã được xây dựng."
    ]
  },
  {
    title: "Bài toán gộp 2 mảng thành 1 mảng mới theo key trùng của phần tử",
    content: [
      "Đáp án:\n\nconst mergeArrays = (array1, array2) => {\n``  return array1.map(item1 => {\n`````    const item2 = array2.find(item => item.id === item1.id);\n`````    return { ...item1, ...item2 };\n  });\n};\n\nGiải thích:\n- Hàm `mergeArrays` nhận vào hai mảng.\n- Sử dụng phương thức `map` để duyệt qua từng phần tử của `array1`.\n- Trong mỗi lần lặp, chúng ta sử dụng phương thức `find` để tìm phần tử trong `array2` có cùng `id` với phần tử hiện tại của `array1`.\n- Nếu tìm thấy, chúng ta gộp hai phần tử lại với nhau bằng cách sử dụng toán tử spread (`...`) và trả về phần tử mới.\n- Kết quả là một mảng mới chứa các phần tử đã được gộp.",
      "Đáp án khác:\n\nconst mergeArrays = (array1, array2) => {\n``  const obj2 = Object.fromEntries(array2.map(item => [item.id, item]));\n``  return array1.map(item1 => ({ ...item1, ...obj2[item1.id] }));\n};\n\nGiải thích:\n- Hàm `mergeArrays` nhận vào hai mảng.\n- Sử dụng phương thức `map` để tạo một đối tượng `obj2` từ `array2`, trong đó key là `id` của phần tử và value là phần tử đó.\n- Sau đó, chúng ta sử dụng phương thức `map` để duyệt qua từng phần tử của `array1`.\n- Trong mỗi lần lặp, chúng ta gộp phần tử hiện tại của `array1` với phần tử tương ứng trong `obj2` dựa trên `id` bằng cách sử dụng toán tử spread (`...`).\n- Kết quả là một mảng mới chứa các phần tử đã được gộp."
    ]
  },
  {
    title: "Bài toán: Đảo key và value của object",
    content: [
      "Đáp án:\n\nconst invertObject = (obj) => {\n``  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));\n};\n\nGiải thích:\n- Hàm `invertObject` nhận vào một đối tượng.\n- Sử dụng phương thức `Object.entries` để chuyển đổi đối tượng thành một mảng các cặp key-value.\n- Sử dụng phương thức `map` để duyệt qua từng cặp key-value và đảo chúng lại thành [value, key].\n- Cuối cùng, sử dụng phương thức `Object.fromEntries` để chuyển đổi mảng các cặp đã được đảo lại thành một đối tượng mới.",
      "Đáp án khác dùng reduce json:\n\nconst invertObject = (obj) => {\n``  return Object.entries(obj).reduce((acc, [key, value]) => {\n`````    acc[value] = key;\n`````    return acc;\n  }, {});\n};\n\nGiải thích:\n- Hàm `invertObject` nhận vào một đối tượng.\n- Sử dụng phương thức `Object.entries` để chuyển đổi đối tượng thành một mảng các cặp key-value.\n- Sử dụng phương thức `reduce` để duyệt qua từng cặp key-value và xây dựng một đối tượng mới bằng cách gán giá trị làm key và key làm value.\n- Cuối cùng, hàm trả về đối tượng đã được đảo."
    ]
  },
  {
    title: "Cập nhật một phần tử trong mảng dựa trên một điều kiện nào đó",
    content: [
      "Đáp án:\n\nconst updateArray = (array, condition, newValue) => {\n``  return array.map(item => condition(item) ? { ...item, name: 'Updated A' } : item);\n};\n\nGiải thích:\n- Hàm `updateArray` nhận vào một mảng, một điều kiện (hàm callback), và một giá trị mới.\n- Sử dụng phương thức `map` để duyệt qua từng phần tử của mảng.\n- Trong mỗi lần lặp, chúng ta kiểm tra nếu phần tử thỏa mãn điều kiện bằng cách gọi hàm callback với phần tử đó.\n- Nếu điều kiện được thỏa mãn, chúng ta trả về giá trị mới; nếu không, chúng ta trả về phần tử cũ.\n- Kết quả là một mảng mới với phần tử đã được cập nhật nếu thỏa mãn điều kiện."
    ] 
  },
  {
    title: "Event listener trong JavaScript là gì và cách sử dụng nó?",
    content: [
      "Event listener trong JavaScript là một hàm được gọi khi một sự kiện cụ thể xảy ra trên một phần tử HTML. Để sử dụng event listener, bạn có thể sử dụng phương thức addEventListener() trên phần tử đó.",
      "Ví dụ:\n\nconst button = document.querySelector('button');\nbutton.addEventListener('click', () => {\n``  console.log('Button was clicked!');\n});\n\nTrong ví dụ này, chúng ta chọn một phần tử button và thêm một event listener cho sự kiện 'click'. Khi người dùng nhấp vào nút, hàm callback sẽ được gọi và in ra thông báo 'Button was clicked!' trong console.",
      "các loại sự kiện phổ biến bao gồm: 'click', 'mouseover', 'mouseout', 'keydown', 'keyup', 'submit', v.v. Bạn có thể thêm nhiều event listener cho cùng một phần tử và sự kiện, và chúng sẽ được gọi theo thứ tự chúng được thêm vào.",
      "Ngoài ra, bạn cũng có thể sử dụng phương thức removeEventListener() để loại bỏ một event listener đã được thêm vào trước đó.",
      
    ]
  },
  {
    title: "Ứng dụng của dictionary trong JavaScript",
    content: [
      "Dictionary trong JavaScript là một cách để lưu trữ dữ liệu dưới dạng cặp key-value. Nó rất hữu ích khi bạn cần tìm kiếm, thêm, hoặc xóa dữ liệu dựa trên một khóa cụ thể.",
      "Ví dụ:\n\nconst dictionary = {\n``  'key1': 'value1',\n``  'key2': 'value2'\n};\n\nconsole.log(dictionary['key1']); // In ra 'value1'"
    ]
  },
  {
    title: "Khi nào nên tách logic ra thành một hàm riêng trong JavaScript?",
    content: [
      "- Logic đó được sử dụng nhiều lần trong ứng dụng.\n- Logic đó phức tạp và khó hiểu.\n- Bạn muốn cải thiện tính đọc và bảo trì của mã nguồn."
    ] 
  }
];
