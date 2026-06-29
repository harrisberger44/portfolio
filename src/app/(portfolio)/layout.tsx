import Sidebar from "@/components/Sidebar";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <Sidebar />
      <div
        className="hidden w-px shrink-0 self-stretch bg-black lg:block"
        aria-hidden="true"
      />
      <main className="flex-1 px-6 py-8 lg:px-14 lg:py-14">{children}</main>
    </div>
  );
}
