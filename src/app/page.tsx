import { Heart, Moon, Sun } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Hello world</h1>
          <Heart size={24} strokeWidth={2} className="text-[#ff714d]" />
          <Moon size={24} strokeWidth={2} color="#ff4d6d" />
          <Sun size={24} strokeWidth={2} color="#ff4d6d" />
      </main>
    </div>
  );
}
