type BaseCard = {
  title: string;
  imageSrc: string;
  modalType:
    | "rsi"
    | "support"
    | "trap"
    | "excess"
    | "break"
    | "rsi-h4"
    | "rsi-d"
    | "rsi-h1"
    | "entry-1d"
    | "exit"
    | "manage"
    | "entry-h4";
};

type InfoCard = BaseCard & {
  modalType: "rsi" | "support" | "entry-1d" | "entry-h4" | "exit" | "manage";
};

type GalleryCard = BaseCard & {
  modalType:
    | "trap"
    | "excess"
    | "break"
    | "rsi-h4"
    | "rsi-d"
    | "rsi-h1"
    | "entry-1d"
    | "entry-h4"
    | "exit"
    | "manage";
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
    title: "Bộ các tiêu chí vào lệnh khung H4.",
    imageSrc: "/entry.png",
    modalType: "entry-h4"
  },
  {
    title: "Cách quản lý lệnh.",
    imageSrc: "/personal-growth/growth-42.png",
    modalType: "manage"
  },
  {
    title: "Bộ các tiêu chí vào lệnh khung 1D.",
    imageSrc: "/entry.png",
    modalType: "entry-1d"
  }
];
