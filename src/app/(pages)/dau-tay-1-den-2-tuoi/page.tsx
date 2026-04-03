"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { ImageGrid } from "@/app/component/image-grid";

const images = [
  { src: "/21.jpg", title: "Đoàn Hải Anh", category: "1-2 tuổi" },
  { src: "/22.jpg", title: "Đoàn Hải Anh", category: "1-2 tuổi" },
  { src: "/23.jpg", title: "Đoàn Hải Anh", category: "1-2 tuổi" },
  { src: "/25.jpg", title: "Đoàn Hải Anh", category: "1-2 tuổi" },
  { src: "/26.jpg", title: "Đoàn Hải Anh", category: "1-2 tuổi" },
  { src: "/27.jpg", title: "Đoàn Hải Anh", category: "1-2 tuổi" },
  { src: "/28.jpg", title: "Đoàn Hải Anh", category: "1-2 tuổi" },
  { src: "/29.jpg", title: "Đoàn Hải Anh", category: "1-2 tuổi" },
  { src: "/dau-1t-den-2t/dau-13213.jpg", title: "Đoàn Hải Anh", category: "1-2 tuổi" },
  { src: "/dau-1t-den-2t/dau-31324.jpg", title: "Đoàn Hải Anh", category: "1-2 tuổi" },
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
