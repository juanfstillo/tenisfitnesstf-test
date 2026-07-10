import React from 'react';

export default function ConceptoComunidad() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      {/* Hero */}
      <header className="relative h-screen flex flex-col justify-end items-center text-center p-6 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/tenis-fitness-10.jpeg"
            alt="Grupo de alumnos festejando juntos en la cancha"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-stone-950/10" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <img src="/main-logo-tf.png" alt="Logo TFO" className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-black mb-4 text-white tracking-tight">
            Un grupo que te espera en cada clase
          </h1>
          <p className="text-lg md:text-xl text-stone-200 mb-8">
            Tenis, amistad y buena onda en Club Obras. Con Federico Magiarotti vas a entrenar en un lugar donde te conocen por tu nombre.
          </p>
          <a
            href="https://wa.me/541159194951"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold py-4 px-8 rounded-full text-lg transition-colors"
          >
            Sumate al grupo
          </a>
        </div>
      </header>

      {/* Intro */}
      <section className="py-20 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Acá no venís solo a jugar</h2>
        <p className="text-lg text-stone-600 leading-relaxed">
          Las clases son la excusa. Lo que se arma alrededor —los grupos de mensajes, los mates entre set y set,
          los partidos después del entrenamiento— es lo que hace que la gente vuelva semana tras semana.
          Principiantes y jugadores avanzados comparten cancha, consejos y algún que otro asado.
        </p>
      </section>

      {/* Bloques alternados */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="/tenis-fitness-33.jpeg"
              alt="Dos alumnos abrazados después de jugar"
              className="rounded-3xl shadow-xl w-full object-cover aspect-[4/5]"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold mb-4 text-amber-600">Amigos de distintas generaciones</h3>
            <p className="text-lg text-stone-600">
              En la misma clase se cruzan chicos que recién empiezan con jugadores de toda la vida.
              Se arman parejas de dobles que después son amigos fuera de la cancha.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="/tenis-fitness-6.jpeg"
              alt="Grupo de alumnas sonriendo junto a la red"
              className="rounded-3xl shadow-xl w-full object-cover aspect-[16/10]"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold mb-4 text-amber-600">Grupos, no solo clases</h3>
            <p className="text-lg text-stone-600">
              Las clases grupales están armadas para que se conozcan entre sí, no solo con el profe.
              Muchos grupos terminan organizando su propio torneo interno o su previa de fin de semana.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="/tenis-fitness-8.jpeg"
              alt="Dos alumnas festejando con medallas después de un torneo"
              className="rounded-3xl shadow-xl w-full object-cover aspect-[4/5]"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold mb-4 text-amber-600">Los torneos se festejan juntos</h3>
            <p className="text-lg text-stone-600">
              Ganar o perder, después del partido está el grupo para el asado, la foto y la revancha.
              Competir en equipo hace que cada torneo se viva entre todos.
            </p>
          </div>
        </div>
      </section>

      {/* Galería de momentos */}
      <section className="py-20 px-6 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Momentos de la comunidad</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img
              src="/tenis-fitness-4.jpeg"
              alt="Alumno y alumna sonriendo antes de entrenar"
              className="rounded-xl w-full h-56 object-cover"
            />
            <img
              src="/tenis-fitness-3.jpeg"
              alt="Clase grupal entrenando en la cancha de polvo de ladrillo"
              className="rounded-xl w-full h-56 object-cover"
            />
            <img
              src="/tenis-fitness-5.jpeg"
              alt="Alumno jugando en la red durante una clase grupal"
              className="rounded-xl w-full h-56 object-cover col-span-2 md:col-span-1"
            />
          </div>
        </div>
      </section>

      {/* Sedes */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Dónde nos encontramos</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm flex-1">
              <h4 className="font-bold text-lg mb-2 text-amber-600">Club Obras Alcorta</h4>
              <p className="text-stone-600">Av. Pres. Figueroa Alcorta 7250</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm flex-1">
              <h4 className="font-bold text-lg mb-2 text-amber-600">Club Obras Libertador</h4>
              <p className="text-stone-600">Av. del Libertador 7281, Núñez</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <img
            src="/tenis-fitness-3.jpeg"
            alt="Federico Magiarotti dando una clase"
            className="w-40 h-40 object-cover rounded-full border-4 border-amber-500"
          />
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold mb-2">Federico Magiarotti</h3>
            <p className="text-stone-400 mb-6 max-w-xl">
              Mi objetivo es que aprendas y mejores tu nivel, pero sobre todo que encuentres un grupo con el que
              tengas ganas de volver a jugar. El tenis se disfruta más acompañado.
            </p>
            <a
              href="https://wa.me/541159194951"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold py-3 px-6 rounded-full transition-colors"
            >
              Escribime por WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
