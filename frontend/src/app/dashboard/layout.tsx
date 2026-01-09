import { UserButton } from "@clerk/nextjs";
import { GlassCard } from "@/components/ui/glass-card";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <nav className="p-4">
        <GlassCard className="flex items-center justify-between !py-3">
          <Link href="/dashboard" className="text-xl font-bold">
            Todo App
          </Link>
          <UserButton afterSignOutUrl="/" />
        </GlassCard>
      </nav>
      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
}
