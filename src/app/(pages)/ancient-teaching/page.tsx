"use client";
import { useEffect, useState } from "react";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { auth } from "@/firebaseConfig";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { ancientTeaching } from "./data";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function RSIPage() {
  const sidebar = useStore(useSidebar, (x) => x);
  const router = useRouter();
  const [active, setActive] = useState<number | null>(null);

  const images = ancientTeaching.flatMap((item, itemIdx) =>
    (Array.isArray(item.content) ? item.content : [item.content])
      .filter((c: any) => c && c.type === "image")
      .map((c: any, i: number) => ({ ...c, title: item.title, _key: `${itemIdx}-${i}` }))
  );

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
    <ContentLayout title="Lời dạy của cổ nhân">
      <div className="w-full mx-auto my-8 px-6">
        <div className="grid grid-cols-2 gap-6">
          {images.map((img: any, idx: number) => (
            <motion.div
              key={img._key}
              layoutId={`img-${idx}`}
              className="cursor-pointer overflow-hidden rounded-md bg-muted"
              onClick={() => setActive(active === idx ? null : idx)}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={img.value}
                alt={img.alt || img.title}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}

          <AnimatePresence>
            {active !== null && images[active] && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="fixed inset-0 bg-black/50 z-40"
                  onClick={() => setActive(null)}
                />

                <motion.div
                  layoutId={`img-${active}`}
                  className="fixed inset-0 z-50 flex items-center justify-center p-6"
                >
                  <div className="w-full max-w-6xl">
                    <Image
                      src={images[active].value}
                      alt={images[active].alt || images[active].title}
                      width={1600}
                      height={900}
                      className="w-full h-auto rounded-md shadow-lg"
                      style={{ objectFit: "contain" }}
                      onClick={() => setActive(null)}
                    />
                    {images[active].alt && (
                      <p className="text-center text-sm italic mt-2 text-white">
                        {images[active].alt}
                      </p>
                    )}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </ContentLayout>
  );
}
