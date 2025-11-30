"use client";

import { useState } from "react";
import {
  Bike,
  MapPin,
  ChevronDown,
  Phone,
  Package,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function FormularioPage() {
  const router = useRouter();
  const [tipoServicio, setTipoServicio] = useState<"delivery" | "recoger">(
    "delivery"
  );
  const [formData, setFormData] = useState({
    producto: "",
    nombre: "",
    direccion: "",
    telefono: "",
    codigoPais: "+51",
  });

  const handleRecoger = () => {
    router.push("/maps");
  };

  const productos = [
    "1 Pack regalon, Audifono / Cargador / cable",
    "2 Pack premium, Smartwatch / Case",
    "3 Pack basico, Cable USB-C",
    "Pack especial, Audifonos Premium",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Construir el mensaje para WhatsApp
    const mensaje = `
*Nuevo Pedido - ${tipoServicio === "delivery" ? "🏍️ Delivery" : "📍 Recoger"}*

*Producto:* ${formData.producto}
*Nombre:* ${formData.nombre}
${
  tipoServicio === "delivery"
    ? `*Dirección:* ${formData.direccion}`
    : "*Modalidad:* Recojo en tienda"
}
*Teléfono:* ${formData.codigoPais} ${formData.telefono}
    `.trim();

    // Número de WhatsApp de destino (cambia este número por el tuyo)
    const numeroWhatsApp = "51987654321";
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      mensaje
    )}`;

    // Abrir WhatsApp
    window.open(urlWhatsApp, "_blank");
  };

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-zinc-100 via-zinc-50 to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-black font-sans">
      <main className="max-w-2xl mx-auto flex flex-col items-center p-4 md:p-8">
        {/* Botón de regreso */}
        <div className="w-full mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 text-zinc-700 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium">Volver al inicio</span>
          </Link>
        </div>

        {/* Contenedor del formulario */}
        <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Toggle Delivery/Recoger */}
          <div className="flex gap-3 mb-8 bg-zinc-400 dark:bg-zinc-700 rounded-full p-2">
            <button
              type="button"
              onClick={() => setTipoServicio("delivery")}
              className={`cursor-pointer flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                tipoServicio === "delivery"
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-transparent text-zinc-700 dark:text-zinc-300"
              }`}
            >
              <Bike className="w-5 h-5" />
              Delivery
            </button>
            <button
              type="button"
              onClick={handleRecoger}
              className={`cursor-pointer flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                tipoServicio === "recoger"
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-transparent text-zinc-700 dark:text-zinc-300"
              }`}
            >
              <MapPin className="w-5 h-5" />
              Recoger
            </button>
          </div>

          {/* Formulario */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            suppressHydrationWarning
          >
            {/* Me Interesa (Producto) */}
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Me Interesa:
              </label>
              <div className="relative">
                <select
                  name="producto"
                  value={formData.producto}
                  onChange={handleChange}
                  required
                  suppressHydrationWarning
                  className="w-full px-4 py-4 bg-zinc-300 dark:bg-zinc-600 text-zinc-900 dark:text-white rounded-2xl appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 cursor-pointer pr-12"
                >
                  <option value="">Selecciona un producto</option>
                  {productos.map((producto, index) => (
                    <option key={index} value={producto}>
                      {producto}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-700 dark:text-zinc-300 pointer-events-none" />
              </div>
            </div>

            {/* Nombre */}
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Nombre:
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                suppressHydrationWarning
                autoComplete="name"
                className="w-full px-4 py-4 bg-zinc-300 dark:bg-zinc-600 text-zinc-900 dark:text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-zinc-500 dark:placeholder-zinc-400"
                placeholder=""
              />
            </div>

            {/* Dirección (solo si es delivery) */}
            {tipoServicio === "delivery" && (
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  Direcion:
                </label>
                <input
                  type="text"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                  required={tipoServicio === "delivery"}
                  suppressHydrationWarning
                  autoComplete="street-address"
                  className="w-full px-4 py-4 bg-zinc-300 dark:bg-zinc-600 text-zinc-900 dark:text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-zinc-500 dark:placeholder-zinc-400"
                  placeholder=""
                />
              </div>
            )}

            {/* Teléfono */}
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Telefono
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="codigoPais"
                  value={formData.codigoPais}
                  onChange={handleChange}
                  suppressHydrationWarning
                  className="w-20 px-3 py-4 bg-zinc-300 dark:bg-zinc-600 text-zinc-900 dark:text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 text-center"
                  placeholder="+51"
                />
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  suppressHydrationWarning
                  autoComplete="tel"
                  className="flex-1 px-4 py-4 bg-zinc-300 dark:bg-zinc-600 text-zinc-900 dark:text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 placeholder-zinc-500 dark:placeholder-zinc-400"
                  placeholder=""
                />
              </div>
            </div>

            {/* Botón de envío WhatsApp */}
            <button
              type="submit"
              className="cursor-pointer w-full max-w-xs mx-auto py-4 px-8 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Enviar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
