"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { auth } from "@/firebaseConfig";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox"
import { quintessenceRsi, supportAndResistance } from "@/data/data";

export default function QuintessenceOfRsiPage() {
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
    <ContentLayout title="Bộ công cụ chỉ báo RSI">
      <Card className="max-h-[67.5vh] overflow-auto shadow-lg border border-black-200 dark:border-black-700">
        <CardContent className="p-6 space-y-4">
          <div className="font-bold text-lg text-black-800 dark:text-white">
            Tinh hoa trong bộ công cụ chỉ báo RSI:
          </div>
          <div className="space-y-2">
            {quintessenceRsi.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2 ">
                <Checkbox />
                <Label className="text-black-700 font-semibold dark:text-white">
                  {item}
                </Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card className="max-h-[67.5vh] overflow-auto shadow-lg border border-black-200 dark:border-black-700">
        <CardContent className="p-6 space-y-4">
          <div className="font-bold text-lg text-black-800 dark:text-white">
            Tinh hoa của hỗ trợ & kháng cự:
          </div>
          <div className="space-y-2">
            {supportAndResistance
              .map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2 ">
                  <Checkbox />
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
