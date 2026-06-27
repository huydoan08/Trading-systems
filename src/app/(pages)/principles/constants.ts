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
    title: "Bộ quy tắc giao dịch",
    imageSrc: "/growth-29.png",
    modalType: "rsi"
  },
  {
    title: "Trong giao dịch, để có thể gồng được các lệnh thắng lớn, bạn cần có phương pháp rõ ràng và tách biệt với cảm xúc.",
    imageSrc: "/manage.png",
    modalType: "manage"
  }
];
