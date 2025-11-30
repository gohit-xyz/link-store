import { ThemeToggle } from "../components/theme-toggle";
import Image from "next/image";

// Import images
import bannerImg from "../assets/images/banner.webp";
import profileImg from "../assets/images/profile.jpg";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-zinc-50 font-sans dark:bg-black">
      <main className=" max-w-3xl mx-auto flex flex-col items-center p-4 gap-4">
        <ThemeToggle />
        {/* Banner */}
        <div className="relative h-80 w-full rounded-xl overflow-hidden">
          <Image src={bannerImg} alt="Banner" fill className="object-cover" />
        </div>

        {/* Content */}
        <section className="flex flex-col w-full items-center gap-6 p-6 bg-orange-200 dark:bg-orange-900/20 rounded-xl">
          {/* Profile Image */}
          <div className="flex justify-center">
            <Image
              src={profileImg}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>

          {/* Header Content */}
          <header className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Tienda Online
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-md">
              Encuentra los mejores productos en una sola plataforma, no busques
              mas los mejores producto.
            </p>
          </header>

          {/* Tab Navigation */}
          <div className="w-full">
            <div className="flex gap-2 p-1 bg-zinc-200 dark:bg-zinc-800 rounded-lg">
              <button className="flex-1 py-2 px-4 rounded-md bg-green-500 text-white font-medium transition-all hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                Servicios
              </button>
              <button className="flex-1 py-2 px-4 rounded-md bg-transparent text-zinc-700 dark:text-zinc-300 font-medium transition-all hover:bg-zinc-300 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2">
                Productos
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
