"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { ImageCarousel } from "@/app/component/image-carousel";

const images = [
  "/122.jpg",
  "/123.jpg",
  "/124.jpg",
  "/125.jpg",
  "/126.jpg",
  "/127.jpg",
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
