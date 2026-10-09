'use client';

import { useState } from 'react';
import Image from 'next/image';

export function Biography() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [lang, setLang] = useState<'es' | 'en'>('es');

  return (
    <section className="border-t border-border px-4 py-12 max-w-5xl mx-auto">
      {/* Header con botón para alternar entre ES / EN */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            {lang === 'es' ? 'Biografía' : 'Biography'}
          </h2>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
            {lang === 'es' ? 'Trayectoria y Visión Artística' : 'The Journey & Artistic Vision'}
          </p>
        </div>

        {/* Botón de alternancia de idioma */}
        <button
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10 hover:border-white/30"
          title="Cambiar idioma / Switch language"
        >
          <span className={lang === 'es' ? 'text-white' : 'text-white/40'}>ES</span>
          <span className="text-white/30">/</span>
          <span className={lang === 'en' ? 'text-white' : 'text-white/40'}>EN</span>
        </button>
      </div>

      <div className="relative">
        {/* Editorial Swiss/Brutalist Typography Style */}
        <div className="mb-6 select-none flex flex-col gap-6">
          {/* Bloque superior izquierdo */}
          <div className="max-w-[85%] text-left">
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-foreground leading-[0.98]">
              {lang === 'es'
                ? 'Karther construye desde la pista.'
                : 'Karther builds from the dancefloor.'}
            </h3>
          </div>

          {/* Bloque medio derecho */}
          <div className="w-full flex justify-end">
            <div className="max-w-[85%] text-right">
              <p className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white/90 leading-[1.05]">
                {lang === 'es'
                  ? 'Con grooves percusivos y una marcada estética inspirada en el sonido urbano de los 90s y 00s.'
                  : 'With percussive grooves and a distinct aesthetic inspired by the urban sound of the 90s and 00s.'}
              </p>
            </div>
          </div>
        </div>

        {/* Expanded content with full bio details */}
        {isExpanded ? (
          <div className="mt-8 animate-in fade-in duration-500 space-y-5">
            {/* Foto sin marco ni bordes redondeados (alineada al milímetro con el texto) */}
            <div className="float-right ml-4 mb-3 mt-1.5 w-[120px] sm:w-[160px] md:w-[190px]">
              <div className="relative aspect-[3/4] overflow-hidden shadow-2xl">
                <Image
                  src="/multimedia-karther/hero-photos/editorial-photo.avif"
                  alt="Karther Editorial"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Texto en blanco (text-white/90) al lado IZQUIERDO */}
            {lang === 'es' ? (
              <>
                <p className="text-sm leading-relaxed text-white/90 text-justify">
                  En 2023 comenzó a ganar reconocimiento dentro de la escena electrónica colombiana gracias a su remix de “21 Questions” de 50 Cent, track que impulsó su crecimiento y le permitió compartir escenario junto a Gordo en Cali junto a Booth Rec. En 2025 fue nominado a los Premios CDA como “Mejor Productor Revelación” de Colombia y ha compartido tarima junto a artistas internacionales como Classmatic, Rafa Barrios, WAFF y Sergio Saffe, además de realizar presentaciones en B2B junto a Koleto.
                </p>

                <p className="text-sm leading-relaxed text-white/90 text-justify">
                  Su música ha sido lanzada en sellos como Harvibal, Booth Rec, High Quality, Nuloud, Magic Beatz Records, entre otros, además de recibir support en clubes y festivales por parte de artistas como Harvy Valencia, Tony Guerra, Oscar G, Koleto, Ramón Bedoya, Sortech, Moreno & Prieto, Jonathan Jaramillo y Víctor Vergara, con quien además ha desarrollado colaboraciones musicales oficiales. Sus producciones también han sido descargadas por artistas internacionales como Marco Carola, Paco Osuna, Cloonee, Fisher y Gordo, llevando su música a escenarios y clubes de países como España, México, Argentina, Chile, Venezuela, Ecuador y Colombia, además de espacios icónicos como Space Miami. Además, su track inédito “Gomela” ha comenzado a generar expectativa dentro de la escena electrónica gracias al support internacional de Harvy Valencia incluso antes de su lanzamiento oficial.
                </p>

                <p className="text-sm leading-relaxed text-white/90 text-justify">
                  Actualmente, Karther continúa consolidando una propuesta artística auténtica, enfocada en conectar la energía del dancefloor con la esencia underground y street de la vieja escuela.
                </p>
              </>
            ) : (
              <>
                <p className="text-sm leading-relaxed text-white/90 text-justify">
                  In 2023, he began gaining widespread recognition within the Colombian electronic music scene thanks to his remix of 50 Cent’s “21 Questions”, a track that boosted his growth and allowed him to share the stage with Gordo in Cali alongside Booth Rec. In 2025, he was nominated at the CDA Awards as Colombia’s “Best Breakthrough Producer” and has shared stages with international heavyweights like Classmatic, Rafa Barrios, WAFF, and Sergio Saffe, in addition to performing B2B sets with Koleto.
                </p>

                <p className="text-sm leading-relaxed text-white/90 text-justify">
                  His music has been released on renowned record labels such as Harvibal, Booth Rec, High Quality, Nuloud, Magic Beatz Records, and more, while receiving heavy club and festival support from artists like Harvy Valencia, Tony Guerra, Oscar G, Koleto, Ramón Bedoya, Sortech, Moreno & Prieto, Jonathan Jaramillo, and Víctor Vergara, with whom he has also produced official collaborations. His productions have also been charted and downloaded by global icons such as Marco Carola, Paco Osuna, Cloonee, Fisher, and Gordo, carrying his sound to stages across Spain, Mexico, Argentina, Chile, Venezuela, Ecuador, and Colombia, as well as legendary venues like Space Miami. Furthermore, his unreleased weapon “Gomela” has sparked major anticipation across the circuit with international support from Harvy Valencia ahead of its official release.
                </p>

                <p className="text-sm leading-relaxed text-white/90 text-justify">
                  Currently, Karther continues consolidating an authentic artistic vision, dedicated to connecting the raw energy of the dancefloor with the underground and street roots of the golden era.
                </p>
              </>
            )}

            <div className="pt-2 clear-both">
              <button
                onClick={() => setIsExpanded(false)}
                className="text-[10px] font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors"
              >
                — {lang === 'es' ? 'Ver Menos' : 'Show Less'}
              </button>
            </div>
          </div>
        ) : (
          /* Read More Button centrado sin líneas laterales */
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setIsExpanded(true)}
              className="rounded-full border border-border px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-foreground transition-all duration-200 hover:bg-muted hover:border-accent whitespace-nowrap"
            >
              {lang === 'es' ? 'Ver Más' : 'Read Full Bio'}
            </button>
          </div>
        )}
        <div className="clear-both" />
      </div>
    </section>
  );
}
