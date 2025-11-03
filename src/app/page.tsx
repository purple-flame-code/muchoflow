'use client';

import React, { useState } from 'react';

function CheckoutButton({ name, description, amount }) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, amount }),
    });

    const data = await res.json();
    if (data?.url) {
      window.location.href = data.url;
    } else {
      alert('Error en el pago');
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="mt-4 px-6 py-3 bg-burnt-gold text-white font-semibold rounded-lg hover:bg-burnt-gold/90 transition"
    >
      {loading ? 'Redirigiendo...' : `Comprar ${name}`}
    </button>
  );
}

export default function Page() {
  return (
    <main className="bg-white text-deep-blue font-sans">

      {/* Hero */}
      <section className="bg-gradient-to-br from-deep-blue to-black text-white py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-6xl font-bold font-serif text-burnt-gold drop-shadow">Xd — Éxodo Digital</h1>
          <p className="text-xl font-light max-w-2xl mx-auto text-white">
            Hoy la migración es digital. Llevamos tu talento, producto o servicio a otro nivel y te ponemos en el mapa.
          </p>
          <p className="mt-2 text-sm text-amber-300 font-medium uppercase tracking-wide">
            Live en 24hrs. Feliz o te devolvemos tu dinero.
          </p>
          <a href="#precios" className="inline-block mt-8 px-8 py-4 bg-burnt-gold text-deep-blue font-semibold text-lg rounded-lg shadow hover:bg-burnt-gold/90 transition">
            Ver Planes
          </a>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-24 px-6 bg-zinc-50 text-center">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-4xl font-bold font-serif">Lo que hacemos</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Llevamos lo que ya haces bien al entorno digital, con herramientas simples, estéticas y funcionales.
            No necesitas ser experta en tecnología, necesitas una presencia clara, profesional y alineada con quién eres.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-gray-700">
            <li><strong>• Identidad Visual:</strong> Representamos tu propósito con estética y coherencia.</li>
            <li><strong>• Sitio Web Profesional:</strong> Rápido, responsive y listo para ser encontrado.</li>
            <li><strong>• Portafolio Digital:</strong> Mostramos tu trabajo de forma visual y creíble.</li>
            <li><strong>• Conexión con Audiencia:</strong> WhatsApp, calendario, newsletters o redes.</li>
            <li><strong>• Optimización:</strong> SEO básico, estructura clara, performance sólida.</li>
          </ul>
        </div>
      </section>

      {/* Planes & Precios */}
      <section id="precios" className="bg-white py-24 px-6 text-center">
        <div className="max-w-6xl mx-auto space-y-16">
          <h2 className="text-4xl font-bold font-serif">Planes & Precios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <div className="border border-burnt-gold p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">No-Brainer Express — $150</h3>
              <p className="text-gray-700 mb-2">Landing pages, portafolios o tiendas Shopify. Live en 24hrs.</p>
              <CheckoutButton name="No-Brainer Express" description="Landing page en 24hrs" amount={15000} />
            </div>
            <div className="bg-zinc-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Básico — $297.32</h3>
              <p className="text-gray-700 mb-2">Presencia digital sólida, sin complicaciones.</p>
              <CheckoutButton name="Básico" description="Sitio de 1 página, diseño visual alineado" amount={29732} />
            </div>
            <div className="bg-zinc-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Estándar — $497.32</h3>
              <p className="text-gray-700 mb-2">Para quienes ya tienen una práctica activa.</p>
              <CheckoutButton name="Estándar" description="Hasta 5 secciones, portafolio visual" amount={49732} />
            </div>
            <div className="bg-zinc-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Avanzado — $697.99</h3>
              <p className="text-gray-700 mb-2">Multilenguaje, ecommerce, membresías, más.</p>
              <CheckoutButton name="Avanzado" description="Desarrollo escalable, flexible" amount={69799} />
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons AI */}
      <section id="addons" className="bg-white py-24 px-6 text-deep-blue">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h2 className="text-4xl font-bold font-serif">Herramientas que hacen más con menos</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Desde solo $29.99 al mes. Activación instantánea y sin tareas técnicas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="bg-zinc-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">AI Blog Writer</h3>
              <p className="text-gray-700">Blog optimizado sin escribir. Lo genera tu panel.</p>
            </div>
            <div className="bg-zinc-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Línea USA + App</h3>
              <p className="text-gray-700">Número de EE.UU. redirigido a tu celular.</p>
            </div>
            <div className="bg-zinc-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Vault de 5TB</h3>
              <p className="text-gray-700">Guarda cursos, portafolios, videos y más.</p>
            </div>
            <div className="bg-zinc-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Portal White Label</h3>
              <p className="text-gray-700">Tu marca, tu espacio para entregar contenido.</p>
            </div>
            <div className="bg-zinc-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Asistente AI</h3>
              <p className="text-gray-700">Respuestas automáticas con tu voz 24/7.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section id="proceso" className="py-24 px-6 bg-zinc-100 text-deep-blue">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-4xl font-bold font-serif">Cómo trabajamos</h2>
          <p className="text-lg text-gray-700">
            Nuestro proceso es ágil, claro y transparente. Tu tiempo es valioso. Esto es lo que puedes esperar:
          </p>
          <div className="text-left space-y-8">
            <div>
              <h3 className="text-xl font-semibold">1. Compra tu boleto</h3>
              <p className="text-gray-700">Así de simple. Aquí no se separa puesto — se despega.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">2. Onboarding call (1 hora)</h3>
              <p className="text-gray-700">Una videollamada donde exploramos tu visión, tu negocio o idea, estilo, contenido y referencias. Las 24 horas comienzan desde aquí.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">3. Tu sitio va LIVE en 24hrs</h3>
              <p className="text-gray-700">Construimos tu sitio y lo lanzamos. Recibes un correo con todo listo.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">4. Cierre 1:1 + Bonus</h3>
              <p className="text-gray-700">Resolución de dudas, confirmación y reseña opcional a cambio de un bonus.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section id="contacto" className="py-24 px-6 text-center bg-burnt-gold text-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl font-bold font-serif">¿Listo para salir del anonimato?</h2>
          <p className="text-lg">Compra tu plan y empieza tu éxodo digital hoy mismo. En menos de 24 horas, tu presencia en línea será real, funcional y hermosa.</p>
          <a href="#precios" className="inline-block mt-6 px-10 py-4 bg-white text-burnt-gold font-semibold text-lg rounded-lg hover:bg-zinc-100 transition">
            Ver Planes y Comprar
          </a>
        </div>
      </section>

    </main>
  );
}
