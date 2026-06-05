"use client";

import { ContentLayout } from "@/components/admin-panel/content-layout";

export default function Strategy() {

  return (
    <ContentLayout title="Chiến lược giao dịch">
      <img
        src="/btc-buy.png"
        alt="Strategy"
        className="w-full h-auto rounded-lg object-cover"
      />
      <img
        src="/sell-btc.png"
        alt="Strategy"
        className="w-full h-auto rounded-lg object-cover"
      />
    </ContentLayout>
  );
}
