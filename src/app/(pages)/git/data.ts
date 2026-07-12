export const mindsetDeveloper = [
  {
    title: "Lấy một hoặc nhiều commit bất kỳ của một nhánh bằng git cherry-pick",
    content: ["git cherry-pick <commit-hash 1> <commit-hash 2>"]
  },
  {
    title: "Hoàn tác thay đổi của một hoặc nhiều commit bằng git revert",
    content: ["git revert <commit-hash 1> <commit-hash 2>"]
  },
  {
    title: "Đưa nhánh về một commit trước đó, sử dụng git reset --hard",
    content: ["git reset --hard <commit-hash>\nLưu ý: Nếu cần đồng bộ lại với remote sau khi đã push, có thể git pull."]
  }
];