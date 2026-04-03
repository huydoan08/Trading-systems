"use client";

import { useEffect } from "react";
import { auth } from "@/firebaseConfig";
import { useStore } from "@/hooks/use-store";
import { useRouter } from "next/navigation";
import { useSidebar } from "@/hooks/use-sidebar";
import { onAuthStateChanged } from "firebase/auth";
import { spotIncreaseH4, spotCatch1W } from "./data";
import { ImageGrid } from "@/app/component/image-grid";
import { ContentLayout } from "@/components/admin-panel/content-layout";
interface ImageData {
  src: string;
  alt?: string;
}
interface TradeStrategy {
  title: string;
  images: (string | ImageData)[];
  category: string;
}
interface GridImage {
  src: string;
  title: string;
  category: string;
}

const TRADE_STRATEGIES: TradeStrategy[] = [
  {
    title: "BẮT ĐÁY KHI TẠO ĐÁY CAO DẦN KHUNG 1W",
    images: spotCatch1W,
    category: "1W Strategy"
  },
  {
    title: "BẮT CON SÓNG HỒI CỦA MỘT SÓNG TĂNG TRƯỚC ĐÓ H4 H2",
    images: spotIncreaseH4,
    category: "H4 Strategy"
  },
];

// Helpers
const normalizeImage = (image: string | ImageData): ImageData =>
  typeof image === "string" ? { src: image } : image;

const transformStrategieToGrid = (strategies: TradeStrategy[]): GridImage[] =>
  strategies.flatMap(({ title, category, images }) =>
    images.map((image) => ({
      src: normalizeImage(image).src,
      title,
      category,
    }))
  );

export default function TradingSpotPage() {
  const sidebar = useStore(useSidebar, (x) => x);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) router.push("/");
    });
    return unsubscribe;
  }, [router]);

  if (!sidebar) return null;

  const gridImages = transformStrategieToGrid(TRADE_STRATEGIES);

  return (
    <ContentLayout title="Hệ Thống Giao Dịch">
      <ImageGrid images={gridImages} />
    </ContentLayout>
  );
}
