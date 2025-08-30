type BaseCard = {
  title: string;
  imageSrc: string;
  modalType: "rsi" | "support" | "trap" | "excess" | "break" | "rsi-h4" | "rsi-d" | "rsi-h1";
};

type InfoCard = BaseCard & {
  modalType: "rsi" | "support";
};

type GalleryCard = BaseCard & {
  modalType: "trap" | "excess" | "break" | "rsi-h4" | "rsi-d" | "rsi-h1";
  images: string[];
};

type CardData = InfoCard | GalleryCard;

export const CARD_DATA: CardData[] = [
  {
    title: "CHỈ BÁO RSI",
    imageSrc: "/support-resistance/rsi.png",
    modalType: "rsi"
  },
  {
    title: "Swing Failure Pattern (SFP) - Mô Hình Thất Bại Dao Động",
    imageSrc: "/support-resistance/trap-01.png",
    modalType: "trap",
    images: [
      "/support-resistance/cam-bay-01.png",
      "/support-resistance/cam-bay-02.png"
    ]
  },
];
