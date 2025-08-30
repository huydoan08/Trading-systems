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
  {
    title: "RSI D SPOT",
    imageSrc: "/rules/D.png",
    modalType: "rsi-d",
    images: [
      "/rsi-d-beautiful/rsi-d-01.png",
      "/rsi-d-beautiful/rsi-d-02.png",
      "/rsi-d-beautiful/rsi-d-03.png",
      "/rsi-d-beautiful/rsi-d-04.png",
      "/rsi-d-beautiful/rsi-d-05.png",
      "/rsi-d-beautiful/rsi-d-06.png",
      "/rsi-d-beautiful/rsi-d-07.png",
      "/rsi-d-beautiful/rsi-d-08.png",
      "/rsi-d-beautiful/rsi-d-09.png",
      "/rsi-d-beautiful/rsi-d-10.png",
      "/rsi-d-beautiful/rsi-d-11.png",
    ]
  }
];
