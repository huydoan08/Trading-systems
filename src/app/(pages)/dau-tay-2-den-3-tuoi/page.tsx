"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { ImageGrid } from "@/app/component/image-grid";

const images = [
  { src: "/122.jpg", title: "Đoàn Hải Anh", category: "2-3 tuổi" },
  { src: "/123.jpg", title: "Đoàn Hải Anh", category: "2-3 tuổi" },
  { src: "/124.jpg", title: "Đoàn Hải Anh", category: "2-3 tuổi" },
  { src: "/125.jpg", title: "Đoàn Hải Anh", category: "2-3 tuổi" },
  { src: "/126.jpg", title: "Đoàn Hải Anh", category: "2-3 tuổi" },
  { src: "/127.jpg", title: "Đoàn Hải Anh", category: "2-3 tuổi" },
];

export default function DauTayHaiTuoiPage() {
  const sidebar = useStore(useSidebar, (x) => x);

  if (!sidebar) return null;

  return (
    <ContentLayout title="Đoàn Hải Anh (Dâu Tây)">
      <ImageGrid images={images} />
    </ContentLayout>
  );
}
