"use client"
import { useStore } from "@/hooks/use-store"
import { useSidebar } from "@/hooks/use-sidebar"
import { ContentLayout } from "@/components/admin-panel/content-layout"
import { ImageGrid } from "@/app/component/image-grid"

const images = [
  {
    src: "/01.jpg",
    title: "",
    category: "",
    span: "half" as const
  },
  {
    src: "/02.jpg",
    title: "",
    category: "",
    span: "half" as const
  },
  {
    src: "/03.jpg",
    title: "",
    category: "",
    span: "half" as const
  },
  {
    src: "/04.jpg",
    title: "",
    category: "",
    span: "half" as const
  }
]

export default function DauTayMotTuoiPage() {
  const sidebar = useStore(useSidebar, (x) => x)

  if (!sidebar) return null

  return (
    <ContentLayout title="Đoàn Hải Anh (Dâu Tây)">
      <ImageGrid images={images} />
    </ContentLayout>
  )
}
