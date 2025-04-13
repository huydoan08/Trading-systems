"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardHeader } from "@/components/ui/card";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/firebaseConfig";
import { ExpandableCard } from "@/app/component/ExpandableCard/ExpandableCard";
import { experience } from "@/data/data";
import { useState, useEffect, useRef, useCallback } from "react";
import { Loader } from "lucide-react";

const ITEMS_PER_PAGE = 6;

// Simulate API response type
interface ExperienceItem {
  title: string;
  content: string;
}

export default function CryptoJournalPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const router = useRouter();
  const [items, setItems] = useState<ExperienceItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Simulate API call
  const fetchItems = useCallback(async () => {
    if (!hasMore || isLoading) return;
    
    setIsLoading(true);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate API response
      const startIndex = (page - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      const newItems = experience.slice(startIndex, endIndex);
      
      if (newItems.length === 0) {
        setHasMore(false);
        return;
      }

      setItems(prev => [...prev, ...newItems] as any);
      setPage(prev => prev + 1);
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setIsLoading(false);
    }
  }, [page, hasMore, isLoading]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/");
      }
    });
    return () => unsubscribe();
  }, [router]);

  // Initial load
  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchItems();
        }
      },
      { threshold: 1.0 }
    );

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [fetchItems]);

  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;

  return (
    <ContentLayout title="Hành trình tôi đi tìm tôi">
      <Card className="max-h-[67.5vh] overflow-auto shadow-lg border border-black-200 dark:border-black-700 mb-2">
        <CardHeader>
          <div className="font-bold text-2xl text-black-800 dark:text-white">
            TRADING PHIÊU LƯU KÍ
          </div>
        </CardHeader>
      </Card>

      {items.map((item, index) => (
        <ExpandableCard
          key={index}
          title={item.title}
          content={item.content as any}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
      
      {hasMore && (
        <div 
          ref={loadMoreRef}
          className="flex justify-center items-center p-4"
        >
          {isLoading && <Loader className="animate-spin" />}
        </div>
      )}
    </ContentLayout>
  );
}
