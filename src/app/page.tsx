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
            No necesitas ser experto en tecnología, necesitas una presencia clara, profesional y alineada con quién eres.
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
              <li>✔ Live en 72hrs. Feliz o te devolvemos tu dinero.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <div className="border border-yellow-500 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">No-Brainer Express — $150</h3>
              <p className="text-gray-700 mb-2">Para landing pages, portafolios o tiendas Shopify.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Sitio de 1 sección</li>
                <li>• Integración con pasarela de pago </li>
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
              <h3 className="text-xl font-bold mb-2">Avanzado — $837.99</h3>
              <p className="text-gray-700 mb-2">Proyectos únicos, prototipos y apps funcionales.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Funcionalidades personalizadas</li>
                <li>• Apps o MVPs </li>
                <li>• Escalable y acompañado</li>
              </ul>
            </div>
          </div>
        </div>
        
      </section>
      {/* Add-ons AI */}
      <section id="addons" className="bg-white py-24 px-6 text-deep-blue">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold font-serif">Herramientas AI desde $29.99/mes</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Añade funcionalidades avanzadas sin complicarte. Desde solo $29.99 al mes (o $527/año), activa herramientas que mejoran tu presencia, comunicación y productividad. Todo gestionado desde tu portal, sin código, sin estrés.
            </p>
            <p className="text-sm text-yellow-600 font-semibold">
              Sin trabajo técnico. Todo está listo para ti.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="bg-zinc-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">AI Blog Writer</h3>
              <p className="text-gray-700">Publicaciones optimizadas en tu sitio sin escribir. Generadas con IA en tu panel.</p>
            </div>
            <div className="bg-zinc-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Línea USA + App</h3>
              <p className="text-gray-700">Número de EE.UU. redirigido a tu celular. Ideal para vender en el extranjero.</p>
            </div>
            <div className="bg-zinc-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Vault de 5TB</h3>
              <p className="text-gray-700">Espacio seguro para almacenar cursos, portafolios, videos y más.</p>
            </div>
            <div className="bg-zinc-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Portal White Label</h3>
              <p className="text-gray-700">Crea un espacio privado con tu marca para entregar contenido o atender clientes.</p>
            </div>
            <div className="bg-zinc-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Asistente de Respuesta AI</h3>
              <p className="text-gray-700">Mensajes automatizados con tu voz para atender visitantes 24/7.</p>
            </div>
            <div className="bg-zinc-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">AI Pitch Generator</h3>
              <p className="text-gray-700">Presentaciones y textos para redes o web listos en segundos.</p>
            </div>
            <div className="bg-zinc-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Traducción Automática</h3>
              <p className="text-gray-700">Incluye 2 idiomas. Puedes añadir más. Traducción contextual por IA.</p>
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
              <h3 className="text-xl font-semibold">1. Compra tu plan</h3>
              <p className="text-gray-700">Así de simple. Precio transparente — sin costos ocultos.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">2. Onboarding call (1 hora)</h3>
              <p className="text-gray-700">Una videollamada donde exploramos tu visión, tu negocio o idea, estilo, contenido y referencias. Concluye con tu aprobación del enfoque general: wireframes, estructura y diseño. Las 24 horas comienzan a contar desde aquí.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">3. Tu sitio va LIVE en 24hrs</h3>
              <p className="text-gray-700">Una vez definido todo, construimos tu sitio y lo publicamos. Recibes un correo con el enlace, accesos y credenciales.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">4. Cierre 1:1 + Bonus</h3>
              <p className="text-gray-700">Tendrás una reunión final para resolver dudas y dar recibido conforme. Si estás satisfecho, puedes dejar tu reseña y recibirás un bonus exclusivo. Si no lo estás, te devolvemos tu dinero. Sin rodeos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section id="faq" className="py-24 px-6 bg-white text-deep-blue">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-4xl font-bold font-serif">Preguntas Frecuentes</h2>
          <div className="space-y-8 text-left">
            <div>
              <h3 className="text-lg font-semibold">¿Qué pasa si no me gusta el resultado?</h3>
              <p className="text-gray-700">Tienes garantía total: si no estás satisfecho después de recibir tu sitio, te reembolsamos tu dinero.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">¿Qué necesito para comenzar?</h3>
              <p className="text-gray-700">Solo elegir tu plan y tener disponible una hora para la video llamada de onboarding. Nosotros nos encargamos del resto.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">¿Puedo modificar mi sitio luego?</h3>
              <p className="text-gray-700">Sí. Puedes hacerlo tú mismo o solicitar ajustes como add-on.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">¿Puedo pagar en cuotas?</h3>
              <p className="text-gray-700">Si, tenemos opciones de pago mensuales facilitadas por 3rd parties que se despliegan para ti si eres seleccionable en el check out. Pero puedes usar una tarjeta que permita pagar a plazos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section id="contacto" className="py-24 px-6 text-center bg-yellow-500 text-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl font-bold font-serif">¿Listo para salir del anonimato?</h2>
          <p className="text-lg">Compra tu plan y empieza tu éxodo digital hoy mismo. En menos de 72 horas, tu presencia en línea será real, funcional y hermosa.</p>
          <a href="#precios" className="inline-block mt-6 px-10 py-4 bg-white text-yellow-600 font-semibold text-lg rounded-lg hover:bg-zinc-100 transition">
            Ver Planes y Comprar
          </a>
        </div>
      </section>

    </main>
  );
}

