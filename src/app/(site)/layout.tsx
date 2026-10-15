import Navbar from "@/components/Navbar";
import { profile } from "@/data/resume";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="mx-auto min-h-[calc(100vh-140px)] max-w-5xl px-4 py-12 sm:py-16">
        {children}
      </main>
      <footer className="border-t-[3px] border-paper py-6 text-center font-mono text-xs text-dim">
        made with 🍕 + next.js by {profile.name.split(" ")[0].toLowerCase()} © {new Date().getFullYear()}
      </footer>
    </>
  );
}
