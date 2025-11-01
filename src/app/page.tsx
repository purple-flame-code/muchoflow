"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Code2, Smartphone, Scale, Bot, Zap, Shield, Mail } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-steel-gray/50">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="text-2xl font-serif font-bold text-deep-blue">
              Mucho Flow
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#inicio" className="text-sm font-medium text-gray-700 hover:text-deep-blue">
                Inicio
              </Link>
              <Link href="#servicios" className="text-sm font-medium text-gray-700 hover:text-deep-blue">
                Servicios
              </Link>
              <Link href="#portafolio" className="text-sm font-medium text-gray-700 hover:text-deep-blue">
                Portafolio
              </Link>
              <Link href="#precios" className="text-sm font-medium text-gray-700 hover:text-deep-blue">
                Precios
              </Link>
              <Link
                href="#contacto"
                className="px-6 py-2.5 bg-burnt-gold text-white rounded-lg font-semibold hover:bg-burnt-gold/90 transition-all hover:shadow-md"
              >
                Comienza con nosotros →
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Fixed Background */}
      <section
        id="inicio"
        className="relative pt-40 pb-32 overflow-hidden bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundColor: "#0D1B2A"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/95 via-deep-blue-800/90 to-deep-blue-900/95" />

        {/* Content */}
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-slide-up">
            Diseño Web <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-burnt-gold to-yellow-400">
              A Tu Medida
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Diseñamos y mantenemos páginas web, aplicaciones móviles, legal-tech y automatizaciones con IA.
            Creamos soluciones digitales en LATAM y Estados Unidos que impulsan resultados.
          </p>

          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 px-10 py-5 bg-burnt-gold text-white rounded-lg font-bold text-lg hover:bg-burnt-gold/90 transition-all hover:shadow-2xl group"
          >
            Comienza con nosotros
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Features/Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-burnt-gold font-bold text-sm uppercase tracking-wider mb-3">
              Características Principales
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
              Increíbles características de diseño web
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-br from-white to-steel-gray/10 rounded-xl border border-steel-gray hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-electric-blue/10 rounded-xl flex items-center justify-center mb-4">
                <Smartphone className="w-7 h-7 text-electric-blue" />
              </div>
              <h3 className="text-lg font-semibold text-deep-blue mb-2">Diseño Adaptable</h3>
              <p className="text-gray-600 text-sm">
                Sitios web responsivos que se adaptan perfectamente a cualquier dispositivo.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-white to-steel-gray/10 rounded-xl border border-steel-gray hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-burnt-gold/10 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-7 h-7 text-burnt-gold" />
              </div>
              <h3 className="text-lg font-semibold text-deep-blue mb-2">Animaciones Atractivas</h3>
              <p className="text-gray-600 text-sm">
                Efectos visuales modernos que capturan la atención de tus usuarios.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-white to-steel-gray/10 rounded-xl border border-steel-gray hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-deep-blue/10 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-deep-blue" />
              </div>
              <h3 className="text-lg font-semibold text-deep-blue mb-2">Optimizada para SEO</h3>
              <p className="text-gray-600 text-sm">
                Posicionamiento en buscadores para que tus clientes te encuentren.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-white to-steel-gray/10 rounded-xl border border-steel-gray hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-burnt-gold/10 rounded-xl flex items-center justify-center mb-4">
                <Bot className="w-7 h-7 text-burnt-gold" />
              </div>
              <h3 className="text-lg font-semibold text-deep-blue mb-2">IA Integrada</h3>
              <p className="text-gray-600 text-sm">
                Automatizaciones y chatbots inteligentes para mejorar la experiencia del usuario.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-white to-steel-gray/10 rounded-xl border border-steel-gray hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-electric-blue/10 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-electric-blue" />
              </div>
              <h3 className="text-lg font-semibold text-deep-blue mb-2">Soporte Técnico</h3>
              <p className="text-gray-600 text-sm">
                Asistencia continua y mantenimiento preventivo para tu tranquilidad.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-white to-steel-gray/10 rounded-xl border border-steel-gray hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-deep-blue/10 rounded-xl flex items-center justify-center mb-4">
                <Code2 className="w-7 h-7 text-deep-blue" />
              </div>
              <h3 className="text-lg font-semibold text-deep-blue mb-2">Código Limpio</h3>
              <p className="text-gray-600 text-sm">
                Desarrollo profesional siguiendo las mejores prácticas de la industria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="section-padding bg-gradient-to-br from-deep-blue via-deep-blue-800 to-deep-blue-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-burnt-gold font-bold text-sm uppercase tracking-wider mb-3">
              Nuestros Servicios
            </p>
            <h2 className="text-white mb-6">Soluciones Digitales Completas</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-burnt-gold/50 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-burnt-gold/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-burnt-gold/30 transition-colors">
                <Code2 className="w-8 h-8 text-burnt-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Creación de Sitios Web</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Páginas web desde cero, landing pages y tiendas e-commerce optimizadas para tu negocio.
              </p>
              <div className="inline-flex items-center gap-2 text-burnt-gold font-semibold text-sm">
                Ver más
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Service 2 */}
            <div className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-burnt-gold/50 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-electric-blue/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-electric-blue/30 transition-colors">
                <Smartphone className="w-8 h-8 text-electric-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Desarrollo de Apps</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Aplicaciones móviles y web progresivas para iOS y Android con diseño moderno.
              </p>
              <div className="inline-flex items-center gap-2 text-burnt-gold font-semibold text-sm">
                Ver más
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Service 3 */}
            <div className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-burnt-gold/50 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-burnt-gold/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-burnt-gold/30 transition-colors">
                <Scale className="w-8 h-8 text-burnt-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Legal-Tech Apps</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Soluciones tecnológicas especializadas para despachos legales y profesionales del derecho.
              </p>
              <div className="inline-flex items-center gap-2 text-burnt-gold font-semibold text-sm">
                Ver más
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Service 4 */}
            <div className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-burnt-gold/50 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-electric-blue/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-electric-blue/30 transition-colors">
                <Bot className="w-8 h-8 text-electric-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Automatizaciones & Bots</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Chatbots inteligentes y automatizaciones que optimizan tus procesos empresariales.
              </p>
              <div className="inline-flex items-center gap-2 text-burnt-gold font-semibold text-sm">
                Ver más
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Service 5 */}
            <div className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-burnt-gold/50 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-burnt-gold/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-burnt-gold/30 transition-colors">
                <Sparkles className="w-8 h-8 text-burnt-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">IA Integrada</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Inteligencia artificial embebida en tus páginas web para experiencias personalizadas.
              </p>
              <div className="inline-flex items-center gap-2 text-burnt-gold font-semibold text-sm">
                Ver más
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Service 6 */}
            <div className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-burnt-gold/50 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-electric-blue/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-electric-blue/30 transition-colors">
                <Shield className="w-8 h-8 text-electric-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mantenimiento Web</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Soporte continuo, actualizaciones y optimización de tu sitio web o aplicación.
              </p>
              <div className="inline-flex items-center gap-2 text-burnt-gold font-semibold text-sm">
                Ver más
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portafolio" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-burnt-gold font-bold text-sm uppercase tracking-wider mb-3">
              Proyectos Recientes
            </p>
            <h2 className="mb-4">Galería de Diseños Web</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Echa un vistazo a nuestra selección de proyectos más recientes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Portfolio items - Placeholders */}
            {[
              { title: "E-commerce", category: "Tienda Online" },
              { title: "Legal-Tech App", category: "Aplicación" },
              { title: "Landing Page", category: "Marketing" },
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-deep-blue/10 to-burnt-gold/10 rounded-2xl mb-4 overflow-hidden border-2 border-steel-gray group-hover:border-burnt-gold transition-all">
                  <div className="w-full h-full flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🎨</div>
                      <div className="font-semibold">{item.title}</div>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-deep-blue mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.category}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-burnt-gold text-white rounded-lg font-semibold hover:bg-burnt-gold/90 transition-all group"
            >
              Ver Portafolio Completo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="section-padding bg-gradient-to-br from-steel-gray/30 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-burnt-gold font-bold text-sm uppercase tracking-wider mb-3">
              Nuestro Paquete de Precios
            </p>
            <h2 className="mb-6">Paquetes de Diseño Web</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Planes transparentes y accesibles para impulsar tu presencia digital
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Landing Page */}
            <div className="p-8 bg-white rounded-2xl border-2 border-steel-gray hover:border-burnt-gold hover:shadow-xl transition-all">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-deep-blue mb-4">LANDING PAGE</h3>
                <div className="text-5xl font-bold text-burnt-gold mb-2">
                  $250
                </div>
                <p className="text-gray-600">/ Dos pagos</p>
                <div className="mt-4 px-4 py-2 bg-burnt-gold/10 text-burnt-gold rounded-full text-sm font-bold inline-block">
                  ¡Oferta Especial!
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start gap-2 text-gray-700">
                  <div className="w-5 h-5 bg-burnt-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-burnt-gold rounded-full" />
                  </div>
                  <span>Hosting, dominio, seguro SSL</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <div className="w-5 h-5 bg-burnt-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-burnt-gold rounded-full" />
                  </div>
                  <span>Correos corporativos</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <div className="w-5 h-5 bg-burnt-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-burnt-gold rounded-full" />
                  </div>
                  <span>Formulario de contacto</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <div className="w-5 h-5 bg-burnt-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-burnt-gold rounded-full" />
                  </div>
                  <span>Integración con redes sociales</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <div className="w-5 h-5 bg-burnt-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-burnt-gold rounded-full" />
                  </div>
                  <span>SEO básico</span>
                </li>
              </ul>
              <Link
                href="#contacto"
                className="block w-full py-3 text-center bg-steel-gray text-deep-blue rounded-lg font-semibold hover:bg-steel-gray/80 transition-all"
              >
                Adquirir Plan →
              </Link>
            </div>

            {/* Web Empresarial - Featured */}
            <div className="p-8 bg-gradient-to-br from-deep-blue to-deep-blue-800 rounded-2xl border-2 border-burnt-gold shadow-2xl transform md:scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-burnt-gold text-white text-sm font-bold rounded-full">
                Más Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-4">WEB EMPRESARIAL</h3>
                <div className="text-5xl font-bold text-burnt-gold mb-2">
                  $450
                </div>
                <p className="text-gray-300">/ Dos pagos</p>
                <div className="mt-4 px-4 py-2 bg-burnt-gold/20 text-burnt-gold rounded-full text-sm font-bold inline-block">
                  ¡Oferta Especial!
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start gap-2 text-white">
                  <div className="w-5 h-5 bg-burnt-gold/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-burnt-gold rounded-full" />
                  </div>
                  <span>Hosting, dominio, seguro SSL</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <div className="w-5 h-5 bg-burnt-gold/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-burnt-gold rounded-full" />
                  </div>
                  <span>Sitio web empresarial de 4 páginas</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <div className="w-5 h-5 bg-burnt-gold/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-burnt-gold rounded-full" />
                  </div>
                  <span>Galerías de imágenes</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <div className="w-5 h-5 bg-burnt-gold/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-burnt-gold rounded-full" />
                  </div>
                  <span>Chatbot con IA incluido</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <div className="w-5 h-5 bg-burnt-gold/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-burnt-gold rounded-full" />
                  </div>
                  <span>SEO básico</span>
                </li>
              </ul>
              <Link
                href="#contacto"
                className="block w-full py-3 text-center bg-burnt-gold text-white rounded-lg font-bold hover:bg-burnt-gold/90 transition-all"
              >
                Adquirir Plan →
              </Link>
            </div>

            {/* Tienda Online */}
            <div className="p-8 bg-white rounded-2xl border-2 border-steel-gray hover:border-burnt-gold hover:shadow-xl transition-all">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-deep-blue mb-4">TIENDA ONLINE</h3>
                <div className="text-5xl font-bold text-burnt-gold mb-2">
                  $800
                </div>
                <p className="text-gray-600">/ Dos pagos</p>
                <div className="mt-4 px-4 py-2 bg-burnt-gold/10 text-burnt-gold rounded-full text-sm font-bold inline-block">
                  ¡Oferta Especial!
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start gap-2 text-gray-700">
                  <div className="w-5 h-5 bg-burnt-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-burnt-gold rounded-full" />
                  </div>
                  <span>Tienda en línea hasta 25 productos</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <div className="w-5 h-5 bg-burnt-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-burnt-gold rounded-full" />
                  </div>
                  <span>Pasarela de pago</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <div className="w-5 h-5 bg-burnt-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-burnt-gold rounded-full" />
                  </div>
                  <span>Gestión de pedidos e inventario</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <div className="w-5 h-5 bg-burnt-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-burnt-gold rounded-full" />
                  </div>
                  <span>Automatizaciones con IA</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <div className="w-5 h-5 bg-burnt-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-burnt-gold rounded-full" />
                  </div>
                  <span>SEO básico</span>
                </li>
              </ul>
              <Link
                href="#contacto"
                className="block w-full py-3 text-center bg-deep-blue text-white rounded-lg font-semibold hover:bg-deep-blue-700 transition-all"
              >
                Adquirir Plan →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contacto" className="section-padding bg-gradient-to-br from-deep-blue via-deep-blue-800 to-deep-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-burnt-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-electric-blue rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-white mb-6">¿Tienes Algún Proyecto En Mente?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Siéntete libre de contactarnos o simplemente saludar. Transformamos tu visión en realidad digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="mailto:info.soy@lexvence.com"
              className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all group"
            >
              <Mail className="w-6 h-6 text-burnt-gold" />
              <div className="text-left">
                <div className="text-sm text-gray-300">Email</div>
                <div className="font-semibold">info.soy@lexvence.com</div>
              </div>
            </a>

            <Link
              href="mailto:info.soy@lexvence.com?subject=Consulta sobre diseño web"
              className="inline-flex items-center gap-2 px-10 py-5 bg-burnt-gold text-white rounded-lg font-bold text-lg hover:bg-burnt-gold/90 transition-all hover:shadow-2xl"
            >
              Comienza con nosotros
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>

          <p className="text-sm text-gray-400">
            Sirviendo empresas en toda Latinoamérica y Estados Unidos
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-blue text-white py-12 border-t border-white/10">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-12 mb-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-white">Mucho Flow</h3>
              <p className="text-gray-400 text-sm">
                Por Alexandra Vence. Diseño web, apps y soluciones digitales con IA para LATAM y Estados Unidos.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Servicios</h4>
              <div className="space-y-2 text-sm">
                <Link href="#servicios" className="block text-gray-400 hover:text-burnt-gold transition-colors">
                  Diseño Web
                </Link>
                <Link href="#servicios" className="block text-gray-400 hover:text-burnt-gold transition-colors">
                  Apps & Legal-Tech
                </Link>
                <Link href="#servicios" className="block text-gray-400 hover:text-burnt-gold transition-colors">
                  Automatizaciones IA
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Empresa</h4>
              <div className="space-y-2 text-sm">
                <Link href="#portafolio" className="block text-gray-400 hover:text-burnt-gold transition-colors">
                  Portafolio
                </Link>
                <Link href="#precios" className="block text-gray-400 hover:text-burnt-gold transition-colors">
                  Precios
                </Link>
                <Link href="#contacto" className="block text-gray-400 hover:text-burnt-gold transition-colors">
                  Contacto
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Contacto</h4>
              <a
                href="mailto:info.soy@lexvence.com"
                className="text-sm text-gray-400 hover:text-burnt-gold transition-colors"
              >
                info.soy@lexvence.com
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Mucho Flow. Parte del ecosistema LexVence. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
