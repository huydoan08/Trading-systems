type BaseCard = {
  title: string;
  imageSrc: string;
  modalType: "rsi" | "support" | "trap" | "excess" | "break" | "rsi-h4" | "rsi-d" | "rsi-h1"  | "entry" | "exit" | "manage";
};

type InfoCard = BaseCard & {
  modalType: "rsi" | "support"  | "entry" | "exit" | "manage";
};

type GalleryCard = BaseCard & {
  modalType: "trap" | "excess" | "break" | "rsi-h4" | "rsi-d" | "rsi-h1"  | "entry" | "exit" | "manage";
  images: string[];
};

type CardData = InfoCard | GalleryCard;

export const CARD_DATA: CardData[] = [
  {
    title: "Bộ quy tắc giao dịch cần phải TUYỆT ĐỐI tuân thủ.",
    imageSrc: "/growth-29.png",
    modalType: "rsi"
  },
  {
    title: "Bộ các tiêu chí vào lệnh.",
    imageSrc: "/entry.png",
    modalType: "entry"
  },
  {
    title: "Cách quản lý lệnh.",
    imageSrc: "/personal-growth/growth-42.png",
    modalType: "manage"
  }
];
