type BaseCard = {
  title: string;
  imageSrc: string;
  modalType: "rsi" | "support" | "trap" | "excess" | "break" | "divergence";
};

type InfoCard = BaseCard & {
  modalType: "rsi" | "support";
};

type GalleryCard = BaseCard & {
  modalType: "trap" | "excess" | "break" | "divergence";
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
    title: "HỖ TRỢ & KHÁNG CỰ",
    imageSrc: "/support-resistance/resistance.png",
    modalType: "support"
  },
  {
    title: "CẠM BẪY",
    imageSrc: "/support-resistance/trap-01.png",
    modalType: "trap",
    images: [
      "/support-resistance/cam-bay-01.png",
      "/support-resistance/cam-bay-02.png"
    ]
  },
  {
    title: "BỨT PHÁ",
    imageSrc: "/support-resistance/excess-01.png",
    modalType: "excess",
    images: [
      "/support-resistance/excess-02.png",
      "/support-resistance/break-03.png"
    ]
  },
  {
    title: "QUÁ ĐÀ",
    imageSrc: "/support-resistance/break-01.png",
    modalType: "break",
    images: ["/support-resistance/break-02.png"]
  },
  {
    title: "RSI H4 Đẹp",
    imageSrc: "/support-resistance/divergence-01.png",
    modalType: "divergence",
    images: [
      "/rsi-h4-beautiful/rsi-h4-01.png",
      "/rsi-h4-beautiful/rsi-h4-02.png",
      "/rsi-h4-beautiful/rsi-h4-03.png",
      "/rsi-h4-beautiful/rsi-h4-04.png",
      "/rsi-h4-beautiful/rsi-h4-05.png",
      "/rsi-h4-beautiful/rsi-h4-06.png",
      "/rsi-h4-beautiful/rsi-h4-07.png",
      "/rsi-h4-beautiful/rsi-h4-08.png",
      "/rsi-h4-beautiful/rsi-h4-09.png",
      "/rsi-h4-beautiful/rsi-h4-10.png",
      "/rsi-h4-beautiful/rsi-h4-11.png",
      "/rsi-h4-beautiful/rsi-h4-12.png",
      "/rsi-h4-beautiful/rsi-h4-13.png",
      "/rsi-h4-beautiful/rsi-h4-14.png",
      "/rsi-h4-beautiful/rsi-h4-15.png",
      "/rsi-h4-beautiful/rsi-h4-16.png"
    ]
  }
];
