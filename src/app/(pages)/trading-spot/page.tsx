"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { ImageGrid } from "@/app/component/image-grid";
import { auth } from "@/firebaseConfig";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  spotIncreaseH4,
  spotcatch1D,
  spotCatch1W
} from "./data";

export default function ConditionForEnteringATradePage() {
  const sidebar = useStore(useSidebar, (x) => x);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) router.push("/");
    });
    return () => unsubscribe();
  }, [router]);

  if (!sidebar) return null;

  const tradeStrategies = [
    {
      title: "BẮT ĐÁY KHI TẠO ĐÁY CAO DẦN KHUNG 1W",
      images: spotCatch1W,
      category: "1W Strategy"
    },
    {
      title: "BẮT ĐÁY KHI TẠO ĐÁY CAO DẦN KHUNG 1D",
      images: spotcatch1D,
      category: "1D Strategy"
    },
    {
      title: "BẮT CON SÓNG HỒI CỦA MỘT SÓNG TĂNG TRƯỚC ĐÓ H4 H2",
      images: spotIncreaseH4,
      category: "H4 Strategy"
    },
  ];

  const gridImages = tradeStrategies.flatMap(strategy =>
    strategy.images.map((image: any) => ({
      src: typeof image === 'string' ? image : image.src,
      title: strategy.title,
      category: strategy.category
    }))
  );

  return (
    <ContentLayout title="Hệ Thống Giao Dịch">
      <ImageGrid images={gridImages} />
    </ContentLayout>
  );
}
