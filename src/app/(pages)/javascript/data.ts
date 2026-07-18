import { title } from "process";

export const raisingchildren = [
  {
    title:
      "Chuyển mảng thành object với key là một thuộc tính của phần tử và value là chính phần tử đó.",
    content: [
      "Đáp án:\n\nconst arrayToObject = (array, key) => {\n  return array.reduce((obj, item) => {\n    obj[item[key]] = item;\n    return obj;\n  }, {});\n};\n\nGiải thích:\n- Dùng reduce để chuyển mảng thành object.\n- Key là item[key], value là item."
    ]
  },
  {
    title: "Gộp hai mảng thành một mảng mới dựa trên key trùng nhau của các phần tử, bằng cách kết hợp dữ liệu của các phần tử có cùng key.",
    content: [
      "Đáp án:\n\n  const mergeArrays = (array1, array2) => {\n    return array1.map(item1 => {\n      const item2 = array2.find(item => item.id === item1.id);\n      return { ...item1, ...item2 };\n    });\n  };\n\nGiải thích:\n- Dùng map duyệt array1.\n- Dùng find tìm phần tử cùng id trong array2.\n- Gộp 2 object bằng spread."
    ]
  },
  {
    title: "Đảo ngược key và value của một object, trong đó value trở thành key và key trở thành value.",
    content: [
      "Đáp án:\n\n  const invertObject = (obj) => {\n    return Object.entries(obj).reduce((acc, [key, value]) => {\n      acc[value] = key;\n      return acc;\n    }, {});\n  };\n\nGiải thích:\n- Dùng Object.entries để chuyển object → mảng [key, value].\n- Dùng reduce để xây dựng object mới.\n- Đảo key và value (value trở thành key, key trở thành value)."
    ]
  },
  {
    title: "Sự khác biệt giữa `==` và `===` trong JavaScript là gì ?",
    content: [
      "Đáp án:\n\n`==` là toán tử so sánh bằng không nghiêm ngặt (abstract equality), trong khi `===` là toán tử so sánh bằng nghiêm ngặt (strict equality).\n\n`==` thực hiện ép kiểu (type coercion) trước khi so sánh, tuân theo thuật toán **Abstract Equality Comparison** được định nghĩa trong đặc tả ECMAScript.\n\n`===` không thực hiện ép kiểu và sẽ trả về `false` bất cứ khi nào kiểu dữ liệu của hai toán hạng khác nhau.\n\nTrong hầu hết các trường hợp, `===` được ưu tiên sử dụng trong mã ứng dụng vì nó giúp tránh một nhóm lỗi do việc ép kiểu ngoài ý muốn gây ra.\n\nNgoại lệ phổ biến nhất là `x == null`, vì biểu thức này sẽ kiểm tra đồng thời cả `null` và `undefined` chỉ với một phép so sánh."
    ]
  }
];
