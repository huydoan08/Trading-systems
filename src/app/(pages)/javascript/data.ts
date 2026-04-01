import { title } from "process";

export const raisingchildren = [
  {
    title:
      "Bài toán chuyển đổi một mảng thành một đối tượng có key là một khóa nào đó của phần tử trong mảng, và value là phần tử đó",
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
  }
];
