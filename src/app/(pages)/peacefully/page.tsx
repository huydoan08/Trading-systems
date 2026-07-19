"use client";
import { useEffect } from "react";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { auth } from "@/firebaseConfig";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

const featuredVideos = [
  {
    title: "Nhạc thiền chữa lành giúp bạn thư giãn, xoa dịu tâm trí và mang lại cảm giác bình an trong tâm hồn",
    description: "",
    url: 'https://www.youtube.com/watch?v=_bckYXVEs8w&list=RDuv2VNtvT08g&index=3',
    thumbnail: "https://img.youtube.com/vi/_bckYXVEs8w/hqdefault.jpg",
  },
  {
    title: "Nhạc thiền trong phim Cuộc Đời Đức Phật",
    description: "",
    url: 'https://www.youtube.com/watch?v=uv2VNtvT08g&list=RDuv2VNtvT08g&index=1',
    thumbnail: "https://img.youtube.com/vi/uv2VNtvT08g/hqdefault.jpg",
  },
  {
    title: "Sống biết đủ thường thấy an vui, đời người luôn hạnh phúc",
    description: "",
    url: 'https://www.youtube.com/watch?v=ojtC2ZG0TPs&list=RDuv2VNtvT08g&index=2',
    thumbnail: "https://img.youtube.com/vi/ojtC2ZG0TPs/hqdefault.jpg",
  },
];

export default function Peacefully() {
  const sidebar = useStore(useSidebar, (x) => x);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/");
      }
    });
    return () => unsubscribe();
  }, [router]);

  if (sidebar === undefined) return null;

  return (
    <ContentLayout title="Bình an" disableHorizontalPadding>
      <div className="container mx-auto px-4 sm:px-8">
        <div>
          <section className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-5 shadow-2xl shadow-slate-950/40">
            <div className="space-y-4">
              {featuredVideos.map((video) => (
                <div key={video.title} className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr]">
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group overflow-hidden rounded-[1.75rem] bg-slate-950 shadow-xl shadow-slate-950/30 transition hover:-translate-y-1"
                  >
                    <div className="relative overflow-hidden rounded-t-[1.75rem]">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-3 p-5 text-white">
                      <h3 className="text-2xl font-semibold">{video.title}</h3>
                      <p className="text-sm text-slate-300">{video.description}</p>
                    </div>
                  </a>
                  <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-5 text-white">
                    <h3 className="text-xl font-semibold">Thông tin video</h3>
                    <p className="mt-3 text-sm text-slate-400">Link gốc:</p>
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 block break-all text-sm font-semibold text-sky-300 hover:text-sky-200"
                    >
                      {video.url}
                    </a>
                    <div className="mt-6 space-y-4 rounded-[1.5rem] bg-white/5 p-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Loại</p>
                        <p className="mt-1 text-sm">{video.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </ContentLayout>
  );
}
