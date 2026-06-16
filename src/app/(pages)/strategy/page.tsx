"use client";

import { ContentLayout } from "@/components/admin-panel/content-layout";

export default function Strategy() {

  return (
    <ContentLayout title="Chiến lược giao dịch">
      <img
        src="/buy-sell.png"
        alt="Strategy"
        className="w-full h-auto rounded-lg object-cover"
      />
    </ContentLayout>
  );
}
