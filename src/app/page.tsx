import { ThemeToggle } from "../components/theme-toggle";

// Import images
import bannerImg from "../assets/images/banner.webp";
import profileImg from "../assets/images/profile.jpg";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-zinc-50 font-sans dark:bg-black">
      <main className=" max-w-3xl mx-auto flex flex-col items-center p-4">
        <ThemeToggle />
        {/* Ready for content */}
      </main>
    </div>
  );
}
