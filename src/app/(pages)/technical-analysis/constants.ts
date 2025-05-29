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
    images: ["/support-resistance/cam-bay-01.png", "/support-resistance/cam-bay-02.png"]
  },
  {
    title: "BỨT PHÁ",
    imageSrc: "/support-resistance/excess-01.png",
    modalType: "excess",
    images: ["/support-resistance/excess-02.png", "/support-resistance/break-03.png"]
  },
  {
    title: "QUÁ ĐÀ",
    imageSrc: "/support-resistance/break-01.png",
    modalType: "break",
    images: ["/support-resistance/break-02.png"]
  },
  {
    title: "PHÂN KÌ",
    imageSrc: "/support-resistance/divergence-01.png",
    modalType: "divergence",
    images: ["/support-resistance/divergence-02.png", "/support-resistance/divergence-03.png"]
  }
]; 