import { ThemeToggle } from "../components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-zinc-50 font-sans dark:bg-black">
      <main className=" max-w-3xl mx-auto flex flex-col items-center p-4">
        <ThemeToggle />
        {/* Ready for content */}

        <h1>Link Store</h1>
        <p>Store your links in one place</p>
      </main>
    </div>
  );
}
