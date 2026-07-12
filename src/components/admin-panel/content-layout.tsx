import { Navbar } from "@/components/admin-panel/navbar";

interface ContentLayoutProps {
  title: string;
  children: React.ReactNode;
  disableHorizontalPadding?: boolean;
}

export function ContentLayout({
  title,
  children,
  disableHorizontalPadding = false,
}: ContentLayoutProps) {
  return (
    <div>
      <Navbar title={title} />
      <div
        className={`container pt-8 pb-8 ${disableHorizontalPadding ? "px-0" : "px-4 sm:px-8"}`}
      >
        {children}
      </div>
    </div>
  );
}
