export interface ContentItem {
  type: 'text' | 'image';
  value: string;
  alt?: string; // for images
}

export const dataOverview = [
  {
    title: "Mẫu hình số 1 - Các dấu hiệu đẹp để vào 1 lệnh bán khống (Short).",
    content: [
      {
        type: 'text' as const,
        value: "Khung 1D, RSI nằm dưới 2 đường trung bình, Đỉnh của RSI gần nhất trước đó nằm ở vùng 60-70.",
      },
      {
        type: 'image' as const,
        value: "/Future-S-1D/01.jpg",
        alt: ""
      },
      {
        type: 'text' as const,
        value: "Khung H4, RSI nằm dưới 2 đường trung bình, Có xác nhận của Price Action (Nến giảm mạnh, SFP).",
      },
      {
        type: 'image' as const,
        value: "/Future-S-H4/01.jpg",
        alt: ""
      },
      {
        type: 'text' as const,
        value: "Khung H1, không có RSI vượt ra ngoài vùng 80.",
      },
    ]
  }
]