import React from 'react';

export default function ConceptoComunidad() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      {/* Hero */}
      <header className="relative h-screen flex flex-col justify-center items-center text-center p-6 overflow-hidden bg-gradient-to-br from-[#f26322] to-[#f19a49]">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          {/* Pelota de tenis abstracta */}
          <circle cx="1010" cy="160" r="230" fill="white" fillOpacity="0.07" />
          <path
            d="M 830 40 Q 1010 160 830 280"
            fill="none"
            stroke="white"
            strokeOpacity="0.18"
            strokeWidth="3"
          />
          <path
            d="M 1190 40 Q 1010 160 1190 280"
            fill="none"
            stroke="white"
            strokeOpacity="0.18"
            strokeWidth="3"
          />

          {/* Red de conexiones: la comunidad */}
          <g stroke="white" strokeOpacity="0.25" strokeWidth="2">
            <line x1="120" y1="150" x2="260" y2="90" />
            <line x1="260" y1="90" x2="380" y2="180" />
            <line x1="120" y1="150" x2="200" y2="250" />
            <line x1="200" y1="250" x2="380" y2="180" />
            <line x1="380" y1="180" x2="470" y2="110" />
          </g>
          <g fill="white" fillOpacity="0.6">
            <circle cx="120" cy="150" r="6" />
            <circle cx="260" cy="90" r="8" />
            <circle cx="380" cy="180" r="7" />
            <circle cx="200" cy="250" r="5" />
            <circle cx="470" cy="110" r="6" />
          </g>

          {/* Cancha estilizada */}
          <g stroke="white" strokeOpacity="0.16" strokeWidth="3" fill="none">
            <rect x="150" y="600" width="900" height="180" rx="6" />
            <line x1="600" y1="600" x2="600" y2="780" />
            <line x1="380" y1="600" x2="380" y2="780" />
            <line x1="820" y1="600" x2="820" y2="780" />
            <line x1="150" y1="690" x2="1050" y2="690" strokeOpacity="0.3" />
          </g>
        </svg>

        <div className="relative z-10 max-w-2xl">
          <img src="/main-logo-tf.png" alt="Logo TFO" className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-black mb-4 text-white tracking-tight">
            Clases de Tenis diseñadas para <u>VOS</u>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Tenis, Preparación Física y mucha buena onda. Contamos con grupos de entrenamiento de todos los niveles para que te sumes.
          </p>
          <a
            href="https://wa.me/541159194951"
            className="inline-block bg-white hover:opacity-90 text-[#f26322] font-bold py-4 px-8 rounded-full text-lg transition-opacity"
          >
            Sumate
          </a>
        </div>
      </header>

      {/* Intro */}
      <section className="py-20 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#1f9a49" }}>No es solo una hora de tenis por semana</h2>
        <p className="text-lg text-stone-600 leading-relaxed">
        Contamos con clases de tenis particulares y grupales. Preparación física orientada al tenis, entrenamientos para equipos de interclubes, torneos y mucho más. Sumate, tenemos un grupo esperando por vos, no importa el nivel que tengas sino adonde querés llegar.
        </p>
      </section>

      {/* Bloques alternados */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="/tenis-fitness-33.jpeg"
              alt="Dos alumnos abrazados después de jugar"
              className="rounded-3xl shadow-xl w-full object-cover object-top aspect-[4/5]"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold mb-4 text-[#f26322]">Amigos de distintas generaciones</h3>
            <p className="text-lg text-stone-600">
              En la misma clase se cruzan chicos que recién empiezan con jugadores de toda la vida.
              Se arman parejas de dobles que después son amigos fuera de la cancha.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="/tenis-fitness-8.jpeg"
              alt="Dos alumnas festejando con medallas después de un torneo"
              className="rounded-3xl shadow-xl w-full object-cover aspect-[4/5]"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold mb-4 text-[#f19a49]">Los torneos se festejan juntos</h3>
            <p className="text-lg text-stone-600">
              Organizamos torneos de forma periódica para que puedas poner a prueba lo aprendido y compartir un momento divertido con amigos.
            </p>
          </div>
        </div>
      </section>

      {/* Galería de momentos */}
      <section className="py-20 px-6 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img
              src="/tenis-fitness-6.jpeg"
              alt="Grupo de alumnas sonriendo junto a la red"
              className="rounded-xl w-full h-56 object-cover"
            />
            <img
              src="/tenis-fitness-3.jpeg"
              alt="Alumno y alumna sonriendo antes de entrenar"
              className="rounded-xl w-full h-56 object-cover"
            />
            <img
              src="/tenis-fitness-10.jpeg"
              alt="Clase grupal entrenando en la cancha de polvo de ladrillo"
              className="rounded-xl w-full h-56 object-cover"
            />
            <img
              src="/tenis-fitness-34.jpeg"
              alt="Alumno jugando en la red durante una clase grupal"
              className="rounded-xl w-full h-56 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sedes */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10" style={{ color: "#1f9a49" }}>Dónde nos encontramos</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href="https://maps.app.goo.gl/et2BXg9R8bWWdWui8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-sm flex-1 hover:shadow-md transition-shadow"
            >
              <h4 className="font-bold text-lg mb-2 text-[#f26322]">Club Obras Alcorta</h4>
              <p className="text-stone-600">Av. Pres. Figueroa Alcorta 7250, Núñez</p>
            </a>
            <a
              href="https://maps.app.goo.gl/HXyoLuq3ZjdUBjA97"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-sm flex-1 hover:shadow-md transition-shadow"
            >
              <h4 className="font-bold text-lg mb-2 text-[#f26322]">Club Obras Libertador</h4>
              <p className="text-stone-600">Av. del Libertador 7281, Núñez</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1f9a49] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <img
            src="/profile.png"
            alt="Federico Magiarotti dando una clase"
            className="w-40 h-40 object-cover rounded-full border-4 border-white"
          />
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold mb-2">Federico Magiarotti</h3>
            <p className="text-white/90 mb-6 max-w-xl">
              Mi objetivo es que aprendas y mejores tu nivel, pero sobre todo que encuentres un grupo con el que
              tengas ganas de volver a jugar. El tenis se disfruta más acompañado.
            </p>
            <a
              href="https://wa.me/541159194951"
              className="inline-block bg-[#f26322] hover:opacity-90 text-white font-bold py-3 px-6 rounded-full transition-opacity"
            >
              Escribime por WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
