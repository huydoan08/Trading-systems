"use client"
import { useStore } from "@/hooks/use-store"
import { useSidebar } from "@/hooks/use-sidebar"
import { ContentLayout } from "@/components/admin-panel/content-layout"
import { ImageCarousel } from "@/app/component/image-carousel"

const images = ["/01.jpg", "/02.jpg", "/03.jpg", "/04.jpg"]

export default function DauTayMotTuoiPage() {
  const sidebar = useStore(useSidebar, (x) => x)

  if (!sidebar) return null

  return (
    <ContentLayout title="Đoàn Hải Anh (Dâu Tây)">
      <ImageCarousel images={images} />
    </ContentLayout>
  )
}
