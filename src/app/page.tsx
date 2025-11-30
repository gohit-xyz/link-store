"use client";

import { useState } from "react";
import { ThemeToggle } from "../components/theme-toggle";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

// Import images
import bannerImg from "../assets/images/b1.webp";
import profileImg from "../assets/images/profile.jpg";

// Import data
import { SERVICES, PRODUCTS } from "../data/items";

type TabType = "servicios" | "productos";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("servicios");

  const currentItems = activeTab === "servicios" ? SERVICES : PRODUCTS;

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
              <button
                onClick={() => setActiveTab("servicios")}
                className={`flex-1 py-2 px-4 cursor-pointer rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  activeTab === "servicios"
                    ? "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500"
                    : "bg-transparent text-zinc-700 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-700 focus:ring-zinc-400"
                }`}
              >
                Servicios
              </button>
              <button
                onClick={() => setActiveTab("productos")}
                className={`flex-1 py-2 px-4 cursor-pointer rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  activeTab === "productos"
                    ? "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500"
                    : "bg-transparent text-zinc-700 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-700 focus:ring-zinc-400"
                }`}
              >
                Productos
              </button>
            </div>
          </div>

          {/* Items Display */}
          <div className="w-full space-y-3">
            {currentItems.map((item, index) => (
              <div
                key={item.id}
                className={`w-full p-4 rounded-lg shadow-sm hover:shadow-md transition-all ${
                  index % 2 === 0
                    ? "bg-white dark:bg-zinc-700"
                    : "bg-zinc-100 dark:bg-zinc-800"
                }`}
              >
                <h3 className="text-lg font-medium text-zinc-900 dark:text-white">
                  ✅ {item.title}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Fixed GPS Button */}
      <Link
        href="/maps"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        aria-label="Ir a mapas"
      >
        <MapPin className="w-6 h-6" />
      </Link>
    </div>
  );
}
