import React from 'react';

export default function Page() {
  return (
    <main className="bg-white text-deep-blue font-sans">

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-deep-blue text-white py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-6xl font-extrabold font-serif tracking-tight text-white drop-shadow-md">
            Xd — Éxodo Digital
          </h1>
          <p className="text-2xl font-light max-w-2xl mx-auto text-white/90">
            Hoy la migración es digital. Llevamos tu talento, producto o servicio a otro nivel y te ponemos en el mapa.
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-yellow-400">
            LIVE EN 24HRS. FELIZ O TE DEVOLVEMOS TU DINERO.
          </p>
          <a href="#precios" className="inline-block mt-8 px-8 py-4 bg-yellow-500 text-deep-blue font-bold text-lg rounded-lg shadow hover:bg-yellow-400 transition">
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
          <div className="space-y-4">
            <h2 className="text-4xl font-bold font-serif">Planes & Precios</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Todos los planes incluyen:
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✔ Correo profesional @tuempresa.com</li>
              <li>✔ Widget bilingüe incluido (más idiomas como add-on)</li>
              <li>✔ Optimización SEO técnica</li>
              <li>✔ WhatsApp, email y redes conectados</li>
              <li>✔ Hosting configurado (si ya tienes dominio)</li>
              <li>✔ Sitio responsivo, veloz y con diseño a medida</li>
              <li>✔ Panel editable (CMS) si aplica</li>
              <li>✔ Soporte post-lanzamiento (7 días)</li>
              <li>✔ Live en 24hrs. Feliz o te devolvemos tu dinero.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <div className="border border-yellow-500 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">No-Brainer Express — $150</h3>
              <p className="text-gray-700 mb-2">Para landing pages, portafolios o tiendas Shopify.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Sitio de 1 sección</li>
                <li>• Integración con WhatsApp o Shopify</li>
                <li>• Publicado en 24 horas tras onboarding</li>
              </ul>
            </div>
            <div className="bg-zinc-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Básico — $297.32</h3>
              <p className="text-gray-700 mb-2">Una presencia digital sólida, sin complicaciones.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Sitio de 1 página</li>
                <li>• Diseño visual alineado</li>
                <li>• Contacto directo y responsive</li>
              </ul>
            </div>
            <div className="bg-zinc-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Estándar — $497.32</h3>
              <p className="text-gray-700 mb-2">Para quienes ya tienen una práctica activa.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Sitio de hasta 5 secciones</li>
                <li>• Portafolio visual</li>
                <li>• Integraciones a redes y calendarios</li>
              </ul>
            </div>
            <div className="bg-zinc-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Avanzado — $697.99</h3>
              <p className="text-gray-700 mb-2">Proyectos únicos, prototipos y apps funcionales.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Funcionalidades personalizadas</li>
                <li>• Apps o MVPs desde $900</li>
                <li>• Escalable y acompañado</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

