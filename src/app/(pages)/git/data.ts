
export const mindsetDeveloper = [
  {
    title:
      "Bài toán lấy một commit bất kỳ trong lịch sử của một nhánh khi chưa được merge vào nhánh chính ?",
    content: [
      "Để lấy một commit bất kỳ trong lịch sử của một nhánh khi chưa được merge vào nhánh chính, bạn có thể sử dụng lệnh git cherry-pick. Lệnh này cho phép bạn chọn một commit cụ thể từ một nhánh khác và áp dụng nó vào nhánh hiện tại của bạn.",
      "Cách sử dụng lệnh git cherry-pick như sau:",
      "1. Xác định commit mà bạn muốn lấy bằng cách sử dụng lệnh git log để xem lịch sử commit của nhánh đó.",
      "2. Sử dụng lệnh git cherry-pick <commit-hash> để áp dụng commit đó vào nhánh hiện tại.",
    ]
  },
  {
    title: "Bài toán lấy nhiều commit bất kỳ trong lịch sử của một nhánh khi chưa được merge vào nhánh chính ?",
    content: [
      "Để lấy nhiều commit bất kỳ trong lịch sử của một nhánh khi chưa được merge vào nhánh chính, bạn có thể sử dụng lệnh git cherry-pick với danh sách commit. Lệnh này cho phép bạn chọn nhiều commit cụ thể từ một nhánh khác và áp dụng chúng vào nhánh hiện tại của bạn.",
      "Cách sử dụng lệnh git cherry-pick như sau:",
      "1. Xác định các commit mà bạn muốn lấy bằng cách sử dụng lệnh git log để xem lịch sử commit của nhánh đó.",
      "2. Sử dụng lệnh git cherry-pick <commit-hash-1> <commit-hash-2> ... để áp dụng các commit đó vào nhánh hiện tại.",
    ]
  }
];
