"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { ImageCarousel } from "@/app/component/image-carousel";

const images = [
  "/21.jpg",
  "/22.jpg",
  "/23.jpg",
  "25.jpg",
  "26.jpg",
  "27.jpg",
  "28.jpg",
  "29.jpg",
  "/dau-1t-den-2t/dau-13213.jpg",
  "/dau-1t-den-2t/dau-31324.jpg",
  
];

export default function DauTayHaiTuoiPage() {
  const sidebar = useStore(useSidebar, (x) => x);

  if (!sidebar) return null;

  return (
    <ContentLayout title="Đoàn Hải Anh (Dâu Tây)">
      <ImageCarousel images={images} />
    </ContentLayout>
  );
}
