import { title } from "process";

export const raisingchildren = [
  {
    title:
      "Bài toán chuyển đổi một mảng thành một đối tượng có key là một khóa nào đó của phần tử trong mảng, và value là phần tử đó",
    content: [
      "Đáp án:\n\nconst arrayToObject = (array, key) => {\n``  return array.reduce((obj, item) => {\n`````    obj[item[key]] = item;\n`````````    return obj;\n  }, {});\n};\n\nGiải thích:\n- Hàm `arrayToObject` nhận vào một mảng và một khóa.\n- Sử dụng phương thức `reduce` để duyệt qua từng phần tử của mảng.\n- Trong mỗi lần lặp, chúng ta gán phần tử hiện tại vào đối tượng `obj` với key là giá trị của phần tử tại khóa đã cho.\n- Cuối cùng, hàm trả về đối tượng đã được xây dựng."
    ]
  },
];
