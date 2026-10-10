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
                  KARTHER es un artista en ascenso dentro de la escena electrónica colombiana, con una propuesta sonora marcada por la energía del dancefloor, la cultura underground y una identidad street propia. En 2023, su carrera recibió un impulso importante gracias a su remix de “21 Questions” de 50 Cent, que contribuyó a ampliar su reconocimiento dentro de la escena.
                </p>

                <p className="text-sm leading-relaxed text-white/90 text-justify">
                  En 2025, fue nominado en la categoría “Mejor Productor Revelación” de los Premios CDA de Colombia. A lo largo de su trayectoria, KARTHER ha compartido escenario con artistas internacionales como GORDO, Classmatic, Rafa Barrios, WAFF y Sergio Saffe, además de realizar presentaciones B2B junto a Koleto. Su catálogo incluye lanzamientos en sellos como Booth Rec, Harvibal, High Quality, Nuloud, Stiker Music y demás, así como colaboraciones musicales oficiales con artistas como Víctor Vergara.
                </p>

                <p className="text-sm leading-relaxed text-white/90 text-justify">
                  Sus producciones han recibido el support de referentes de la escena como Harvy Valencia, Tony Guerra, Moreno & Prieto, Oscar G, Koleto, Ramón Bedoya, Sortech y Jonathan Jaramillo. Asimismo, sus tracks han sido descargados por artistas internacionales de la talla de Marco Carola, Paco Osuna, Cloonee, Fisher y GORDO, retumbando en la reconocida fiesta global Taraka y en clubes insignia a nivel mundial como Club Space (Miami) y Lost Beach Club (Ecuador). De esta forma, su música continúa ampliando su alcance y conectando con circuitos de países como España, México, Argentina, Chile, Ecuador, Venezuela y Colombia.
                </p>
              </>
            ) : (
              <>
                <p className="text-sm leading-relaxed text-white/90 text-justify">
                  KARTHER is a rising artist within the Colombian electronic music scene, defined by a sonic identity rooted in dancefloor energy, underground culture, and an authentic street aesthetic. In 2023, his career gained significant momentum thanks to his remix of 50 Cent’s “21 Questions”, which played a key role in expanding his recognition across the scene.
                </p>

                <p className="text-sm leading-relaxed text-white/90 text-justify">
                  In 2025, he was nominated for “Best Breakthrough Producer” at the CDA Awards in Colombia. Throughout his career, KARTHER has shared stages with international heavyweights such as GORDO, Classmatic, Rafa Barrios, WAFF, and Sergio Saffe, in addition to delivering memorable B2B performances alongside Koleto. His discography spans releases on respected labels including Booth Rec, Harvibal, High Quality, Nuloud, Stiker Music, and more, as well as official collaborations with artists like Víctor Vergara.
                </p>

                <p className="text-sm leading-relaxed text-white/90 text-justify">
                  His productions have received continuous support from leading scene figures such as Harvy Valencia, Tony Guerra, Moreno & Prieto, Oscar G, Koleto, Ramón Bedoya, Sortech, and Jonathan Jaramillo. His tracks have also been downloaded and championed by global icons including Marco Carola, Paco Osuna, Cloonee, Fisher, and GORDO, reverberating at premier global parties like Taraka and landmark venues worldwide such as Club Space (Miami) and Lost Beach Club (Ecuador). As a result, his music continues to expand its reach, connecting with audiences across Spain, Mexico, Argentina, Chile, Ecuador, Venezuela, and Colombia.
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
