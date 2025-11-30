"use client";

import { useState } from "react";
import { ThemeToggle } from "../components/theme-toggle";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Sparkles } from "lucide-react";
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
    <div className="min-h-screen w-full bg-zinc-950 dark:bg-black font-sans relative overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 gradient-glow pointer-events-none" />

      <main className="max-w-3xl mx-auto flex flex-col items-center p-4 gap-6 relative z-10">
        {/* Theme Toggle */}
        <div className="self-end">
          <ThemeToggle />
        </div>

        {/* Carousel - Modern */}
        <div
          className="w-full animate-fade-in-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          <Carousel />
        </div>

        {/* Main Content Section - Glass Effect */}
        <section
          className="flex flex-col w-full items-center gap-8 p-8 glass rounded-3xl backdrop-blur-xl border border-white/10 animate-fade-in-up"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          {/* Profile Image with Glow */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200 animate-pulse-glow" />
            <div className="relative">
              <Image
                src={profileImg}
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover ring-4 ring-cyan-500/30 relative"
              />
            </div>
          </div>

          {/* Header Content - Modern Typography */}
          <header className="text-center space-y-3 max-w-lg">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-primary rounded-full text-white text-sm font-medium mb-2">
              <MapPin className="w-4 h-4" />
              <span>Ovalo Santa Anita</span>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
              Tienda Online
            </h1>
            <p className="text-zinc-400 dark:text-zinc-500 leading-relaxed">
              Encuentra los mejores productos en una sola plataforma. Calidad y
              precio garantizados.
            </p>
          </header>

          {/* Social Media Icons - Modern Glass Buttons */}
          <div className="flex gap-3 justify-center flex-wrap">
            {[
              {
                icon: InstagramIcon,
                href: "https://instagram.com",
                color: "from-pink-500 to-rose-500",
                label: "Instagram",
              },
              {
                icon: FacebookIcon,
                href: "https://facebook.com",
                color: "from-blue-600 to-blue-500",
                label: "Facebook",
              },
              {
                icon: TikTokIcon,
                href: "https://tiktok.com",
                color: "from-zinc-800 to-zinc-900",
                label: "TikTok",
              },
              {
                icon: YouTubeIcon,
                href: "https://youtube.com",
                color: "from-red-600 to-red-500",
                label: "YouTube",
              },
              {
                icon: TwitterIcon,
                href: "https://twitter.com",
                color: "from-sky-500 to-sky-600",
                label: "Twitter",
              },
            ].map(({ icon: Icon, href, color, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3.5 glass rounded-2xl hover:scale-110 transition-all duration-300 hover-lift overflow-hidden"
                aria-label={label}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />
                <Icon className="w-5 h-5 text-zinc-300 group-hover:text-white relative z-10 transition-colors duration-300" />
              </a>
            ))}
          </div>

          {/* Modern Tab Navigation with Sliding Indicator */}
          <div className="w-full">
            <div className="relative p-1.5 glass rounded-2xl inline-flex w-full">
              {/* Sliding background */}
              <div
                className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-gradient-primary rounded-xl transition-transform duration-300 ease-out shadow-glow-sm ${
                  activeTab === "productos"
                    ? "translate-x-[calc(100%+6px)]"
                    : "translate-x-0"
                }`}
              />

              {/* Tab buttons */}
              <button
                onClick={() => setActiveTab("servicios")}
                className={`relative flex-1 py-3 px-6 rounded-xl font-semibold transition-colors duration-300 z-10 ${
                  activeTab === "servicios"
                    ? "text-white"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                Servicios
              </button>
              <button
                onClick={() => setActiveTab("productos")}
                className={`relative flex-1 py-3 px-6 rounded-xl font-semibold transition-colors duration-300 z-10 ${
                  activeTab === "productos"
                    ? "text-white"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                Productos
              </button>
            </div>
          </div>

          {/* Items Display */}
          <div className="w-full space-y-4">
            {activeTab === "servicios" ? (
              // Servicios - Modern Minimal Cards
              <div className="space-y-3">
                {currentServices.map((item, index) => (
                  <div
                    key={item.id}
                    className="group glass rounded-2xl p-5 hover:bg-white/5 transition-all duration-300 hover-lift animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow-sm flex-shrink-0">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Productos - Modern Glass Cards
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentProducts.map((item, index) => (
                  <div
                    key={item.id}
                    className="group glass rounded-3xl overflow-hidden hover:shadow-glow transition-all duration-500 hover-lift animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
                  >
                    {/* Image with overlay */}
                    <div className="relative h-48 overflow-hidden bg-zinc-900">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Category badge with modern style */}
                      <div className="absolute top-3 left-3 px-3 py-1.5 glass rounded-full">
                        <span className="text-xs font-semibold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                      {item.price && (
                        <div className="pt-2">
                          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                            {item.price}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* GPS Button - Modern Floating Glass */}
        <Link
          href="/maps"
          className="self-end sticky bottom-6 w-14 h-14 glass rounded-2xl hover:shadow-glow-sm transition-all duration-300 flex items-center justify-center group hover-lift z-40 animate-fade-in"
          aria-label="Ir a mapas"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          <MapPin className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
        </Link>
      </main>
    </div>
  );
}
