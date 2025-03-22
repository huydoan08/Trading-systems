"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { commonMistake } from "@/data/data";
import { auth } from "@/firebaseConfig";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CommonMistakesInTradingPage() {
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
  if (!sidebar) return null;
  return (
    <ContentLayout title="Các lỗi thường mắc phải trong giao dịch">
      <Card className="max-h-[67.5vh] overflow-auto shadow-lg border border-black-200 dark:border-black-700">
        <CardContent className="p-6 space-y-4">
          <div className="font-bold text-lg text-black-800 dark:text-white">
            Các lỗi thường mắc phải trong giao dịch:
          </div>
          <div className="space-y-2">
            {commonMistake.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2 ">
                <span className="text-black-600 dark:text-white">-</span>
                <Label className="text-black-700 font-semibold dark:text-white">
                  {item}
                </Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </ContentLayout>
  );
}
