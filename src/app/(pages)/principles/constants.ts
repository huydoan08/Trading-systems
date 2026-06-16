type BaseCard = {
  title: string;
  imageSrc: string;
  modalType: "rsi" | "support" | "trap" | "excess" | "break" | "rsi-h4" | "rsi-d" | "rsi-h1"  | "entry" | "exit";
};

type InfoCard = BaseCard & {
  modalType: "rsi" | "support"  | "entry" | "exit";
};

type GalleryCard = BaseCard & {
  modalType: "trap" | "excess" | "break" | "rsi-h4" | "rsi-d" | "rsi-h1"  | "entry" | "exit";
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
    title: "Chiến lược vào lệnh",
    imageSrc: "/buy.png",
    modalType: "entry"
  },
  {
    title: "Chiến lược thoát lệnh",
    imageSrc: "/sell.png",
    modalType: "exit"
  }
];
