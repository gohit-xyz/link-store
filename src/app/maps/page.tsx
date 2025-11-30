"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MapsPage() {
  const router = useRouter();

  return (
    <div className="relative h-screen w-full">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-4 left-4 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="Volver"
      >
        <ArrowLeft className="h-6 w-6 text-gray-800 dark:text-white" />
      </button>

      {/* Google Maps Iframe - Óvalo Santa Anita, Lima, Perú */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.0438699999995!2d-76.97607!3d-12.04644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c71a8e27a703%3A0x1cd8a93b6a0c0c1b!2s%C3%93valo%20Santa%20Anita!5e0!3m2!1ses-419!2spe!4v1732962838000!5m2!1ses-419!2spe"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa de Óvalo Santa Anita"
      ></iframe>
    </div>
  );
}
