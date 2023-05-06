import Footer from "@/components/Footer";
import { Header } from "@/components/Heder";

const QuiSoc = () => {
  return (
    <>
      <Header />
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-3 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <h1>
                <span className="mt-2 block text-3xl font-bold leading-8 tracking-tight text-violet-400 sm:text-4xl">
                  Qui sóc
                </span>
              </h1>
            </div>
          </div>
          <div className="md:-ml-24 lg:-mr-0 xl:ml-12 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden rounded-xl">
            <img
              className="sm:-ml-32 md:-ml-40 w-full rounded-xl object-cover max-h-96 lg:max-h-none max-w-none bg-gray-900 shadow-xl ring-1 ring-gray-400/10 lg:w-[57rem]"
              src="/qui-soc.webp"
              alt="Marianna Roige"
            />
          </div>
          <div className="lg:col-span-3 lg:col-start-2 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="prose max-w-4xl prose-lg prose-indigo mx-auto mt-6 text-gray-500">
                <p>
                  Paral.lelament al meu pas per la Universitat on vaig estudiar Psicologia i vaig descobrir
                  l’Antropologia, em vaig endinsar en el món de la dansa contemporània on trobaria la meva primera gran
                  vocació. La dansa esdevé el meu llenguatge vital. Gràcies a ella vaig poder conèixer la riquesa de la
                  creació i l´expressió artístiques, els escenaris...
                </p>

                <p>
                  Al mateix temps i quasi bé com a condició sine qua non vaig iniciar una tasca pedagògica que sovint
                  acompanya la professió de la dansa.
                  <br />
                  Donava classes a diferents col.lectius: infants, educadores, estudiants, aspirants i professionals de
                  la dansa...i també a persones que arribaven cercant consciència corporal, moviment orgànic, benestar.
                </p>

                <p>
                  Això em va ajudar a desenvolupar una nova vocació que naixeria quasi ve de forma innata en mi,
                  l’ensenyament. Li dedico hores d’estudi i molta atenció perquè arribi a esdevenir allò que ser fer,
                  allò que puc transmetre.
                </p>

                <p>
                  Més tard, ja sent mare, li vaig donar un tomb a la meva professió i em vaig formar en la disciplina
                  del Ioga Kundalini. Del Ioga per l’embaraç. Del Ioga per infants. I del Ioga Adaptat.
                  <br />
                  Transformava i integrava el meu coneixement del cos i de l’ànima des de la dansa, cap a l’horitzó
                  espiritual i saludable que proposa el Ioga.
                </p>
                <p>
                  Aquesta nova direcció la desenvolupo en dues vies diferents; Per un cantó, vaig crear un mètode per a
                  dur el Ioga i la meditació a les escoles, com a eina beneficiosa tant per mestres com per alumnes.
                  D’aquesta trajectòria va néixer un llibre que vaig escriure a quatre mans amb l&apos;Ariadna Civil,
                  també professora de Ioga: Taller de Ioga para niños. Alba editorial, 2018. I que ara mateix ja va per
                  la 3a edició!.
                </p>
                <p>Per una altra banda, dono classes regulars i formacions de Ioga per adults.</p>
                <p>
                  Per una altra banda, i sense deixar de la mà la riquesa dels ensenyaments del Ioga, m’he format en
                  Mindfulness a la Universitat de Barcelona.
                  <br />
                  Sempre m’acompanya la idea d’entendre la vida com una integració d’aprenentatges i aprofundiments.
                </p>
                <p>
                  Incorporo aquesta nova vessant a les meves classes i formacions amb l’ànim i l’objectiu de que el què
                  comparteixo amb l’alumnat, sigui el col.lectiu que sigui, destil.li experiència i coneixement, que
                  puguin ser eines útils per a transitar el nostre camí, d’una manera amable, conscient i compassiva.
                </p>
                <blockquote>
                  “Podem dir que estem realment vius, únicament en aquells instants en els quals els nostres cors són
                  conscients dels nostres tresors”. Thornton Wilder
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default QuiSoc;
