export interface ContentItem {
  type: 'text' | 'image';
  value: string;
  alt?: string; // for images
}

export const dataOverview = [
  {
    title: "HỆ THỐNG VÀO LỆNH SHORT.",
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
      {
        type: 'text' as const,
        value: "----------------------------------------------------------",
      },
      {
        type: 'text' as const,
        value: "Khi giá chạy đúng dự phóng, RSI H1 và H4 đều vượt ra ngoài vùng 20, tiếp tục giữ lệnh và dời theo cấu trúc sóng.",
      },
      {
        type: 'image' as const,
        value: "/Future-S-H1/01.jpg",
        alt: ""
      },
      {
        type: 'text' as const,
        value: "Giá tiếp tục chạy, RSI H1 không vượt ra ngoài vùng 20 nhưng H4 vượt ra ngoài vùng 20, tiếp tục giữ lệnh và dời theo cấu trúc sóng.",
      },
      {
        type: 'image' as const,
        value: "/Future-S-H4/02.jpg",
        alt: ""
      },
      {
        type: 'text' as const,
        value: "Giá tiếp tục chạy, RSI H1 chạm vùng 20 nhưng H4 không ra ngoài vùng 20, lúc này chỉ số fear về dưới 15, giá đã rơi khoảng 30% từ đỉnh, đóng lệnh short.",
      },
      {
        type: 'image' as const,
        value: "/Future-S-H4/03.jpg",
        alt: ""
      },
    ]
  }
]