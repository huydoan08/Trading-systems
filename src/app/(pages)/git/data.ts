
export const mindsetDeveloper = [
  {
    title:
      "Bài toán lấy một commit bất kỳ trong lịch sử của một nhánh khi chưa được merge vào nhánh chính ?",
    content: [
      "Để lấy một commit bất kỳ trong lịch sử của một nhánh khi chưa được merge vào nhánh chính, bạn có thể sử dụng lệnh git cherry-pick. Lệnh này cho phép bạn chọn một commit cụ thể từ một nhánh khác và áp dụng nó vào nhánh hiện tại của bạn.",
      "Cách sử dụng lệnh git cherry-pick như sau:",
      "1. Xác định commit mà bạn muốn lấy bằng cách sử dụng lệnh git log để xem lịch sử commit của nhánh đó.",
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
  },
  {
    title: "Bài toán lấy một commit bất kỳ trong lịch sử của một nhánh khi đã được merge vào nhánh chính ?",
    content: [
      "Để lấy một commit bất kỳ trong lịch sử của một nhánh khi đã được merge vào nhánh chính, bạn có thể sử dụng lệnh git revert.",
      "Cách sử dụng lệnh git revert như sau:",
      "1. Xác định commit mà bạn muốn lấy bằng cách sử dụng lệnh git log để xem lịch sử commit của nhánh chính.",
      "2. Sử dụng lệnh git revert <commit-hash> để tạo một commit mới từ các thay đổi của commit đó.",
      "3. Sau đó bạn có thể push commit mới này lên nhánh chính để áp dụng các thay đổi."
    ]
  },
  {
    title: "Bài toán xóa về một commit bất kỳ trong lịch sử của một nhánh ?",
    content: [
      "Để xóa về một commit bất kỳ trong lịch sử của một nhánh, bạn có thể sử dụng lệnh git reset.",
      "Cách sử dụng lệnh git reset như sau:",
      "1. Xác định commit mà bạn muốn xóa về bằng cách sử dụng lệnh git log để xem lịch sử commit của nhánh đó.",
      "2. Sử dụng lệnh git reset --hard <commit-hash> để xóa tất cả các commit sau commit đó và đưa nhánh về trạng thái của commit đó.",
      "3. Sau đó nếu muốn lấy lại bằng git pull để đồng bộ với remote repository nếu như đã push.",
      "Lưu ý: Lệnh git reset --hard sẽ xóa tất cả các thay đổi sau commit đó, vì vậy hãy chắc chắn rằng bạn đã sao lưu các thay đổi quan trọng trước khi sử dụng lệnh này."
    ]
  }
];
