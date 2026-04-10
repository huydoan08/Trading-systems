"use client";

import { ContentLayout } from "@/components/admin-panel/content-layout";

export default function Strategy() {

  return (
    <ContentLayout title="PNL Report">
      <h3 className="text-xl font-medium text-black dark:text-white mb-3">
        Chiến lược giao dịch năm 2026
      </h3>
      <img
        src="/strategy.png"
        alt="Strategy"
        className="w-full h-auto rounded-lg object-cover"
      />
    </ContentLayout>
  );
}
