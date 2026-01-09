import Link from "next/link";
import { GlassCard } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-gray-900 to-black text-white">
      <GlassCard className="max-w-2xl w-full text-center space-y-8">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Evolution of Todo
        </h1>
        <p className="text-lg text-gray-300">
          Phase 3: Secure, Scalable, and Beautiful.
        </p>
        <div className="flex justify-center gap-6">
          <Link href="/sign-in">
            <GlassButton variant="primary">Login</GlassButton>
          </Link>
          <Link href="/sign-up">
            <GlassButton variant="secondary">Sign Up</GlassButton>
          </Link>
        </div>
      </GlassCard>
    </main>
  );
}
