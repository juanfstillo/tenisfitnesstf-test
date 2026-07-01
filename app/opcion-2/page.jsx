import React from 'react';

export default function ConceptoClub() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans">
      {/* Hero Section Split */}
      <header className="flex flex-col md:flex-row h-screen">
        <div className="w-full md:w-1/2 flex flex-col justify-center p-12 lg:p-24">
          <img src="/main-logo-tf.png" alt="Logo" className="w-24 mb-8" />
          <h1 className="text-5xl lg:text-6xl font-black mb-6 text-zinc-900">Tu lugar para jugar al tenis.</h1>
          <p className="text-xl text-zinc-600 mb-8">Sumate a nuestras clases grupales o individuales en Club Obras. Un espacio para todos los niveles.</p>
          <a href="https://wa.me/541159194951" className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-center w-fit transition-colors">
            Contactar por WhatsApp
          </a>
        </div>
        <div className="w-full md:w-1/2 h-full">
          <img src="/tenis-fitness-6.jpeg" alt="Comunidad Tenis" className="w-full h-full object-cover" />
        </div>
      </header>

      {/* Servicios */}
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-green-700 mb-2">Clases de tenis</h3>
              <p className="text-zinc-600 text-lg">Grupales e individuales para que aprendas a tu propio ritmo.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-700 mb-2">Preparación Física</h3>
              <p className="text-zinc-600 text-lg">Rutinas orientadas específicamente a los movimientos del tenis.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-700 mb-2">Entrenamientos para equipos y torneos</h3>
              <p className="text-zinc-600 text-lg">Preparación para competencia y eventos internos.</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="/tenis-fitness-10.jpeg" alt="Grupo Tenis" className="rounded-2xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Quién Soy & Sedes */}
      <footer className="py-16 px-6 text-center">
        <img src="/tenis-fitness-3.jpeg" alt="Federico" className="w-32 h-32 object-cover rounded-full mx-auto mb-6 shadow-lg" />
        <h2 className="text-3xl font-bold mb-2">Federico Magiarotti</h2>
        <p className="text-zinc-500 max-w-2xl mx-auto mb-12">Profesor de tenis dedicado a mejorar tu juego y tu estado físico en un ambiente excelente.</p>
        
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
          <div className="bg-zinc-100 p-6 rounded-xl flex-1">
            <h4 className="font-bold text-lg mb-2">Sede Alcorta</h4>
            <p className="text-zinc-600">Av. Pres. Figueroa Alcorta 7250</p>
          </div>
          <div className="bg-zinc-100 p-6 rounded-xl flex-1">
            <h4 className="font-bold text-lg mb-2">Sede Núñez</h4>
            <p className="text-zinc-600">Libertador 7281, CABA</p>
          </div>
        </div>
      </footer>
    </div>
  );
}