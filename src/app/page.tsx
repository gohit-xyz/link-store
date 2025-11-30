"use client";

import { useState } from "react";
import { ThemeToggle } from "../components/theme-toggle";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import Carousel from "../components/carousel";

// Import images
import profileImg from "../assets/images/profile.jpg";

// Import data
import { SERVICES, PRODUCTS, type Product, type Service } from "../data/items";

// Import social media icons
import { InstagramIcon } from "../components/social-media/instagram";
import { FacebookIcon } from "../components/social-media/facebook";
import { TikTokIcon } from "../components/social-media/tiktok";
import { YouTubeIcon } from "../components/social-media/youtube";
import { TwitterIcon } from "../components/social-media/twitter";

type TabType = "servicios" | "productos";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("servicios");

  const currentServices = SERVICES;
  const currentProducts = PRODUCTS;

  return (
    <div className="min-h-screen w-full bg-zinc-50 font-sans dark:bg-black">
      <main className="max-w-3xl mx-auto flex flex-col items-center p-4 gap-4 relative">
        <ThemeToggle />
        {/* Carousel */}
        <Carousel />

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

          {/* Social Media Icons */}
          <div className="flex gap-4 justify-center">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white dark:bg-zinc-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-6 h-6 text-pink-600 dark:text-pink-400 group-hover:text-pink-500" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white dark:bg-zinc-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-blue-500" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white dark:bg-zinc-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="TikTok"
            >
              <TikTokIcon className="w-6 h-6 text-zinc-900 dark:text-white group-hover:text-zinc-700" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white dark:bg-zinc-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="YouTube"
            >
              <YouTubeIcon className="w-6 h-6 text-red-600 dark:text-red-400 group-hover:text-red-500" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white dark:bg-zinc-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-6 h-6 text-sky-500 dark:text-sky-400 group-hover:text-sky-600" />
            </a>
          </div>

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
            {activeTab === "servicios" ? (
              // Servicios en lista simple
              currentServices.map((item, index) => (
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
              ))
            ) : (
              // Productos en cards con imágenes
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentProducts.map((item) => (
                  <div
                    key={item.id}
                    className="group bg-white dark:bg-zinc-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-[1.02]"
                  >
                    {/* Imagen del producto */}
                    <div className="relative h-48 overflow-hidden bg-zinc-100 dark:bg-zinc-700">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {/* Badge de categoría */}
                      <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {item.category}
                      </div>
                    </div>

                    {/* Contenido del producto */}
                    <div className="p-4 space-y-2">
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-white line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                        {item.description}
                      </p>
                      {item.price && (
                        <p className="text-xl font-bold text-green-600 dark:text-green-400">
                          {item.price}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* GPS Button - Sticky at bottom right */}
        <Link
          href="/maps"
          className="self-end sticky bottom-4 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 z-40"
          aria-label="Ir a mapas"
        >
          <MapPin className="w-6 h-6" />
        </Link>
      </main>
    </div>
  );
}
