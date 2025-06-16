import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-sans">
      <Navbar />

      {children}
    </div>
  );
}
