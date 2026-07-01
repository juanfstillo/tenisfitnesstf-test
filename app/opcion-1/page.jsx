import React from 'react';

export default function ConceptoAltoRendimiento() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white font-sans">
      {/* Hero Section */}
      <header className="relative h-screen flex flex-col justify-center items-center text-center p-6">
        <div className="absolute inset-0 z-0">
          <img src="/tenis-fitness-9.jpeg" alt="Fondo Tenis" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <img src="/main-logo-tf.png" alt="Logo TFO" className="w-32 h-32 mx-auto mb-8" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4 uppercase tracking-tighter">Llevá tu tenis al <span className="text-orange-500">próximo nivel</span></h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8">Clases, preparación física y torneos con Federico Magiarotti.</p>
          <a href="https://wa.me/541159194951" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors">
            Reservá tu clase hoy
          </a>
        </div>
      </header>

      {/* Servicios */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-orange-500">¿Qué ofrecemos?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-800 p-6 rounded-xl">
            <img src="/tenis-fitness-4.jpeg" alt="Clases" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mb-2">Clases a tu medida</h3>
            <p className="text-zinc-400">Grupales e individuales para todos los niveles. Aprendé o perfeccioná tu técnica.</p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-xl">
            <img src="/tenis-fitness-5.jpeg" alt="Físico" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mb-2">Preparación Física</h3>
            <p className="text-zinc-400">Entrenamientos orientados 100% a la exigencia de la cancha.</p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-xl">
            <img src="/tenis-fitness-8.jpeg" alt="Torneos" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mb-2">Equipos y Torneos</h3>
            <p className="text-zinc-400">Entrenamientos tácticos para equipos y organización de competencia.</p>
          </div>
        </div>
      </section>

      {/* Quién Soy & Footer */}
      <footer className="bg-zinc-950 py-12 px-6 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <img src="/tenis-fitness-3.jpeg" alt="Federico Magiarotti" className="w-48 h-48 object-cover rounded-full border-4 border-orange-500" />
          <div>
            <h3 className="text-3xl font-bold mb-2">Federico Magiarotti</h3>
            <p className="text-zinc-400 mb-6">Mi objetivo es que disfrutes del proceso de aprendizaje mientras potenciás tu rendimiento en el polvo de ladrillo.</p>
            <div className="text-sm text-zinc-500 space-y-2">
              <p>📍 <strong>Club Obras Alcorta:</strong> Av. Pres. Figueroa Alcorta 7250</p>
              <p>📍 <strong>Club Obras Libertador:</strong> Av. del Libertador 7281, Núñez</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}