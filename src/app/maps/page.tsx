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

      {/* Google Maps con marcador rojo en Óvalo Santa Anita - W2WP+452 */}
      <iframe
        src="https://maps.google.com/maps?q=W2WP%2B452,+Santa+Anita,+Lima,+Peru&z=18&output=embed"
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
