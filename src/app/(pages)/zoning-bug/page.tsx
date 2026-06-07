"use client";

import { ContentLayout } from "@/components/admin-panel/content-layout";

export default function ZoningBug() {

  return (
    <ContentLayout title="Khoanh vùng bug">
      <img
        src="/zone1.png"
        alt="Zoning Bug"
        className="w-full h-auto rounded-lg object-cover"
      />
    </ContentLayout>
  );
}
