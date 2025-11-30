import { ThemeToggle } from "../components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-zinc-50 font-sans dark:bg-black">
      <header className="flex w-full items-center justify-end p-4">
        <ThemeToggle />
      </header>
      <main className="bg-amber-500 container mx-auto flex flex-col items-center p-4">
        {/* Ready for content */}
      </main>
    </div>
  );
}
