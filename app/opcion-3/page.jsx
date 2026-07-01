import React from 'react';

export default function ConceptoDinamico() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-800 font-sans relative pb-20">
      {/* Botón WhatsApp Flotante */}
      <a href="https://wa.me/541159194951" className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-orange-500 to-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-transform">
        <span className="font-bold">¡Reservá tu lugar!</span>
      </a>

      {/* Hero */}
      <header className="pt-12 px-6 pb-20 text-center bg-white shadow-sm">
        <img src="/main-logo-tf.png" alt="Logo TFO" className="w-28 mx-auto mb-6" />
        <h1 className="text-4xl md:text-6xl font-black mb-4">
          Potenciá tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500">Juego</span>
        </h1>
        <p className="text-lg text-zinc-500 max-w-xl mx-auto">Entrená con Federico Magiarotti en Club Obras. Tenis y preparación física para todos los niveles.</p>
      </header>

      {/* Galería / Servicios Alternados */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-24">
        {/* Bloque 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-orange-500 rounded-3xl translate-x-4 translate-y-4 -z-10"></div>
            <img src="/tenis-fitness-7.jpeg" alt="Saque" className="rounded-3xl shadow-lg w-full object-cover aspect-square" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">Clases y Preparación</h2>
            <p className="text-xl text-zinc-600">Clases de tenis grupales e individuales combinadas con una preparación física específicamente orientada al deporte.</p>
          </div>
        </div>

        {/* Bloque 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-green-500 rounded-3xl -translate-x-4 translate-y-4 -z-10"></div>
            <img src="/tenis-fitness-8.jpeg" alt="Medallas" className="rounded-3xl shadow-lg w-full object-cover aspect-square" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">Equipos y Torneos</h2>
            <p className="text-xl text-zinc-600">Preparación de alto nivel para equipos y organización de torneos para que pongas a prueba todo lo aprendido.</p>
          </div>
        </div>
      </section>

      {/* Info de contacto simple */}
      <footer className="bg-zinc-900 text-white py-12 px-6 text-center mt-12 rounded-t-3xl max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">Federico Magiarotti</h3>
        <div className="flex flex-col md:flex-row justify-center gap-8 text-zinc-400">
          <p>🎾 Club Obras Alcorta (Figueroa Alcorta 7250)</p>
          <p>🎾 Club Obras Libertador (Libertador 7281, Núñez)</p>
        </div>
      </footer>
    </div>
  );
}