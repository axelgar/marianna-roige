export default function MindfulnessSection() {
  return (
    <div className="overflow-hidden bg-white py-16 px-6 lg:px-8 xl:py-36">
      <div className="mx-auto max-w-max lg:max-w-7xl">
        <div className="relative z-10 mb-8 md:mb-2 md:px-6">
          <div className="max-w-prose text-base lg:max-w-none">
            <h2 id="mindfulness" className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Mindfulness o atenció plena o plena consciència o meditació
            </h2>
          </div>
        </div>
        <div className="relative">
          <svg
            className="absolute top-0 right-0 -mt-20 -mr-20 hidden md:block md:[overflow-anchor:none]"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
          </svg>
          <svg
            className="absolute bottom-0 left-0 -mb-20 -ml-20 hidden md:block md:[overflow-anchor:none]"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
          </svg>
          <div className="relative md:bg-white md:p-6">
            <div className="lg:grid lg:grid-cols-2 lg:gap-6">
              <div className="prose prose-lg prose-indigo text-gray-500 lg:max-w-none">
                <p>
                  La meditació és un entrenament de la ment, un procés a través del qual aquesta es neteja i
                  s’equilibra. Meditar té com objectiu obtener concentració, calma, intuició i eficiència.
                </p>
                <p>
                  Els infants tenen facilitat per a conectar-se amb qui són veritablement. En el curs experimentarem
                  diverses dinàmiques de mindfulness per tal de poder aplicar-les a l’aula i a l’àmbit escolar en
                  general.
                </p>
                <h3 className="text-emerald-400 text-xl">Objectius</h3>
                <ul role="list">
                  <li>Prendre consciència de la respiració.</li>
                  <li>Conèixer el nostre cos: moviment orgànic i breus de ioga.</li>
                  <li>Potenciar les habilitats cognitives i emocionals de l’infant</li>
                  <li> Desenvolupar la comprensió.</li>
                  <li>Descobrir-nos en la empatia.</li>
                  <li>Aprendre des de l’alegria. Cultivar els sentits.</li>
                  <li>Consciència del nostre entorn.</li>
                  <li>Despertar la consciència de comunitat.</li>
                  <li>DInàmiques per fer la feina dels docents més conscient i enriquidora.</li>
                </ul>
              </div>
              <div className="prose prose-lg prose-indigo mt-6 text-gray-500 lg:mt-0">
                <h3 className="text-emerald-400 text-xl">Continguts</h3>
                <ul role="list">
                  <li>Aturar-se per gaudir del moment present i únic.</li>
                  <li>Aclarir-se. Experimentar-nos en tranquilitat i claretat.</li>
                  <li>La respiració conscient. La campana.</li>
                  <li>Moviments orgànics. Habitant el cos. La relaxació.</li>
                  <li>Meditacions guiades.</li>
                  <li>Meditació caminant.</li>
                  <li>Habilitats per a respondre a les emocions difícils.</li>
                  <li>Plantant llavors positives. Regar les flors de la nostra ment.</li>
                  <li>Activitats creatives. Aprendre amb alegria. El dia de la mandra.</li>
                  <li>Som empàtics i comprenem els altres.</li>
                  <li>L’educador té consciència de sí mateix. Reduim l’estrés.</li>
                  <li>Relacions compenetrades entre mestres i alumnes.</li>
                </ul>
                <h3 className="text-emerald-400 text-xl">Metodologia</h3>
                <p>Formació vivencial i pràctica.</p>
                <p>
                  Teoria per anar guiant l’experimentació i l’aprofundiment de les dinàmiques i dels diferents recursos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
