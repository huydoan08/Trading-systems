"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { auth } from "@/firebaseConfig";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { afterTraderCloses } from "./data";
const Checklist = () => (
  <Card className="max-h-[67.5vh] overflow-auto shadow-lg border border-black-200 dark:border-black-700">
    <CardContent className="p-6 space-y-4">
      <div className="font-bold text-lg text-black-800 dark:text-white">
        Tiêu chí thoát lệnh giao dịch:
      </div>
      <div className="space-y-2">
        {afterTraderCloses.map((item, idx) => (
          <div key={idx} className="flex items-start space-x-2">
            <Checkbox />
            <Label className="text-black-700 font-semibold dark:text-white">
              {item}
            </Label>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default function ExitTradeOrderPage() {
  const sidebar = useStore(useSidebar, (x) => x);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) router.push("/");
    });
    return () => unsubscribe();
  }, [router]);



  if (!sidebar) return null;

  return (
    <ContentLayout title="Hệ Thống Giao Dịch">
      <Checklist />
    </ContentLayout>
  );
}
